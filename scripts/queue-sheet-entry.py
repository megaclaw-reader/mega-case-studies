#!/usr/bin/env python3
"""Queue a case study entry for the Google Sheet.
Sub-agents call this. June processes the queue on next heartbeat or after deploy.
Usage: python3 queue-sheet-entry.py "Industry" "Products" "AdSpend" "URL"
"""
import sys, json, os
from datetime import datetime

if len(sys.argv) < 5:
    print("Usage: python3 queue-sheet-entry.py 'Industry' 'Products' 'AdSpend' 'URL'")
    sys.exit(1)

QUEUE_FILE = os.path.join(os.path.dirname(__file__), "..", "..", "memory", "sheet-queue.json")

entry = {
    "industry": sys.argv[1],
    "products": sys.argv[2],
    "adspend": sys.argv[3],
    "link": sys.argv[4],
    "timestamp": datetime.now().isoformat(),
    "processed": False
}

# Load existing queue
queue = []
if os.path.exists(QUEUE_FILE):
    with open(QUEUE_FILE) as f:
        queue = json.load(f)

queue.append(entry)

with open(QUEUE_FILE, "w") as f:
    json.dump(queue, f, indent=2)

print(f"✅ Queued for sheet: {entry['industry']}")
