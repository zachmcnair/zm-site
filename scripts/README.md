# Portfolio Scripts

## Auto-detect Aspect Ratios

Since manually determining aspect ratios is tedious, these scripts help automate it.

### Detect Aspect Ratios (Preview)
```bash
node scripts/detect-aspect-ratios.js
```
Shows what aspect ratios would be detected without making changes.

### Update Aspect Ratios (Auto-fix)
```bash
node scripts/update-aspect-ratios.js
```
Automatically updates `portfolio.json` with detected aspect ratios based on actual image dimensions.

### Aspect Ratio Mapping
- `ratio >= 2.5` → `ultra-wide`
- `ratio >= 1.5` → `wide`
- `ratio >= 1.1` → `landscape`
- `ratio >= 0.9` → `square`
- `ratio < 0.9` → `portrait`

**Note:** `aspectRatio` is optional in the code - if missing, it falls back to hash-based column spanning.
