#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log('Usage: node scripts/add-project.js <project-slug> <client-name>');
  console.log('Example: node scripts/add-project.js mindful-monkz "Mindful Monkz"');
  process.exit(1);
}

const slug = args[0];
const clientName = args[1];
const title = args[2] || clientName; // Optional title, defaults to client name

// Paths
const portfolioPath = path.join(__dirname, '../app/lib/portfolio.json');
const caseStudyPath = path.join(__dirname, `../app/content/case-studies/${slug}.mdx`);
const portfolioDir = path.join(__dirname, '../public/portfolio');

// Read existing portfolio
const portfolio = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));

// Get next ID
const maxId = Math.max(...portfolio.map(item => parseInt(item.id) || 0));
const nextId = (maxId + 1).toString();

// Check if case study already exists
if (fs.existsSync(caseStudyPath)) {
  console.error(`❌ Case study already exists: ${caseStudyPath}`);
  process.exit(1);
}

// Create case study template
const caseStudyTemplate = `---
title: "${title}"
description: "A collection of work for ${clientName}."
tags: ["Tag 1", "Tag 2", "Tag 3"]
client: "${clientName}"
published: true
---

Description of the project goes here.

## Role / Deliverables

*Add roles and deliverables here.*
Role 1, Role 2, Role 3

## Collaborators

*Optional: Add collaborators here.*
Role: Name

## Project Images
![${clientName} - Featured Image](/portfolio/${slug}-featured.png){full}

![${clientName} - Image 2](/portfolio/${slug}-image-2.png){2col}

![${clientName} - Image 3](/portfolio/${slug}-image-3.png){2col}
`;

// Create portfolio entry template
const portfolioEntry = {
  id: nextId,
  src: `/portfolio/${slug}-featured.png`, // Placeholder - user needs to add actual image
  alt: `${clientName} - Featured Image`,
  title: title,
  client: clientName,
  metatags: ["Tag 1", "Tag 2", "Tag 3"],
  aspectRatio: "portrait", // Will be auto-detected later
  hidden: false,
  featured: true,
  caseStudySlug: slug,
};

// Write case study
fs.writeFileSync(caseStudyPath, caseStudyTemplate);
console.log(`✅ Created case study: ${caseStudyPath}`);

// Add to portfolio
portfolio.push(portfolioEntry);
fs.writeFileSync(portfolioPath, JSON.stringify(portfolio, null, 2) + '\n');
console.log(`✅ Added portfolio entry with ID: ${nextId}`);

// Instructions
console.log('\n📋 Next steps:');
console.log(`1. Add featured image: public/portfolio/${slug}-featured.png`);
console.log(`2. Add additional images: public/portfolio/${slug}-image-2.png, etc.`);
console.log(`3. Update case study content: app/content/case-studies/${slug}.mdx`);
console.log(`4. Update portfolio entry: app/lib/portfolio.json (ID: ${nextId})`);
console.log(`5. Run: node scripts/update-aspect-ratios.js`);
console.log('\n✨ Done!');

