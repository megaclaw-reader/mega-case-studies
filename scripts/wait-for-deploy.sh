#!/bin/bash
# Wait for a Render deploy to go live before proceeding.
# Usage: ./scripts/wait-for-deploy.sh <slug>
# Exits 0 when the page returns 200, exits 1 after timeout.

SLUG="$1"
if [ -z "$SLUG" ]; then
  echo "❌ Usage: ./scripts/wait-for-deploy.sh <slug>"
  exit 1
fi

URL="https://megacasestudies.onrender.com/${SLUG}"
MAX_ATTEMPTS=30  # 30 × 10s = 5 minutes max
INTERVAL=10

echo "⏳ Waiting for ${URL} to go live..."

for i in $(seq 1 $MAX_ATTEMPTS); do
  STATUS=$(curl -s -o /dev/null -w "%{http_code}" "$URL")
  if [ "$STATUS" = "200" ]; then
    echo "✅ ${URL} is live (attempt ${i}/${MAX_ATTEMPTS})"
    exit 0
  fi
  echo "   Attempt ${i}/${MAX_ATTEMPTS}: got HTTP ${STATUS}, retrying in ${INTERVAL}s..."
  sleep $INTERVAL
done

echo "❌ TIMEOUT: ${URL} still not returning 200 after $((MAX_ATTEMPTS * INTERVAL))s"
exit 1
