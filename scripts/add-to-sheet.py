#!/usr/bin/env python3
"""Add a case study entry to the Industry Specific Material Google Sheet.
Usage: python3 add-to-sheet.py "Industry Name" "Products" "AdSpend" "URL"
"""
import sys, os, json, subprocess, time

if len(sys.argv) < 5:
    print("Usage: python3 add-to-sheet.py 'Industry' 'Products' 'AdSpend' 'URL'")
    sys.exit(1)

industry = sys.argv[1]
products = sys.argv[2]
adspend = sys.argv[3]
link = sys.argv[4]

SCRIPT_DIR = "/tmp/sheet-script"
CODE_PATH = os.path.join(SCRIPT_DIR, "Code.js")

# Read the base code
with open(CODE_PATH) as f:
    base_code = f.read()

# Remove any previous addEntry function
if "function addEntry()" in base_code:
    base_code = base_code[:base_code.index("function addEntry()")].rstrip()

# Escape quotes for JS
def js_escape(s):
    return s.replace("\\", "\\\\").replace("'", "\\'").replace('"', '\\"')

# Append temp function
temp_fn = f"""

function addEntry() {{
  var data = {{
    postData: {{
      contents: JSON.stringify({{
        industry: "{js_escape(industry)}",
        products: "{js_escape(products)}",
        adspend: "{js_escape(adspend)}",
        link: "{js_escape(link)}"
      }})
    }}
  }};
  var result = doPost(data);
  Logger.log(result.getContent());
}}
"""

with open(CODE_PATH, "w") as f:
    f.write(base_code + temp_fn)

# Push
os.chdir(SCRIPT_DIR)
r = subprocess.run(["clasp", "push", "--force"], capture_output=True, text=True, timeout=30)
if r.returncode != 0:
    print(f"Push failed: {r.stderr}")
    sys.exit(1)

# Deploy to update
subprocess.run(["clasp", "deploy", "-i", 
    "AKfycbx466BaLqeJ2cTaBiISsCr779qH5qF0Jb3eKDwtgcHYzvjmYhaOESVoMvmZ9YUn9mN0TA"],
    capture_output=True, text=True, timeout=30)

# Run  
r = subprocess.run(["clasp", "run", "addEntry"], capture_output=True, text=True, timeout=30)
if "not found" in r.stderr.lower() or r.returncode != 0:
    # Fallback: try with devMode via direct API call
    print(f"clasp run failed (may need API Executable deployment): {r.stderr}")
    print("Entry NOT added to sheet. Please add manually or fix deployment.")
    # Still clean up
else:
    print(f"✅ Added to sheet: {industry}")

# Restore base code (remove temp function)
with open(CODE_PATH, "w") as f:
    f.write(base_code)
subprocess.run(["clasp", "push", "--force"], capture_output=True, text=True, timeout=30)
