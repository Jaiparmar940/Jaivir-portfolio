#!/bin/bash
# Pull from origin and merge, but keep the I&E portfolio index.html intact.
# Run from repo root when you have network access.

set -e
cd "$(dirname "$0")"

BACKUP="index.html.ours"
if [[ ! -f "$BACKUP" ]]; then
  cp index.html "$BACKUP"
  echo "Backed up index.html to $BACKUP"
fi

echo "Pulling from origin main..."
if ! git pull origin main; then
  if [[ -f .git/MERGE_HEAD ]]; then
    echo "Merge in progress. Restoring portfolio index.html and completing merge."
    cp "$BACKUP" index.html
    git add index.html
    git commit --no-edit
    echo "Merge finished; index.html kept from backup."
    exit 0
  fi
  exit 1
fi

if ! cmp -s index.html "$BACKUP"; then
  echo "Restoring portfolio index.html from backup (keeping your I&E version)."
  cp "$BACKUP" index.html
  echo "Done. Stage and commit if you want to keep it: git add index.html && git commit -m 'Keep I&E portfolio index.html'"
else
  echo "index.html unchanged by pull; nothing to restore."
fi
