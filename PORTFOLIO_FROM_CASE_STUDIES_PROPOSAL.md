# Portfolio Data from Case Studies - Proposal

## Current Problem
- Hard to scan `portfolio.json` when editing all items for a project (e.g., all THINK Agents items)
- Slow to hide a project (need to find and hide multiple items in JSON)
- Portfolio data scattered across JSON file
- Hard to see which images belong to which project

## Proposed Solution
**Store portfolio items in case study frontmatter** - all items for a project in one place!

## Structure

### Case Study Frontmatter
```yaml
---
title: "THINK Agents"
description: "A collection of work for THINK Agents."
tags: ["AI", "Platform Design", "Product Design"]
client: "THINK Foundation"
published: true
portfolioItems:
  - src: "/portfolio/think-agents.png"
    alt: "THINK Agents - AI Platform Homepage"
    title: "AI you own"
    metatags: ["AI", "Platform Design", "Product Design"]
    featured: true
    hidden: false
    aspectRatio: "landscape"
  - src: "/portfolio/think-agents-dashboard.png"
    alt: "THINK Agents - Dashboard"
    title: "A dashboard for independent AI"
    metatags: ["Web3", "Dashboard Design", "UX Design"]
    featured: false
    hidden: false
    aspectRatio: "landscape"
  - src: "/portfolio/think-agents-claim.png"
    alt: "THINK Agents - Claim Interface"
    title: "$THINK token claim interface"
    metatags: ["Web3", "Interface Design", "Front-end Development"]
    featured: false
    hidden: false
    aspectRatio: "landscape"
---
```

## Benefits

✅ **Edit all items for a project in one place** - open case study, edit portfolioItems array
✅ **Hide entire project easily** - set `published: false` or `hidden: true` on case study
✅ **See all images together** - portfolio items + case study images in same file
✅ **Select featured images** - just set `featured: true` on the item you want
✅ **Auto-generate portfolio.json** - script reads from case studies and generates JSON
✅ **Easier to scan** - all THINK Agents items together, all 6079 items together, etc.

## Implementation

1. **Add `portfolioItems` to case study frontmatter**
2. **Create script to generate `portfolio.json` from case studies**
3. **Update components to read from case studies** (or generated JSON)
4. **Keep portfolio.json as generated file** (or read directly from case studies)

## Migration Path

1. Create script to migrate existing `portfolio.json` → case study frontmatter
2. Test with one case study
3. Migrate all case studies
4. Update components to use new structure

