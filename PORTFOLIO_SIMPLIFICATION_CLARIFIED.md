# Portfolio Simplification - Clarified

## Two Types of Images

### 1. **Featured Thumbnail** (from portfolio.json)
- **Purpose:** Represents the project across the site
- **Used in:**
  - Portfolio carousel
  - Portfolio page grid
  - Case study hero section (mobile)
  - Case study navigation (prev/next previews)
  - OpenGraph/social sharing
- **Source:** `portfolio.json` → `src` field
- **This is what we want to standardize**

### 2. **Case Study Content Images** (from MDX)
- **Purpose:** Showcase the project with custom layouts
- **Used in:**
  - Case study content section (all images with layouts)
- **Source:** MDX content with layouts like `{full}`, `{2col}`, `{3col}`
- **This stays in MDX** - you keep full control over layouts

## Current Flow

```
Case Study Page:
├── Hero Section
│   └── featuredImage (currently from MDX first image)
│       └── Used for: Mobile hero, OG image, navigation previews
│
└── Content Section
    └── All MDX images with custom layouts
        └── {full}, {2col}, {3col} layouts preserved
```

## Proposed Flow

```
Case Study Page:
├── Hero Section
│   └── featuredImage (from portfolio.json src)
│       └── Used for: Mobile hero, OG image, navigation previews
│       └── Same image as carousel & portfolio page
│
└── Content Section
    └── All MDX images with custom layouts (UNCHANGED)
        └── {full}, {2col}, {3col} layouts preserved
        └── You still have full control
```

## Benefits

✅ **Consistency:** Same featured thumbnail everywhere (carousel, portfolio, case study hero)
✅ **Flexibility:** MDX content images keep their custom layouts
✅ **Single source:** Update featured thumbnail in one place (portfolio.json)
✅ **No breaking changes:** Case study content images work exactly as before

## Implementation

1. **Update case study page** to look up `portfolio.json` by `caseStudySlug`
2. **Use `src` from portfolio.json** as `featuredImage` (instead of extracting from MDX)
3. **Keep MDX extraction as fallback** if no portfolio.json match
4. **MDX content images unchanged** - all layouts preserved

