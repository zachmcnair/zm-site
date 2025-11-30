#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const portfolioPath = path.join(__dirname, '../app/lib/portfolio.json');
const caseStudyDir = path.join(__dirname, '../app/content/case-studies');
const portfolio = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));

// Group portfolio items by caseStudySlug
const itemsByCaseStudy = {};
portfolio.forEach(item => {
  if (item.caseStudySlug) {
    if (!itemsByCaseStudy[item.caseStudySlug]) {
      itemsByCaseStudy[item.caseStudySlug] = [];
    }
    itemsByCaseStudy[item.caseStudySlug].push(item);
  }
});

console.log('Migrating portfolio items to case studies...\n');

let migrated = 0;

Object.keys(itemsByCaseStudy).forEach(slug => {
  const caseStudyPath = path.join(caseStudyDir, `${slug}.mdx`);
  
  if (!fs.existsSync(caseStudyPath)) {
    console.log(`⚠️  Case study not found: ${slug}.mdx`);
    return;
  }
  
  const fileContents = fs.readFileSync(caseStudyPath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Prepare portfolio items (remove id, add caseStudySlug)
  const portfolioItems = itemsByCaseStudy[slug].map(item => ({
    src: item.src,
    alt: item.alt,
    title: item.title,
    metatags: item.metatags,
    featured: item.featured || false,
    hidden: item.hidden || false,
    aspectRatio: item.aspectRatio,
    // Keep optional fields
    ...(item.caseStudyUrl && { caseStudyUrl: item.caseStudyUrl }),
    ...(item.projectId && { projectId: item.projectId }),
    ...(item.category && { category: item.category }),
  }));
  
  // Add portfolioItems to frontmatter
  data.portfolioItems = portfolioItems;
  
  // Reconstruct file with updated frontmatter
  const yaml = require('js-yaml');
  const frontmatter = yaml.dump(data, { 
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
  }).trim();
  
  const newFile = `---\n${frontmatter}\n---\n\n${content}`;
  
  fs.writeFileSync(caseStudyPath, newFile);
  console.log(`✅ Migrated ${portfolioItems.length} items to ${slug}.mdx`);
  migrated += portfolioItems.length;
});

console.log(`\n✨ Migrated ${migrated} portfolio items to case studies!`);
console.log('\nNext steps:');
console.log('1. Review the case study files');
console.log('2. Run: node scripts/generate-portfolio-json.js (to create new portfolio.json)');
console.log('3. Update components to read from case studies or generated JSON');

