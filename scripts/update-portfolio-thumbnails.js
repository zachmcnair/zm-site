#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const caseStudyDir = path.join(__dirname, '../app/content/case-studies');
const portfolioPath = path.join(__dirname, '../app/lib/portfolio.json');
const portfolio = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));

// Extract first image from case study content
function getFirstImageFromCaseStudy(content) {
  const lines = content.split('\n');
  let inImagesSection = false;
  for (const line of lines) {
    if (line.startsWith('## Project Images')) {
      inImagesSection = true;
      continue;
    }
    if (inImagesSection && line.startsWith('## ')) {
      break;
    }
    if (inImagesSection && line.trim()) {
      const imageMatch = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
      if (imageMatch) {
        return imageMatch[2]; // Return the image path
      }
    }
  }
  return null;
}

let updated = 0;
const updates = [];

// Process each case study
const caseStudies = fs.readdirSync(caseStudyDir).filter(f => f.endsWith('.mdx'));

caseStudies.forEach(file => {
  const slug = file.replace('.mdx', '');
  const caseStudyPath = path.join(caseStudyDir, file);
  const content = fs.readFileSync(caseStudyPath, 'utf8');
  const { content: body } = matter(content);
  
  const firstImage = getFirstImageFromCaseStudy(body);
  if (!firstImage) return;
  
  // Find all portfolio items for this case study
  const portfolioItems = portfolio.filter(item => item.caseStudySlug === slug);
  
  // Only update the FIRST item (primary/featured item) for each project
  // This allows other items to use specific images for different aspects
  const primaryItem = portfolioItems.find(item => item.featured) || portfolioItems[0];
  
  if (primaryItem && primaryItem.src !== firstImage) {
    const oldSrc = primaryItem.src;
    primaryItem.src = firstImage;
    updated++;
    updates.push({
      id: primaryItem.id,
      title: primaryItem.title,
      old: oldSrc,
      new: firstImage
    });
  }
});

if (updated > 0) {
  fs.writeFileSync(portfolioPath, JSON.stringify(portfolio, null, 2) + '\n');
  console.log(`✅ Updated ${updated} primary portfolio thumbnails:\n`);
  updates.forEach(u => {
    console.log(`  ${u.id}: ${u.title}`);
    console.log(`    ${u.old} → ${u.new}`);
  });
  console.log(`\n✨ Primary thumbnails updated!`);
  console.log(`\nNote: Only the primary/featured item for each project was updated.`);
  console.log(`Other items can use specific images to highlight different aspects.`);
} else {
  console.log('✅ All primary portfolio thumbnails already match case study featured images');
}

