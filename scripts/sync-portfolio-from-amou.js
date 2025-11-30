#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');
const yaml = require('js-yaml');

const amouPortfolioPath = path.join(__dirname, '../../../amou/app/lib/portfolio.json');
const zmCaseStudyDir = path.join(__dirname, '../app/content/case-studies');

// Read amou portfolio
const amouPortfolio = JSON.parse(fs.readFileSync(amouPortfolioPath, 'utf8'));

// Create a map by src for quick lookup
const amouBySrc = {};
amouPortfolio.forEach(item => {
  // Normalize src (remove leading slash differences, handle case)
  const normalizedSrc = item.src.toLowerCase().replace(/^\/portfolio\//, '/portfolio/');
  amouBySrc[normalizedSrc] = item;
  // Also store by exact match
  amouBySrc[item.src] = item;
});

console.log('Syncing portfolio metadata from amou to zm-site...\n');

let updated = 0;
const caseStudies = fs.readdirSync(zmCaseStudyDir).filter(f => f.endsWith('.mdx'));

caseStudies.forEach(file => {
  const caseStudyPath = path.join(zmCaseStudyDir, file);
  const fileContents = fs.readFileSync(caseStudyPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  if (!data.portfolioItems || !Array.isArray(data.portfolioItems)) {
    return; // Skip if no portfolio items
  }
  
  let caseStudyUpdated = false;
  
  // Update each portfolio item
  data.portfolioItems.forEach(item => {
    // Try to find matching item in amou by src
    const amouItem = amouBySrc[item.src] || amouBySrc[item.src.toLowerCase()];
    
    if (amouItem) {
      const changes = [];
      
      // Update title if different
      if (amouItem.title && item.title !== amouItem.title) {
        changes.push(`title: "${item.title}" → "${amouItem.title}"`);
        item.title = amouItem.title;
      }
      
      // Update metatags if different
      if (amouItem.metatags && JSON.stringify(item.metatags) !== JSON.stringify(amouItem.metatags)) {
        changes.push(`metatags: updated`);
        item.metatags = amouItem.metatags;
      }
      
      // Update alt if different
      if (amouItem.alt && item.alt !== amouItem.alt) {
        changes.push(`alt: updated`);
        item.alt = amouItem.alt;
      }
      
      // Update category if different and exists in amou
      if (amouItem.category && item.category !== amouItem.category) {
        changes.push(`category: "${item.category || 'null'}" → "${amouItem.category}"`);
        item.category = amouItem.category;
      }
      
      if (changes.length > 0) {
        caseStudyUpdated = true;
        console.log(`  ${file}: ${item.src}`);
        changes.forEach(change => console.log(`    - ${change}`));
      }
    }
  });
  
  if (caseStudyUpdated) {
    // Reconstruct file with updated frontmatter
    const frontmatter = yaml.dump(data, { 
      lineWidth: -1,
      noRefs: true,
      quotingType: '"',
    }).trim();
    
    const newFile = `---\n${frontmatter}\n---\n\n${content}`;
    fs.writeFileSync(caseStudyPath, newFile);
    updated++;
    console.log('');
  }
});

if (updated > 0) {
  console.log(`✅ Updated ${updated} case studies with metadata from amou`);
  console.log('\nNext steps:');
  console.log('1. Review the changes');
  console.log('2. Run: node scripts/generate-portfolio-json.js');
  console.log('3. Run: node scripts/update-aspect-ratios.js');
} else {
  console.log('✅ All portfolio metadata already matches amou');
}

