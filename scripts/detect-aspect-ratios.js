const fs = require('fs');
const path = require('path');
const { imageSize } = require('image-size');

const portfolioPath = path.join(__dirname, '../app/lib/portfolio.json');
const portfolio = JSON.parse(fs.readFileSync(portfolioPath, 'utf8'));

// Map aspect ratios based on width/height ratio
function getAspectRatio(width, height) {
  const ratio = width / height;
  
  if (ratio >= 2.5) return 'ultra-wide';
  if (ratio >= 1.5) return 'wide';
  if (ratio >= 1.1) return 'landscape';
  if (ratio >= 0.9) return 'square';
  return 'portrait';
}

console.log('Detecting aspect ratios from images...\n');

portfolio.forEach((item, index) => {
  const imagePath = path.join(__dirname, '../public', item.src);
  
  if (fs.existsSync(imagePath)) {
    try {
      const buffer = fs.readFileSync(imagePath);
      const dimensions = imageSize(buffer);
      const detected = getAspectRatio(dimensions.width, dimensions.height);
      
      if (item.aspectRatio !== detected) {
        console.log(`${item.id}: ${item.title}`);
        console.log(`  Current: ${item.aspectRatio || 'undefined'}`);
        console.log(`  Detected: ${detected} (${dimensions.width}x${dimensions.height})`);
        console.log('');
      }
    } catch (error) {
      console.log(`${item.id}: ${item.title} - Error reading image: ${error.message}`);
    }
  } else {
    console.log(`${item.id}: ${item.title} - Image not found: ${imagePath}`);
  }
});

console.log('\nTo auto-update, run: node scripts/update-aspect-ratios.js');
