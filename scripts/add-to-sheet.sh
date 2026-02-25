#!/bin/bash
# Usage: ./add-to-sheet.sh "Industry Name" "Products" "AdSpend" "URL"
# Adds a case study entry to the Google Sheet via Apps Script

INDUSTRY="$1"
PRODUCTS="$2"  
ADSPEND="$3"
LINK="$4"

if [ -z "$INDUSTRY" ] || [ -z "$LINK" ]; then
  echo "Usage: ./add-to-sheet.sh 'Industry' 'Products' 'AdSpend' 'URL'"
  exit 1
fi

SCRIPT_DIR="/tmp/sheet-script"

# Write a temp function that adds the specific row
cat > "$SCRIPT_DIR/add_entry.js" << EOF
function addEntry() {
  var data = {
    postData: {
      contents: JSON.stringify({
        industry: "$INDUSTRY",
        products: "$PRODUCTS",
        adspend: "$ADSPEND",
        link: "$LINK"
      })
    }
  };
  var result = doPost(data);
  Logger.log(result.getContent());
}
EOF

# Append to Code.js
cat "$SCRIPT_DIR/add_entry.js" >> "$SCRIPT_DIR/Code.js"

# Push and run
cd "$SCRIPT_DIR"
clasp push --force 2>/dev/null
RESULT=$(clasp run addEntry 2>&1)
echo "$RESULT"

# Clean up - remove the temp function from Code.js
python3 -c "
with open('$SCRIPT_DIR/Code.js') as f:
    content = f.read()
# Remove everything after 'function addEntry'
idx = content.find('function addEntry()')
if idx > 0:
    content = content[:idx].rstrip()
with open('$SCRIPT_DIR/Code.js', 'w') as f:
    f.write(content)
"
clasp push --force 2>/dev/null
rm -f "$SCRIPT_DIR/add_entry.js"
