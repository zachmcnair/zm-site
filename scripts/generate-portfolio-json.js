#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const caseStudyDir = path.join(__dirname, '../app/content/case-studies');
const portfolioPath = path.join(__dirname, '../app/lib/portfolio.json');

const caseStudies = fs.readdirSync(caseStudyDir).filter(f => f.endsWith('.mdx'));

let allPortfolioItems = [];
let idCounter = 1;

caseStudies.forEach(file => {
  const slug = file.replace('.mdx', '');
  const caseStudyPath = path.join(caseStudyDir, file);
  const fileContents = fs.readFileSync(caseStudyPath, 'utf8');
  const { data } = matter(fileContents);
  
  // Skip if case study is not published
  if (data.published === false) return;
  
  // Get portfolio items from frontmatter
  if (data.portfolioItems && Array.isArray(data.portfolioItems)) {
    data.portfolioItems.forEach(item => {
      // Skip hidden items
      if (item.hidden) return;
      
      allPortfolioItems.push({
        id: idCounter.toString(),
        src: item.src,
        alt: item.alt,
        title: item.title,
        client: data.client || '',
        metatags: item.metatags || [],
        aspectRatio: item.aspectRatio || 'portrait',
        hidden: item.hidden || false,
        featured: item.featured || false,
        caseStudySlug: slug,
        ...(item.caseStudyUrl && { caseStudyUrl: item.caseStudyUrl }),
        ...(item.projectId && { projectId: item.projectId }),
        ...(item.category && { category: item.category }),
      });
      
      idCounter++;
    });
  }
});

// Also handle items without case studies (from old portfolio.json)
// This is a fallback for items that don't have case studies yet

fs.writeFileSync(portfolioPath, JSON.stringify(allPortfolioItems, null, 2) + '\n');
console.log(`✅ Generated portfolio.json with ${allPortfolioItems.length} items from case studies`);

