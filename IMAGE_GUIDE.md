# Image Upload Guide for Andyworld Software Development Website

## Where to Add Images

### 1. Team Member Photos
**Location:** `public/images/team/`

Add these images:
- `ganesh-navale.jpg` - Founder & CEO photo
- `somesh-navale.jpg` - CTO & Co-founder photo
- `trupti-dongare.jpg` - Lead Engineer photo

**Recommended Size:** 400x400 pixels (square), JPG format
**Note:** Images will be displayed in circular frames on the About Us page

---

### 2. Portfolio Project Screenshots
**Location:** `public/images/projects/`

Add these images:
- `project-1.jpg` - AI Customer Support Agent
- `project-2.jpg` - Smart Inventory Management System
- `project-3.jpg` - Automated HR Recruitment Bot
- `project-4.jpg` - EduLearn Learning Platform
- `project-5.jpg` - RestaurantPro POS System
- `project-6.jpg` - FitTracker Fitness App

**Recommended Size:** 800x600 pixels (landscape), JPG format
**Note:** These appear on the Portfolio page

---

### 3. Company Logo
**Location:** `public/images/logo/`

Add these images:
- `logo.png` - Main company logo (transparent background)
- `logo-white.png` - White version for dark backgrounds

**Recommended Size:** 200x60 pixels (landscape), PNG format with transparency
**Note:** Logo will appear in the header navigation

---

## How to Add Images

1. Navigate to the project folder:
   ```
   /Users/somesh.nawale/Desktop/System-pipeline/AndyworldSoftwareDev/public/images/
   ```

2. Place your images in the appropriate subfolder:
   - Team photos → `team/`
   - Project screenshots → `projects/`
   - Company logo → `logo/`

3. Make sure image names match exactly as listed above

4. Restart the development server after adding images:
   ```bash
   npm run dev
   ```

---

## Image Requirements

- **Format:** JPG for photos, PNG for logos
- **Quality:** High resolution but optimized for web (under 500KB per image)
- **Aspect Ratio:** 
  - Team photos: 1:1 (square)
  - Projects: 4:3 (landscape)
  - Logo: 3:1 or 4:1 (wide)

---

## Fallback Behavior

If images are not found, the website will show:
- Gray placeholder circles for team members
- Gray boxes with "Project Screenshot" text for portfolio items
- Text-only logo in the header

This ensures the website works even without images!
