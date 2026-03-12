#!/usr/bin/env python3
"""
Research and register a new industry before building a case study.
This script MUST be run for any industry not already in industry-rules.json.

Usage: python3 scripts/research-industry.py --industry "Dog Grooming" --model lead_gen_services

What it does:
1. Checks if the industry already exists in the rules
2. If not, prompts for required parameters
3. Adds the industry to industry-rules.json with validated ranges
4. Outputs a research brief that the sub-agent must use when building the case study

This ensures NO case study is built with guessed numbers.
"""

import json, os, sys, argparse

SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
RULES_PATH = os.path.join(SCRIPT_DIR, "industry-rules.json")

VALID_MODELS = [
    "lead_gen_services", "lead_gen_professional", "wealth_management",
    "real_estate", "mortgage_lending", "healthcare_medical", "saas",
    "ecommerce", "subscription", "nonprofit"
]

def load_rules():
    with open(RULES_PATH) as f:
        return json.load(f)

def save_rules(rules):
    with open(RULES_PATH, 'w') as f:
        json.dump(rules, f, indent=2)
    print(f"  ✅ Saved to {RULES_PATH}")

def main():
    parser = argparse.ArgumentParser(description="Register a new industry for case study validation")
    parser.add_argument("--industry", required=True, help="Industry name exactly as it appears in the data file")
    parser.add_argument("--model", required=True, choices=VALID_MODELS, help="Revenue model type")
    parser.add_argument("--cpl-min", type=float, help="Minimum realistic CPL for this industry")
    parser.add_argument("--cpl-max", type=float, help="Maximum realistic CPL for this industry")
    parser.add_argument("--deal-min", type=float, help="Minimum deal/transaction value")
    parser.add_argument("--deal-max", type=float, help="Maximum deal/transaction value")
    parser.add_argument("--cpl-category", help="CPL category key (e.g. 'dog_grooming')")
    parser.add_argument("--notes", help="Industry-specific notes for sub-agents")
    
    args = parser.parse_args()
    
    rules = load_rules()
    
    # Check if already exists
    if args.industry in rules["industry_to_model"]:
        print(f"\n⚠️  Industry '{args.industry}' already mapped to model '{rules['industry_to_model'][args.industry]}'")
        print("No changes needed.")
        return
    
    # Add to mapping
    rules["industry_to_model"][args.industry] = args.model
    save_rules(rules)
    
    print(f"\n✅ Registered industry '{args.industry}' → model '{args.model}'")
    
    # Output research brief
    print(f"\n{'='*60}")
    print(f"RESEARCH BRIEF FOR: {args.industry}")
    print(f"{'='*60}")
    print(f"Revenue model: {args.model}")
    
    model_info = rules["models"].get(args.model, {})
    if model_info:
        print(f"Revenue formula: {model_info.get('revenue_formula', 'N/A')}")
        print(f"\nRules to follow:")
        for rule in model_info.get("rules", []):
            print(f"  • {rule}")
    
    if args.cpl_min and args.cpl_max:
        print(f"\nCPL range: ${args.cpl_min:.0f} - ${args.cpl_max:.0f}")
    else:
        print(f"\n⚠️  CPL range not provided. Add to CPL_RANGES in validate-industry.py:")
        print(f'    "{args.cpl_category or args.industry.lower().replace(" ", "_")}": ({args.cpl_min or "???"}, {args.cpl_max or "???"}),')
    
    if args.deal_min and args.deal_max:
        print(f"Deal value range: ${args.deal_min:,.0f} - ${args.deal_max:,.0f}")
    else:
        print(f"\n⚠️  Deal value range not provided. Add to DEAL_VALUE_RANGES in validate-industry.py:")
        print(f'    "{args.cpl_category or args.industry.lower().replace(" ", "_")}": ({args.deal_min or "???"}, {args.deal_max or "???"}),')
    
    print(f"\n{'='*60}")
    print("BEFORE BUILDING THE CASE STUDY, RESEARCH:")
    print(f"{'='*60}")
    print(f"1. What is the typical CPL for {args.industry} advertising?")
    print(f"2. What is the average deal/transaction value in {args.industry}?")
    print(f"3. What is the typical sales cycle length?")
    print(f"4. What seasonality patterns exist? (peak months, slow months)")
    print(f"5. What is the typical close rate from lead to customer?")
    print(f"6. What are the main advertising channels used?")
    print(f"7. What KPIs matter most to {args.industry} business owners?")
    print(f"\nDO NOT proceed with building until these questions are answered")
    print(f"with REAL data from industry sources, not guesses.\n")

if __name__ == "__main__":
    main()
