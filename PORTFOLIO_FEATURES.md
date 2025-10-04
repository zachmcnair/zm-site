# Portfolio Carousel Features Guide

Your portfolio carousel now has enhanced randomization and hiding capabilities! Here's how to use all the new features.

## 🎯 **Key Features Added**

### 1. **Smart Randomization**
- ✅ **No overlap** between top and bottom rows
- ✅ **Fisher-Yates shuffle** algorithm for better randomness
- ✅ **Automatic re-randomization** when items are hidden/shown
- ✅ **Different content** on each page refresh
- ✅ **Intelligent row distribution** that prevents overlap even when hiding items

### 2. **Hide/Show Portfolio Pieces**
- ✅ **Individual item control** - hide/show specific pieces
- ✅ **Bulk operations** - hide multiple items at once
- ✅ **Quick presets** - common hiding patterns
- ✅ **Easy restoration** - show all items with one click
- ✅ **No row overlap** - hiding items won't cause duplicate content between rows

### 3. **Enhanced Layout**
- ✅ **Responsive design** maintained
- ✅ **Smooth animations** preserved
- ✅ **Accessibility** features intact
- ✅ **Error handling** improved
- ✅ **New ultra-wide aspect ratio** for very wide images (prevents cropping)

### 4. **Expanded Portfolio**
- ✅ **35 total portfolio items** (up from 12)
- ✅ **New AI/Web3 work** (IDs 13-25)
- ✅ **Recent creative projects** (IDs 26-35)
- ✅ **Categorized content** for easy management
- ✅ **Optimized image sizing** for all aspect ratios

## 🚀 **How to Use**

### **Quick Start - Hide Items**

#### Option 1: Direct Array Editing
```typescript
// In portfolio-carousel.tsx, change any item's hidden property:
{
  id: '13',
  src: '/portfolio/SOULS-1c(compressed).jpg',
  alt: 'Souls - AI Agent Experience',
  title: 'Souls',
  aspectRatio: 'portrait',
  hidden: true  // ← Set to true to hide this item
}
```

#### Option 2: Use Helper Functions
```typescript
import { 
  hidePortfolioItems, 
  togglePortfolioItem, 
  showAllPortfolioItems 
} from './components/portfolio-carousel'

// Hide specific items by ID
hidePortfolioItems(['1', '3', '5'])

// Hide individual item
togglePortfolioItem('2', true)  // Hide item with ID '2'

// Show individual item
togglePortfolioItem('4', false) // Show item with ID '4'

// Show all items
showAllPortfolioItems()
```

### **Testing the Features**

The `PortfolioControls` component is currently added to your landing page for testing. It provides:

- **Quick Hide Buttons**: Hide odd/even IDs, original 12 items
- **AI/Web3 Focus**: Show only AI/Web3 work, hide AI/Web3, show only original work
- **Individual Controls**: Hide specific items 1-35
- **Show All Button**: Restore all hidden items
- **Live Preview**: See changes immediately

## 🎨 **Portfolio Categories**

### **Original Work (IDs 1-12)**
- Jane's Dine Inn, Hammock, Wistia, Indeed, HCA Healthcare
- Underoath, Lemburg House, Hank & Booth
- Son Lux, Forenn, Avaere

### **AI/Web3 Work (IDs 13-25)**
- **Souls**: AI Agent Experience (3 variations)
- **Mindful Monkz**: NFT Community Platform
- **THINK Agents**: AI Platform, Dashboard, Claim, Thinkubator, Token
- **Wire Network**: Decentralized Infrastructure
- **IAI**: Independent AI Institute
- **MOR Swap**: DeFi Interface

### **Additional Creative Work (IDs 26-35)**
- Creative Market, Humin, Arrow Pattern, Capital One App
- Caleb Mabrey (2 album covers), Jane Wild, MuteMath
- Wistia Web, W-Co

## 🎨 **Customization Examples**

### **Show Only AI/Web3 Work**
```typescript
// Hide everything except AI/Web3 projects
hidePortfolioItems(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'])
// Only shows: Souls, Mindful Monkz, THINK, Wire Network, IAI, MOR Swap
```

### **Show Only Original Creative Work**
```typescript
// Hide AI/Web3 and additional work, show only original 12
hidePortfolioItems(['13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'])
```

### **Music Industry Focus**
```typescript
// Show only music-related projects
hidePortfolioItems(['1', '2', '5', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'])
// Only shows: Wistia, Indeed, Underoath, Forenn, Avaere, MuteMath, Caleb Mabrey
```

