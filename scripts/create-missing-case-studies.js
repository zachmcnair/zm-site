#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Missing projects that don't have case studies
const missingProjects = {
  'caleb-mabrey': {
    title: 'Caleb Mabrey',
    client: 'Caleb Mabrey',
    description: 'A collection of work for Caleb Mabrey.',
    tags: ['Creative Direction', 'Album Packaging'],
    portfolioItems: [
      {
        src: '/portfolio/caleb-mabrey-cover.webp',
        alt: 'Caleb Mabrey - Album Cover',
        title: 'Caleb Mabrey',
        metatags: ['Creative Direction', 'Album Packaging'],
        featured: false,
        hidden: false,
        aspectRatio: 'square',
        category: 'music'
      },
      {
        src: '/portfolio/caleb-mabrey-cover-2.webp',
        alt: 'Caleb Mabrey - Album Cover - In The Spaces',
        title: 'In The Spaces',
        metatags: ['Creative Direction', 'Album Packaging'],
        featured: false,
        hidden: false,
        aspectRatio: 'square',
        category: 'music'
      }
    ]
  },
  'forenn': {
    title: 'Forenn',
    client: 'Forenn',
    description: 'A collection of work for Forenn.',
    tags: ['Creative Direction', 'Visual Identity', 'Packaging'],
    portfolioItems: [
      {
        src: '/portfolio/forenn-forenn.webp',
        alt: 'Forenn',
        title: 'How far can you take a dream?',
        metatags: ['Creative Direction', 'Visual Identity', 'Packaging'],
        featured: false,
        hidden: false,
        aspectRatio: 'square',
        category: 'music'
      }
    ]
  },
  'humin': {
    title: 'Humin',
    client: 'Humin',
    description: 'A collection of work for Humin.',
    tags: ['Creative Direction', 'Website Design', 'UX Design'],
    portfolioItems: [
      {
        src: '/portfolio/humin-web.avif',
        alt: 'Humin Web',
        title: 'Humin Platform',
        metatags: ['Creative Direction', 'Website Design', 'UX Design'],
        featured: false,
        hidden: false,
        aspectRatio: 'portrait',
        category: 'brand'
      }
    ]
  },
  'hank-booth': {
    title: 'Hank & Booth',
    client: 'Hank & Booth',
    description: 'A collection of work for Hank & Booth.',
    tags: ['Title Design', 'Movie Poster Design', 'Art Direction'],
    portfolioItems: [
      {
        src: '/portfolio/hank-booth-fire-star.webp',
        alt: 'Hank & Booth - Five Star',
        title: 'Five Star',
        metatags: ['Title Design', 'Movie Poster Design', 'Art Direction'],
        featured: false,
        hidden: false,
        aspectRatio: 'portrait',
        category: 'brand'
      }
    ]
  }
};

const caseStudyDir = path.join(__dirname, '../app/content/case-studies');

Object.keys(missingProjects).forEach(slug => {
  const project = missingProjects[slug];
  const caseStudyPath = path.join(caseStudyDir, `${slug}.mdx`);
  
  if (fs.existsSync(caseStudyPath)) {
    console.log(`⚠️  Case study already exists: ${slug}.mdx`);
    return;
  }
  
  const frontmatter = {
    title: project.title,
    description: project.description,
    tags: project.tags,
    client: project.client,
    published: true,
    portfolioItems: project.portfolioItems
  };
  
  const content = `${project.description}\n\n## Role / Deliverables\n\n*Add roles and deliverables here.*\n\n## Collaborators\n\n*Optional: Add collaborators here.*\n\n## Project Images\n![Featured Image](${project.portfolioItems[0].src}){full}`;
  
  const yamlContent = yaml.dump(frontmatter, { 
    lineWidth: -1,
    noRefs: true,
    quotingType: '"',
  }).trim();
  
  const fileContent = `---\n${yamlContent}\n---\n\n${content}`;
  
  fs.writeFileSync(caseStudyPath, fileContent);
  console.log(`✅ Created case study: ${slug}.mdx`);
});

console.log('\n✨ Created missing case studies!');

