#!/usr/bin/env bash

set -euo pipefail

if [[ $# -ne 1 ]]; then
  echo "Usage: scaffold-variant.sh <variant-dir>" >&2
  exit 1
fi

ROOT="/Users/hiroki.kai/Documents/cursor-projects/laboratory/papa/fashion-site"
TARGET="$1"

mkdir -p "$TARGET/assets"

for page in index lookbook about; do
  cp "$ROOT/${page}.html" "$TARGET/${page}.html"
done

for file in "$TARGET"/*.html; do
  perl -0pi -e 's#\./assets/styles\.css#./assets/styles.css#g' "$file"
  perl -0pi -e 's#\./assets/app\.js#../common/variant-app.js#g' "$file"
  perl -0pi -e 's#<html lang="ja">#<html lang="ja" data-asset-base="../../">#' "$file"
done

if [[ ! -f "$TARGET/assets/styles.css" ]]; then
  cat > "$TARGET/assets/styles.css" <<'EOF'
/* Variant styles go here. */
EOF
fi

if [[ ! -f "$TARGET/variant.json" ]]; then
  cat > "$TARGET/variant.json" <<'EOF'
{
  "id": "",
  "slug": "",
  "name": "",
  "references": [],
  "summary": "",
  "mood": "",
  "accent": ""
}
EOF
fi