### **Corporate Work Focus**
```typescript
// Show only corporate/business projects
hidePortfolioItems(['1', '2', '3', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35'])
// Only shows: Indeed, HCA Healthcare, Capital One App
```

## 🔧 **Technical Details**

### **Aspect Ratio System**
- **Portrait**: Ratio < 0.8 (tall images) - Standard height
- **Square**: Ratio 0.95-1.1 (square-ish images) - Standard height  
- **Landscape**: Ratio 1.1-1.4 (standard landscape images) - Standard height
- **Wide**: Ratio 1.4-2.0 (wide images like 1080x760 - ratio ~1.42) - Increased height
- **Ultra-wide**: Ratio > 2.0 (extremely wide images) - Maximum height

### **Dynamic Sizing System**
- **Width**: Automatically calculated based on aspect ratio to prevent horizontal cropping
- **Height**: Dynamically adjusted based on aspect ratio to prevent vertical cropping
- **No Cropping**: Uses `object-contain` instead of `object-cover` to show full images
- **Centered Display**: Images are centered within their containers with subtle backgrounds
- **Responsive Design**: Optimized sizing for both mobile and desktop viewing

### **Complete Sizing Guide**
| Aspect Ratio | Width | Height | Use Case |
|--------------|-------|---------|----------|
| **Portrait** | `w-28 md:w-56` | `h-56 md:h-80` | Tall images (Jane's Dine Inn, Hammock) |
| **Square** | `w-40 md:w-80` | `h-40 md:h-64` | Square-ish images |
| **Landscape** | `w-56 md:w-[28rem]` | `h-40 md:h-64` | Standard wide images |
| **Wide** | `w-64 md:w-[32rem]` | `h-48 md:h-72` | **1080x760 images (IAI, Monkz, Wire Network)** |
| **Ultra-wide** | `w-72 md:w-[40rem]` | `h-40 md:h-64` | Extremely wide images |

### **Key Improvements**
- ✅ **No Image Cropping**: `object-contain` ensures full images are visible
- ✅ **Better Proportions**: Sizing optimized for each aspect ratio
- ✅ **Visual Consistency**: Subtle backgrounds and rounded corners
- ✅ **Centered Layout**: Images perfectly centered in their containers
- ✅ **Responsive Sizing**: Mobile and desktop optimized dimensions

### **Row Distribution Algorithm**
- **Smart splitting**: Ensures top and bottom rows get completely different images
- **No overlap**: Even when hiding items, rows maintain unique content
- **Fallback handling**: Gracefully handles edge cases with few visible images
- **Dynamic sizing**: Automatically adjusts row content based on available images

### **Randomization Algorithm**
- Uses **Fisher-Yates shuffle** for unbiased randomization
- **Top row**: Gets first portion of shuffled visible images
- **Bottom row**: Gets remaining portion (guaranteed different from top)
- **No overlap**: Ensures completely different content per row
- **Adaptive**: Automatically adjusts when items are hidden/shown

## 🚫 **Remove Controls in Production**

When you're ready to deploy, remove the `PortfolioControls` component:

```typescript
// In app/landing.tsx, remove this line:
import { PortfolioControls } from './components/portfolio-controls'

// And remove this section:
{/* Portfolio Controls - Remove this in production */}
<PortfolioControls />
```

## 🎯 **Best Practices**

1. **Test thoroughly** before hiding items permanently
2. **Keep balance** between rows (don't hide too many items)
3. **Use meaningful IDs** for easy item identification
4. **Backup your changes** before major modifications
5. **Consider user experience** when hiding popular pieces
6. **Group related work** using the category-based hiding patterns

## 🔍 **Troubleshooting**

### **No Images Showing**
- Check if all items are hidden: `showAllPortfolioItems()`
- Verify image paths are correct
- Check browser console for errors

### **Randomization Not Working**
- Ensure you have at least 2 visible items
- Check that `hidden` properties are set correctly
- Try refreshing the page

### **Performance Issues**
- Reduce number of visible items if needed
- Check image file sizes
- Monitor browser memory usage

### **New Items Not Showing**
- Verify new images are in `/public/portfolio/` folder
- Check that new items are added to `portfolioImages` array
- Ensure `hidden: false` is set for new items

---

**Ready to customize your expanded portfolio?** You now have 35 items to work with, including your latest AI/Web3 work! Start by testing the controls on your landing page, then use the helper functions to create your perfect portfolio arrangement! 🎨✨
