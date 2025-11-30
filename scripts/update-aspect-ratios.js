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

let updated = 0;

portfolio.forEach((item) => {
  const imagePath = path.join(__dirname, '../public', item.src);
  
  if (fs.existsSync(imagePath)) {
    try {
      const buffer = fs.readFileSync(imagePath);
      const dimensions = imageSize(buffer);
      const detected = getAspectRatio(dimensions.width, dimensions.height);
      
      if (item.aspectRatio !== detected) {
        item.aspectRatio = detected;
        updated++;
        console.log(`Updated ${item.id}: ${item.title} → ${detected} (${dimensions.width}x${dimensions.height})`);
      }
    } catch (error) {
      console.error(`Error reading ${item.src}: ${error.message}`);
    }
  }
});

if (updated > 0) {
  fs.writeFileSync(portfolioPath, JSON.stringify(portfolio, null, 2) + '\n');
  console.log(`\n✅ Updated ${updated} aspect ratios in portfolio.json`);
} else {
  console.log('\n✅ All aspect ratios are already correct');
}
