#!/bin/bash
# Regenerate submission.pdf from submission.md
# Needs: pandoc + Google Chrome. Run from this folder.
set -e
DIR="$(cd "$(dirname "$0")" && pwd)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

pandoc "$DIR/submission.md" -f gfm -t html5 --syntax-highlighting=none -o "$DIR/.pdf-body.html"

python3 - "$DIR" <<'EOF'
import sys, pathlib
d = pathlib.Path(sys.argv[1])
body = (d / ".pdf-body.html").read_text()
css = (d / "pdf-style.css").read_text()
(d / ".pdf-full.html").write_text(
    f'<!doctype html><html><head><meta charset="utf-8">'
    f'<title>Nykaa UX Analysis</title><style>{css}</style></head>'
    f'<body>{body}</body></html>'
)
EOF

"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$DIR/submission.pdf" "file://$DIR/.pdf-full.html"

rm -f "$DIR/.pdf-body.html" "$DIR/.pdf-full.html"
echo "-> submission.pdf"
