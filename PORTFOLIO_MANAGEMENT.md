# Portfolio Management - Quick Reference

**TL;DR:** Edit case study frontmatter → Run generate script → Done!

**NEW:** Portfolio items are now stored in case study frontmatter! All items for a project are in one place.

---

## 🚀 Quick Workflows

### Edit Portfolio Items for a Project

**All items for a project are in the case study frontmatter!**

1. Open the case study: `app/content/case-studies/project-slug.mdx`
2. Edit the `portfolioItems` array in the frontmatter
3. Run: `node scripts/generate-portfolio-json.js`  ← Regenerate portfolio.json
4. Run: `node scripts/update-aspect-ratios.js`  ← Update aspect ratios

### Add New Portfolio Item to Existing Project

1. Open the case study: `app/content/case-studies/project-slug.mdx`
2. Add a new item to the `portfolioItems` array:
```yaml
portfolioItems:
  - src: "/portfolio/new-image.png"
    alt: "Description"
    title: "Project Title"
    metatags: ["Tag 1", "Tag 2"]
    featured: false
    hidden: false
```
3. Run: `node scripts/generate-portfolio-json.js`
4. Run: `node scripts/update-aspect-ratios.js`

### Add New Project + Case Study

**Use the script - it creates everything for you:**
```bash
node scripts/add-project.js <project-slug> <client-name> [title]
```

**Then:**
1. Add your images to `/public/portfolio/`
2. Edit the case study: `app/content/case-studies/project-slug.mdx`
3. Add `portfolioItems` array to frontmatter
4. Run: `node scripts/generate-portfolio-json.js`
5. Run: `node scripts/update-aspect-ratios.js`

### Hide Entire Project

**Super easy now!**
1. Open the case study: `app/content/case-studies/project-slug.mdx`
2. Set `published: false` in frontmatter
3. Run: `node scripts/generate-portfolio-json.js`

### Update Existing Item's Image

1. Replace image in `/public/portfolio/` (same filename)
2. Run: `node scripts/generate-portfolio-json.js` (if you changed the filename)
3. Run: `node scripts/update-aspect-ratios.js`

---

## ⚠️ REMINDER: Workflow

**After editing case study frontmatter, always run:**
```bash
node scripts/generate-portfolio-json.js  # Regenerate portfolio.json
node scripts/update-aspect-ratios.js     # Update aspect ratios
```

**Don't skip these steps!** portfolio.json is generated, not manually edited.

---

## 📝 Portfolio Item Template (Case Study Frontmatter)

Add to `portfolioItems` array in case study frontmatter:

```yaml
portfolioItems:
  - src: "/portfolio/your-image.jpg"
    alt: "Descriptive alt text"
    title: "Project Title"
    metatags: ["Tag 1", "Tag 2"]
    featured: false
    hidden: false
    aspectRatio: "portrait"  # ← Will be auto-detected
```

**Required fields:** `src`, `alt`, `title`, `metatags`  
**Everything else is optional** - the script will handle `aspectRatio`.

---

## 🎯 Portfolio Item Fields (in Case Study Frontmatter)

| Field | What It Does | Required? |
|-------|-------------|-----------|
| `src` | Image path (`/portfolio/filename.jpg`) | ✅ Yes |
| `alt` | Alt text for accessibility | ✅ Yes |
| `title` | Project title | ✅ Yes |
| `metatags` | Array of tags | ✅ Yes |
| `featured` | Show in carousel | ❌ No (default: false) |
| `hidden` | Hide from portfolio | ❌ No (default: false) |
| `aspectRatio` | Auto-detected by script | ❌ No |
| `caseStudyUrl` | External link (optional) | ❌ No |
| `projectId` | Groups related items (optional) | ❌ No |
| `category` | Project category (optional) | ❌ No |

**Note:** `id`, `client`, and `caseStudySlug` are automatically added when generating portfolio.json

---

## 🔗 Linking to Case Studies

**Automatic!** Portfolio items in a case study automatically link to that case study.

**External link (optional):**
```yaml
portfolioItems:
  - src: "/portfolio/image.png"
    caseStudyUrl: "https://external-site.com"  # Optional external link
```
- Only used if you want to override the case study link

---

## 🛠️ Scripts

### Generate Portfolio.json from Case Studies ⭐
```bash
node scripts/generate-portfolio-json.js
```
**When to run:** After editing case study frontmatter  
**What it does:** Reads all case studies and generates `portfolio.json`  
**This is the main script now!** Edit case studies, then run this.

### Add New Project + Case Study
```bash
node scripts/add-project.js <project-slug> <client-name> [title]
```
**When to run:** When adding a new project with a case study  
**What it does:** Creates case study template automatically  
**Example:** `node scripts/add-project.js mindful-monkz "Mindful Monkz"`

### Auto-Update Aspect Ratios
```bash
node scripts/update-aspect-ratios.js
```
**When to run:** After generating portfolio.json  
**What it does:** Detects and updates all aspect ratios automatically

### Preview Aspect Ratios (Optional)
```bash
node scripts/detect-aspect-ratios.js
```
**When to run:** If you want to see what would change before updating  
**What it does:** Shows detected aspect ratios without making changes

---

## 📂 File Locations

- **Portfolio data (EDIT HERE):** `app/content/case-studies/*.mdx` (frontmatter)
- **Portfolio data (GENERATED):** `app/lib/portfolio.json` (don't edit manually!)
- **Portfolio images:** `public/portfolio/`
- **Case studies:** `app/content/case-studies/*.mdx`
- **Scripts:** `scripts/generate-portfolio-json.js`, `scripts/update-aspect-ratios.js`

---

## 🐛 Quick Troubleshooting

**Item not showing?**
- Check `hidden: false`
- For carousel, check `featured: true`
- Verify image exists at `src` path

**Case study link not working?**
- Verify `caseStudySlug` matches MDX filename (without `.mdx`)
- Check case study exists in `app/content/case-studies/`

**Aspect ratio wrong?**
- Run `node scripts/update-aspect-ratios.js`

---

## 💡 Pro Tips

1. **Edit case studies, not portfolio.json** - portfolio.json is now generated!
2. **All items for a project in one place** - open the case study to see/edit all items
3. **Hide entire project easily** - set `published: false` in case study frontmatter
4. **Don't manually set aspectRatio** - let the script handle it
5. **Set `featured: true`** on items you want in the carousel
6. **After editing case studies, always run:** `generate-portfolio-json.js` then `update-aspect-ratios.js`

---

## ⚡ One-Liner Reminder

**After editing case study frontmatter:**
```bash
node scripts/generate-portfolio-json.js && node scripts/update-aspect-ratios.js
```

That's it! 🎉
