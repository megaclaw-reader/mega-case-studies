#!/usr/bin/env python3
"""
Auto-fix all case study data files:
1. Bump any monthly spend < $5000 to $5000-$5300 range
2. Recalculate monthly CPL = spend / leads
3. Recalculate monthly CPQL = spend / qualified
4. Recalculate monthly ROAS = revenue / spend
5. Recalculate summary totals from monthly data
6. Recalculate impact totals from monthly data
"""

import re, os, glob, math, random

data_dir = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "src", "data")
files = sorted(glob.glob(os.path.join(data_dir, "*.ts")))
files = [f for f in files if not f.endswith("types.ts") and not f.endswith("index.ts")]

def format_currency_short(val):
    """Format like $163.4K or $1.27M"""
    if val >= 1_000_000:
        m = val / 1_000_000
        if m == int(m):
            return f"${int(m)}M"
        return f"${m:.2f}M"
    elif val >= 100_000:
        k = val / 1000
        if k == int(k):
            return f"${int(k)}K"
        return f"${k:.1f}K"
    elif val >= 10_000:
        k = val / 1000
        if k == int(k):
            return f"${int(k)}K"
        return f"${k:.1f}K"
    else:
        return f"${val:,.0f}"

def fix_file(filepath):
    fname = os.path.basename(filepath)
    with open(filepath) as f:
        content = f.read()
    
    original = content
    changes = []
    
    # Find paidAds monthly section
    paid_match = re.search(r'paidAds:\s*\{', content)
    if not paid_match:
        return 0, []
    
    # Find monthly array
    monthly_start = content.find('monthly:', paid_match.start())
    if monthly_start == -1:
        return 0, []
    
    arr_start = content.find('[', monthly_start)
    if arr_start == -1:
        return 0, []
    
    depth = 0
    arr_end = arr_start
    for i in range(arr_start, len(content)):
        if content[i] == '[':
            depth += 1
        elif content[i] == ']':
            depth -= 1
            if depth == 0:
                arr_end = i
                break
    
    monthly_text = content[arr_start:arr_end+1]
    new_monthly_text = monthly_text
    
    # Check if this is ecom (has orders/aov fields)
    is_ecom = 'orders:' in monthly_text and ('aov:' in monthly_text or 'addToCarts:' in monthly_text)
    
    # Parse and fix each monthly row
    row_pattern = re.compile(r'\{([^}]+)\}')
    
    # Collect all monthly data for summary recalc
    all_months = []
    
    for m in row_pattern.finditer(monthly_text):
        row_text = m.group(0)
        if 'month:' not in row_text:
            continue
        
        # Extract all fields
        fields = {}
        for field in ['month', 'spend', 'leads', 'cpl', 'qualified', 'cpql', 'deals', 
                       'revenue', 'roas', 'sessions', 'addToCarts', 'costPerCart', 
                       'orders', 'aov', 'costPerOrder']:
            if field == 'month':
                mm = re.search(r'month:\s*["\']([^"\']+)["\']', row_text)
                fields[field] = mm.group(1) if mm else None
            else:
                mm = re.search(rf'{field}:\s*([\d.]+)', row_text)
                fields[field] = float(mm.group(1)) if mm else None
        
        new_row = row_text
        modified = False
        
        spend = fields.get('spend')
        if spend is None:
            continue
            
        # Fix spend floor
        if spend < 5000:
            new_spend = 5000 + random.randint(0, 347)
            new_row = re.sub(r'(spend:\s*)[\d.]+', f'\\g<1>{new_spend}', new_row)
            changes.append(f"  {fields['month']}: Bumped spend ${spend:.0f} → ${new_spend}")
            spend = new_spend
            modified = True
        
        leads = fields.get('leads')
        qualified = fields.get('qualified')
        deals = fields.get('deals')
        revenue = fields.get('revenue')
        orders = fields.get('orders')
        aov = fields.get('aov')
        
        # Fix CPL
        if leads and leads > 0:
            correct_cpl = round(spend / leads)
            if fields.get('cpl') is not None and abs(correct_cpl - fields['cpl']) > 1:
                new_row = re.sub(r'(cpl:\s*)[\d.]+', f'\\g<1>{correct_cpl}', new_row)
                modified = True
            fields['cpl'] = correct_cpl
        
        # Fix CPQL
        if qualified and qualified > 0:
            correct_cpql = round(spend / qualified)
            if fields.get('cpql') is not None and abs(correct_cpql - fields['cpql']) > 1:
                new_row = re.sub(r'(cpql:\s*)[\d.]+', f'\\g<1>{correct_cpql}', new_row)
                modified = True
            fields['cpql'] = correct_cpql
        
        # Fix costPerCart (ecom)
        if fields.get('addToCarts') and fields['addToCarts'] > 0:
            correct_cpc = round(spend / fields['addToCarts'], 2)
            if fields.get('costPerCart') is not None and abs(correct_cpc - fields['costPerCart']) > 0.5:
                new_row = re.sub(r'(costPerCart:\s*)[\d.]+', f'\\g<1>{correct_cpc}', new_row)
                modified = True
        
        # Fix costPerOrder (ecom)
        if orders and orders > 0 and 'costPerOrder:' in row_text:
            correct_cpo = round(spend / orders, 2)
            if fields.get('costPerOrder') is not None and abs(correct_cpo - fields['costPerOrder']) > 0.5:
                new_row = re.sub(r'(costPerOrder:\s*)[\d.]+', f'\\g<1>{correct_cpo}', new_row)
                modified = True
        
        # Fix ROAS
        if revenue and revenue > 0 and spend > 0:
            correct_roas = round(revenue / spend, 2)
            if fields.get('roas') is not None and abs(correct_roas - fields['roas']) > 0.05:
                new_row = re.sub(r'(roas:\s*)[\d.]+', f'\\g<1>{correct_roas}', new_row)
                modified = True
            fields['roas'] = correct_roas
        
        if modified:
            new_monthly_text = new_monthly_text.replace(row_text, new_row)
        
        # Store for summary calc
        all_months.append({
            'spend': spend,
            'leads': leads or 0,
            'qualified': qualified or 0,
            'deals': deals or 0,
            'revenue': revenue or 0,
            'orders': orders or 0,
        })
    
    if not all_months:
        return 0, []
    
    # Replace monthly section
    content = content[:arr_start] + new_monthly_text + content[arr_end+1:]
    
    # Calculate totals
    total_spend = sum(m['spend'] for m in all_months)
    total_leads = sum(m['leads'] for m in all_months)
    total_qualified = sum(m['qualified'] for m in all_months)
    total_deals = sum(m['deals'] for m in all_months)
    total_revenue = sum(m['revenue'] for m in all_months)
    total_orders = sum(m['orders'] for m in all_months)
    avg_cpl = total_spend / total_leads if total_leads > 0 else 0
    avg_cpql = total_spend / total_qualified if total_qualified > 0 else 0
    blended_roas = total_revenue / total_spend if total_spend > 0 else 0
    
    # Fix paidAds summary section
    # Find summary array within paidAds
    sum_start = content.find('summary:', paid_match.start())
    if sum_start == -1:
        # Try finding it relative to paidAds
        pa_pos = content.find('paidAds:')
        if pa_pos > -1:
            sum_start = content.find('summary:', pa_pos)
    
    if sum_start > -1:
        sa_start = content.find('[', sum_start)
        if sa_start > -1:
            depth = 0
            sa_end = sa_start
            for i in range(sa_start, len(content)):
                if content[i] == '[':
                    depth += 1
                elif content[i] == ']':
                    depth -= 1
                    if depth == 0:
                        sa_end = i
                        break
            
            summary_text = content[sa_start:sa_end+1]
            new_summary = summary_text
            
            # Fix each summary item by label
            item_pattern = re.compile(r'\{[^}]*label:\s*["\']([^"\']+)["\'][^}]*value:\s*["\']([^"\']+)["\'][^}]*\}')
            for im in item_pattern.finditer(summary_text):
                label = im.group(1).lower()
                old_value = im.group(2)
                old_item = im.group(0)
                new_value = None
                
                # ORDER MATTERS: check cost/avg BEFORE count to avoid "Avg Cost Per Qualified Lead" matching as count
                if 'total ad spend' in label or ('total' in label and 'spend' in label):
                    new_value = format_currency_short(total_spend)
                elif ('avg' in label or 'cost' in label) and 'qual' in label:
                    new_value = f"${int(round(avg_cpql)):,}"
                elif ('cost per lead' in label or 'avg' in label and 'lead' in label) and 'qual' not in label:
                    new_value = f"${int(round(avg_cpl)):,}"
                elif 'cost per order' in label or 'avg cost per order' in label:
                    if total_orders > 0:
                        new_value = f"${total_spend/total_orders:.2f}"
                elif 'qualified' in label and ('lead' in label or 'rfq' in label or 'consult' in label or 'request' in label or 'install' in label):
                    new_value = f"{int(total_qualified):,}"
                elif 'closed' in label or 'purchase order' in label:
                    new_value = f"{int(total_deals):,}"
                elif 'total orders' in label:
                    # Ecom files often use 'deals' for orders count
                    order_count = total_orders if total_orders > 0 else total_deals
                    if order_count > 0:
                        new_value = f"{int(order_count):,}"
                
                if new_value and new_value != old_value:
                    new_item = old_item.replace(f'"{old_value}"', f'"{new_value}"').replace(f"'{old_value}'", f"'{new_value}'")
                    # Also fix any "note" that references old reduction %
                    if 'note' in new_item and avg_cpql > 0:
                        # Try to find the "from" value and recalc reduction
                        from_match = re.search(r'from\s*\$?([\d,]+)', new_item)
                        if from_match:
                            from_val = float(from_match.group(1).replace(',', ''))
                            if from_val > avg_cpql:
                                reduction = round((1 - avg_cpql / from_val) * 100)
                                new_item = re.sub(r'↓\d+%', f'↓{reduction}%', new_item)
                    new_summary = new_summary.replace(old_item, new_item)
                    changes.append(f"  SUMMARY: {im.group(1)}: {old_value} → {new_value}")
            
            content = content[:sa_start] + new_summary + content[sa_end+1:]
    
    # Fix impact section
    imp_match = re.search(r'impact:\s*\[', content)
    if imp_match:
        depth = 0
        ie_start = imp_match.end() - 1
        ie_end = ie_start
        for i in range(ie_start, len(content)):
            if content[i] == '[':
                depth += 1
            elif content[i] == ']':
                depth -= 1
                if depth == 0:
                    ie_end = i
                    break
        
        impact_text = content[ie_start:ie_end+1]
        new_impact = impact_text
        
        for im in item_pattern.finditer(impact_text) if 'item_pattern' in dir() else re.compile(r'\{[^}]*label:\s*["\']([^"\']+)["\'][^}]*value:\s*["\']([^"\']+)["\'][^}]*\}').finditer(impact_text):
            label = im.group(1).lower()
            old_value = im.group(2)
            old_item = im.group(0)
            new_value = None
            
            if 'total revenue' in label or 'ad revenue' in label or 'revenue generated' in label or 'revenue attributed' in label:
                if total_revenue > 0:
                    new_value = format_currency_short(total_revenue)
            elif 'blended roas' in label or 'overall roas' in label or ('roas' in label and 'peak' not in label):
                if blended_roas > 0:
                    new_value = f"{blended_roas:.2f}x"
            elif 'total pipeline' in label:
                # Pipeline is typically 1.5-2x revenue
                pass  # Don't auto-fix, too business-specific
            
            if new_value and new_value != old_value:
                new_item = old_item.replace(f'"{old_value}"', f'"{new_value}"').replace(f"'{old_value}'", f"'{new_value}'")
                new_impact = new_impact.replace(old_item, new_item)
                changes.append(f"  IMPACT: {im.group(1)}: {old_value} → {new_value}")
        
        content = content[:ie_start] + new_impact + content[ie_end+1:]
    
    if content != original:
        with open(filepath, 'w') as f:
            f.write(content)
        return len(changes), changes
    return 0, []

# Run fixes
total_fixed = 0
total_changes = 0
for filepath in files:
    fname = os.path.basename(filepath)
    n_changes, change_list = fix_file(filepath)
    if n_changes > 0:
        total_fixed += 1
        total_changes += n_changes
        print(f"✅ {fname} — {n_changes} fixes")
        for c in change_list:
            print(c)
        print()

print(f"\nDone: {total_fixed} files fixed, {total_changes} total changes")
