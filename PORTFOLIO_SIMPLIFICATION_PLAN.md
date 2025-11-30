# Portfolio Simplification Plan

## Current State

### Portfolio Components (3 types):

1. **PortfolioOrganic** ✅
   - **Location:** `app/components/portfolio-organic.tsx`
   - **Data Source:** `app/lib/portfolio.json`
   - **Used In:** `/portfolio` page
   - **Status:** Already using portfolio.json

2. **PortfolioCarousel** ❌
   - **Location:** `app/components/portfolio-carousel.tsx`
   - **Data Source:** Hardcoded array in component (~296 lines of data)
   - **Used In:** `landing.tsx`, `page.tsx`
   - **Status:** Needs to use portfolio.json

3. **PortfolioMasonry** ❌
   - **Location:** `app/components/portfolio-masonry.tsx`
   - **Data Source:** Hardcoded array in component (~386 lines of data)
   - **Used In:** NOT CURRENTLY USED
   - **Status:** Can be removed or updated

### Case Studies
- **Current:** Extract first image from MDX content
- **Location:** `app/case-studies/[slug]/page.tsx` (extractFirstImage function)
- **Status:** Should use featured thumbnail from portfolio.json

## Goal

**Single source of truth:** Every project has a `featuredThumbnail` (or use existing `src`) that is used in:
1. ✅ Portfolio carousel
2. ✅ Portfolio page (PortfolioOrganic)
3. ✅ First image in case study

## Implementation Plan

### Step 1: Use `src` as Featured Thumbnail
- `portfolio.json` already has `src` field for each item
- This can serve as the featured thumbnail
- No schema changes needed

### Step 2: Update PortfolioCarousel
- Remove hardcoded data array
- Import and use `portfolio.json`
- Filter for `featured: true` items (or all non-hidden items)
- Map `src` → image source

### Step 3: Update Case Studies
- Instead of extracting first image from MDX, look up the project in `portfolio.json` by `caseStudySlug`
- Use the `src` field from portfolio.json as the featured image
- Fallback to MDX extraction if no portfolio.json match

### Step 4: Clean Up
- Remove or update PortfolioMasonry (if not needed, remove it)
- Ensure all components use portfolio.json as single source

## Benefits

1. **Single source of truth** - portfolio.json
2. **Consistency** - Same image everywhere
3. **Maintainability** - Update one place, affects all views
4. **Simpler code** - No duplicate data arrays

