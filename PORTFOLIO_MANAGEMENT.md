# Portfolio Management Reference

Quick reference guide for managing portfolio items and case studies.

## 📋 Table of Contents

- [Adding New Portfolio Items](#adding-new-portfolio-items)
- [Aspect Ratio Management](#aspect-ratio-management)
- [Portfolio Data Structure](#portfolio-data-structure)
- [Case Study Integration](#case-study-integration)
- [Common Tasks](#common-tasks)

---

## Adding New Portfolio Items

### 1. Add Image to `/public/portfolio/`
Place your image file in the `public/portfolio/` directory.

### 2. Add Entry to `app/lib/portfolio.json`
Add a new object to the array with the following structure:

```json
{
  "id": "unique-id",
  "src": "/portfolio/your-image.jpg",
  "alt": "Descriptive alt text",
  "title": "Project Title",
  "client": "Client Name",
  "metatags": ["Tag 1", "Tag 2", "Tag 3"],
  "aspectRatio": "portrait",  // Optional - will auto-detect if omitted
  "hidden": false,
  "featured": true,
  "category": "ai",  // Optional: ai, web3, music, brand, hospitality, game
  "projectId": "project-identifier",  // Optional: groups related items
  "caseStudySlug": "case-study-slug",  // Optional: links to case study
  "caseStudyUrl": "https://external-url.com"  // Optional: external link
}
```

### 3. Auto-Detect Aspect Ratio
After adding the item, run:
```bash
node scripts/update-aspect-ratios.js
```
This will automatically detect and set the `aspectRatio` based on the actual image dimensions.

---

## Aspect Ratio Management

### Purpose
Aspect ratios determine how portfolio items are displayed in the grid layout:
- `wide` and `ultra-wide` items span 2 columns in the portfolio grid
- Other aspect ratios use hash-based column spanning for variety

### Scripts

#### Preview Mode (No Changes)
```bash
node scripts/detect-aspect-ratios.js
```
**Purpose:** Shows what aspect ratios would be detected without making any changes.  
**Use when:** You want to see what would change before updating.

#### Auto-Update Mode
```bash
node scripts/update-aspect-ratios.js
```
**Purpose:** Automatically detects and updates all aspect ratios in `portfolio.json` based on actual image dimensions.  
**Use when:**
- After adding new portfolio items
- After replacing images with different dimensions
- To fix incorrect aspect ratios

### Aspect Ratio Mapping
The scripts use these thresholds based on width/height ratio:
- `ratio >= 2.5` → `ultra-wide`
- `ratio >= 1.5` → `wide`
- `ratio >= 1.1` → `landscape`
- `ratio >= 0.9` → `square`
- `ratio < 0.9` → `portrait`

### Notes
- `aspectRatio` is **optional** in the code - if missing, it falls back to hash-based column spanning
- You can manually set `aspectRatio` if you want to override auto-detection
- The auto-detection is based on actual image file dimensions

---

## Portfolio Data Structure

### Required Fields
- `id` - Unique identifier (string)
- `src` - Image path starting with `/portfolio/` (string)
- `alt` - Alt text for accessibility (string)
- `title` - Project title (string)
- `client` - Client name (string)
- `metatags` - Array of tags (string[])

### Optional Fields
- `aspectRatio` - `portrait` | `square` | `landscape` | `wide` | `ultra-wide`
- `hidden` - Hide from portfolio (boolean, default: `false`)
- `featured` - Show in featured views (boolean, default: `false`)
- `category` - Project category (string)
- `projectId` - Groups related items together (string)
- `caseStudySlug` - Links to internal case study (string)
- `caseStudyUrl` - Links to external URL (string)

### Field Usage

#### `featured`
- Used by `PortfolioCarousel` to filter which items appear in the carousel
- Used by `PortfolioOrganic` when `featuredOnly={true}`

#### `hidden`
- Hides items from all portfolio views
- Useful for work-in-progress or archived items

#### `caseStudySlug` vs `caseStudyUrl`
- **Priority 1:** `caseStudySlug` → Links to `/case-studies/[slug]` (internal case study)
- **Priority 2:** `caseStudyUrl` → Links to external URL (if starts with `http`)
- **Priority 3:** No link → Item is not clickable

#### `projectId`
- Groups multiple portfolio items that belong to the same project
- Used by intelligent filtering to avoid showing duplicate projects

---

## Case Study Integration

### Linking Portfolio Items to Case Studies

#### Internal Case Study (Recommended)
```json
{
  "caseStudySlug": "project-name"
}
```
- Links to `/case-studies/project-name`
- Case study must exist in `app/content/case-studies/project-name.mdx`

#### External Link
```json
{
  "caseStudyUrl": "https://external-site.com"
}
```
- Links to external URL
- Only used if `caseStudySlug` is not provided

### Featured Image
- Portfolio items use `src` from `portfolio.json` as the featured thumbnail
- This same image appears in:
  - Portfolio carousel
  - Portfolio page grid
  - Case study hero section (mobile)
  - Case study navigation previews
- Case study content images (with custom layouts) remain in MDX

---

## Common Tasks

### Add a New Portfolio Item with Case Study

1. **Add image:** Place in `/public/portfolio/`
2. **Create case study:** Add `app/content/case-studies/project-slug.mdx`
3. **Add portfolio entry:** Add to `app/lib/portfolio.json` with `caseStudySlug: "project-slug"`
4. **Auto-detect aspect ratio:** Run `node scripts/update-aspect-ratios.js`

### Update Portfolio Item Image

1. **Replace image:** Update file in `/public/portfolio/` (keep same filename)
2. **Update aspect ratio:** Run `node scripts/update-aspect-ratios.js` if dimensions changed

### Hide/Show Portfolio Items

Edit `hidden` field in `portfolio.json`:
```json
{
  "hidden": true  // Hide from all views
}
```

### Feature/Unfeature Items

Edit `featured` field in `portfolio.json`:
```json
{
  "featured": true  // Show in carousel and featured views
}
```

### Fix All Aspect Ratios

Run the auto-update script:
```bash
node scripts/update-aspect-ratios.js
```

### Preview Aspect Ratio Changes

Before updating, preview what would change:
```bash
node scripts/detect-aspect-ratios.js
```

---

## Portfolio Components

### PortfolioOrganic
- **Location:** `app/components/portfolio-organic.tsx`
- **Data Source:** `app/lib/portfolio.json`
- **Used In:** `/portfolio` page
- **Features:**
  - Intelligent filtering (by project, category, client)
  - Dynamic column spanning (based on `aspectRatio`)
  - Blur-to-focus image animations
  - Links to case studies or external URLs

### PortfolioCarousel
- **Location:** `app/components/portfolio-carousel.tsx`
- **Data Source:** `app/lib/portfolio.json` (filters for `featured: true`)
- **Used In:** Landing page, home page
- **Features:**
  - Horizontal scrolling carousel
  - Two rows with different speeds
  - Infinite loop animation

---

## Quick Reference Commands

```bash
# Preview aspect ratio changes
node scripts/detect-aspect-ratios.js

# Auto-update all aspect ratios
node scripts/update-aspect-ratios.js
```

---

## Troubleshooting

### Aspect Ratio Not Updating
- Ensure image file exists in `/public/portfolio/`
- Check that `src` path in `portfolio.json` matches the file location
- Verify image file is readable (not corrupted)

### Portfolio Item Not Showing
- Check `hidden: false` in `portfolio.json`
- For carousel, ensure `featured: true`
- Verify image file exists at the `src` path

### Case Study Link Not Working
- Verify `caseStudySlug` matches the MDX filename (without `.mdx`)
- Check that case study exists in `app/content/case-studies/`
- Ensure `caseStudySlug` is set (not just `caseStudyUrl`)

---

## File Locations

- **Portfolio Data:** `app/lib/portfolio.json`
- **Portfolio Images:** `public/portfolio/`
- **Case Studies:** `app/content/case-studies/*.mdx`
- **Aspect Ratio Scripts:** `scripts/detect-aspect-ratios.js`, `scripts/update-aspect-ratios.js`
- **Portfolio Components:** `app/components/portfolio-*.tsx`

