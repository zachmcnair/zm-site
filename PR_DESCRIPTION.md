# Portfolio System Updates, Typography Improvements, and Alignment Fixes

## Summary
This PR includes comprehensive updates to the portfolio system, typography improvements across the site, alignment fixes, and enhanced metadata for better SEO.

## Key Changes

### Portfolio System
- **Portfolio Card Hover States**: Removed text color changes on hover, made entire card clickable with subtle overlay
- **Button Styling**: Restored button text and background on hover with proper styling
- **Card Spacing**: Added gap between portfolio card image and text
- **Button Text**: Updated to title case ("View Case Study", "View Live Site")

### Navigation & Header
- **CV Link**: Added CV link to header navigation (desktop and mobile) with external link icon
- **Typography**: Updated header links to use consistent font weights and sizes
- **Alignment**: Fixed alignment across all pages to match "Currently at work" column

### Typography & Design System
- **Font Weights**: Standardized font weights across header, footer, and content sections
- **Font Sizes**: Updated to use consistent type unit system (`--unit-xs` to `--unit-xxl`)
- **Line Heights**: Set default line-height to 150% globally
- **Footer**: Updated footer headings and text to use regular weight
- **Homepage**: Updated expertise, experience, and memo sections with consistent typography

### Content & Layout
- **"Have Helped Launch" List**: Added dividers between items on mobile and desktop using subtle `--raised` color
- **Spacing**: Improved spacing between list items for better readability
- **Alignment**: Fixed alignment of memo, expertise, and experience sections to match header

### Metadata & SEO
- **Site-wide Metadata**: Updated all page metadata to reflect 25+ case studies and 36+ portfolio items
- **Sitemap**: Enhanced sitemap to include all case studies and blog posts with proper priorities
- **OpenGraph & Twitter Cards**: Updated social sharing metadata across all pages
- **Keywords**: Added comprehensive keywords including all major clients and projects

### Case Studies
- **Hero Alignment**: Fixed case study hero content alignment with header
- **Navigation**: Improved case study navigation styling

### Assets
- **CV PDF**: Added CV PDF to public folder for download

## Files Changed
- `app/blog/page.tsx` - Added OpenGraph and Twitter metadata
- `app/case-studies/page.tsx` - Enhanced metadata with portfolio counts
- `app/components/case-study-hero.tsx` - Fixed alignment and typography
- `app/components/case-study-navigation.tsx` - Typography updates
- `app/components/footer.tsx` - Font weight and typography consistency
- `app/components/lastfm-context.tsx` - Improved image size handling
- `app/components/lastfm.tsx` - Increased album art size by 25%
- `app/components/nav.tsx` - Added CV link, typography updates
- `app/components/portfolio-organic.tsx` - Hover state improvements, button styling
- `app/components/weather.tsx` - Increased icon size by 25%
- `app/global.css` - Typography system updates, CSS variables
- `app/landing.tsx` - Alignment fixes, dividers, typography updates
- `app/layout.tsx` - Enhanced metadata with portfolio information
- `app/portfolio/page.tsx` - Updated metadata with portfolio counts
- `app/portfolio/portfolio-client.tsx` - Alignment fixes
- `app/sitemap.ts` - Added all case studies and blog posts
- `tailwind.config.js` - Added custom font size utilities
- `public/ZACH MCNAIR - CV.pdf` - New CV file

## Testing
- ✅ Portfolio cards hover correctly without text color changes
- ✅ CV link appears in header navigation
- ✅ All pages align properly with header "Currently at work" column
- ✅ Dividers appear on "Have helped launch" list items
- ✅ Typography is consistent across all pages
- ✅ Metadata includes all portfolio items and case studies

## Impact
- Better user experience with improved hover states and navigation
- Enhanced SEO with comprehensive metadata updates
- Consistent typography and alignment across the entire site
- Improved accessibility with proper link indicators

