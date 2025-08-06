# Staging Environment

This document outlines the staging environment setup for phased release testing.

## 🚧 Current Staging Version

**Branch:** `staging`  
**Purpose:** Minimal landing page for testing core functionality  
**Status:** Active development

## 📋 What's Included in Staging

### ✅ Current Features
- Minimal hero section with name and title
- Staging environment notice
- Basic contact information (email, LinkedIn)
- Logo and navigation
- Dark/light mode support
- Responsive design

### 🚫 Removed for Staging
- Portfolio carousel
- About section
- Expertise section
- Experience section
- Volunteering section
- Personal projects section
- References section
- Social media links (Instagram, Twitter)
- Last.fm integration

## 🔄 Workflow

### Development Process
1. **Create feature branch** from `staging`
   ```bash
   git checkout staging
   git checkout -b feature/new-feature
   ```

2. **Make changes** and test locally
   ```bash
   npm run dev
   ```

3. **Commit and push** feature branch
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-feature
   ```

4. **Create pull request** to merge into `staging`

5. **Test on staging** before merging to `main`

### Phased Release Plan

#### Phase 1: Minimal Landing ✅
- Basic hero section
- Contact information
- Staging notice

#### Phase 2: Core Content (Next)
- About section
- Contact section (full)
- Basic portfolio

#### Phase 3: Enhanced Features
- Portfolio carousel
- Expertise section
- Experience section

#### Phase 4: Full Experience
- All sections restored
- Last.fm integration
- Social media links
- References

## 🎯 Testing Checklist

Before merging to `main`:
- [ ] Responsive design works on all devices
- [ ] Dark/light mode functions correctly
- [ ] All links work properly
- [ ] Performance is acceptable
- [ ] No console errors
- [ ] Accessibility standards met

## 🚀 Deployment

### Staging Deployment
- Branch: `staging`
- URL: [staging.zvpply.com] (when configured)
- Purpose: Testing and review

### Production Deployment
- Branch: `main`
- URL: [zvpply.com]
- Purpose: Live site

## 📝 Notes

- Staging environment allows safe testing of changes
- Minimal version reduces complexity for initial testing
- Features can be gradually added back as needed
- Staging notice clearly indicates this is a test environment 