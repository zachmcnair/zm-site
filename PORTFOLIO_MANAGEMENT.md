# Portfolio Management - Quick Reference

**TL;DR:** Edit case study frontmatter → Run generate script → Done!

**NEW:** Portfolio items are now stored in case study frontmatter! All items for a project are in one place.

---

## 🚀 Quick Workflows

### Add New Portfolio Item

```
1. Add image to /public/portfolio/
2. Add entry to app/lib/portfolio.json
3. Run: node scripts/update-aspect-ratios.js  ← DON'T FORGET THIS!
```

### Add Portfolio Item + Case Study (EASY MODE)

**Use the script - it creates everything for you:**
```bash
node scripts/add-project.js <project-slug> <client-name> [title]
```

**Example:**
```bash
node scripts/add-project.js mindful-monkz "Mindful Monkz"
```

**Then:**
1. Add your images to `/public/portfolio/` (use the filenames from the template)
2. Edit the case study: `app/content/case-studies/project-slug.mdx`
3. Edit the portfolio entry in `app/lib/portfolio.json` (update metatags, etc.)
4. Run: `node scripts/update-aspect-ratios.js`  ← DON'T FORGET THIS!

**Manual method (if you prefer):**
```
1. Add image to /public/portfolio/
2. Create case study: app/content/case-studies/project-slug.mdx
3. Add entry to app/lib/portfolio.json with caseStudySlug: "project-slug"
4. Run: node scripts/update-aspect-ratios.js  ← DON'T FORGET THIS!
```

### Update Existing Item's Image

```
1. Replace image in /public/portfolio/ (same filename)
2. Run: node scripts/update-aspect-ratios.js  ← DON'T FORGET THIS!
```

---

## ⚠️ REMINDER: Aspect Ratios

**After ANY change to portfolio items, run:**
```bash
node scripts/update-aspect-ratios.js
```

This auto-detects aspect ratios from image dimensions. **Don't skip this step!**

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

## 🎯 Common Fields Explained

| Field | What It Does | Required? |
|-------|-------------|-----------|
| `id` | Unique identifier | ✅ Yes |
| `src` | Image path (`/portfolio/filename.jpg`) | ✅ Yes |
| `alt` | Alt text for accessibility | ✅ Yes |
| `title` | Project title | ✅ Yes |
| `client` | Client name | ✅ Yes |
| `metatags` | Array of tags | ✅ Yes |
| `aspectRatio` | Auto-detected by script | ❌ No |
| `hidden` | Hide from portfolio | ❌ No (default: false) |
| `featured` | Show in carousel | ❌ No (default: false) |
| `caseStudySlug` | Link to case study | ❌ No |
| `caseStudyUrl` | External link | ❌ No |

---

## 🔗 Linking to Case Studies

**Internal case study (recommended):**
```json
"caseStudySlug": "project-name"
```
- Links to `/case-studies/project-name`
- Case study must exist in `app/content/case-studies/project-name.mdx`

**External link (fallback):**
```json
"caseStudyUrl": "https://external-site.com"
```
- Only used if `caseStudySlug` is not set

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

- **Portfolio data:** `app/lib/portfolio.json`
- **Portfolio images:** `public/portfolio/`
- **Case studies:** `app/content/case-studies/*.mdx`
- **Scripts:** `scripts/update-aspect-ratios.js`

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

**After adding ANY portfolio item:**
```bash
node scripts/update-aspect-ratios.js
```

That's it! 🎉
