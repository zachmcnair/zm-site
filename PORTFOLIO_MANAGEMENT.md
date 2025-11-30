# Portfolio Management - Quick Reference

**TL;DR:** Add image → Add to `portfolio.json` → Run aspect ratio script → Done.

---

## 🚀 Quick Workflows

### Add New Portfolio Item

```
1. Add image to /public/portfolio/
2. Add entry to app/lib/portfolio.json
3. Run: node scripts/update-aspect-ratios.js  ← DON'T FORGET THIS!
```

### Add Portfolio Item + Case Study

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

## 📝 Portfolio.json Entry Template

Copy-paste this and fill in:

```json
{
  "id": "next-number",
  "src": "/portfolio/your-image.jpg",
  "alt": "Descriptive alt text",
  "title": "Project Title",
  "client": "Client Name",
  "metatags": ["Tag 1", "Tag 2"],
  "aspectRatio": "portrait",  // ← Will be auto-detected, but you can set manually
  "hidden": false,
  "featured": true,
  "caseStudySlug": "project-slug"  // ← If you have a case study
}
```

**Required fields:** `id`, `src`, `alt`, `title`, `client`, `metatags`  
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

### Auto-Update Aspect Ratios
```bash
node scripts/update-aspect-ratios.js
```
**When to run:** After adding/updating portfolio items  
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

1. **Don't manually set aspectRatio** - let the script handle it
2. **Use `caseStudySlug` for internal links** - it's cleaner than external URLs
3. **Set `featured: true`** if you want it in the carousel
4. **Use `projectId`** to group related items (optional)

---

## ⚡ One-Liner Reminder

**After adding ANY portfolio item:**
```bash
node scripts/update-aspect-ratios.js
```

That's it! 🎉
