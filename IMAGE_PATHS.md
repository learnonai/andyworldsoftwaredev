# Complete Image Paths Guide - Andyworld Software Development

## 📁 All Image Locations

### 1. TEAM MEMBER PHOTOS
**Folder:** `public/images/team/`

```
public/images/team/ganesh-navale.jpg     ← Ganesh Navale (CEO) photo
public/images/team/somesh-navale.jpg     ← Somesh Navale (CTO) photo
public/images/team/trupti-dongare.jpg    ← Trupti Dongare (Lead Engineer) photo
```
**Size:** 400x400px (square)
**Used in:** About Us page

---

### 2. PORTFOLIO PROJECT SCREENSHOTS
**Folder:** `public/images/projects/`

```
public/images/projects/project-1.jpg     ← AI Customer Support Agent
public/images/projects/project-2.jpg     ← Smart Inventory Management
public/images/projects/project-3.jpg     ← Automated HR Recruitment Bot
public/images/projects/project-4.jpg     ← EduLearn Learning Platform
public/images/projects/project-5.jpg     ← RestaurantPro POS System
public/images/projects/project-6.jpg     ← FitTracker Fitness App
```
**Size:** 800x600px (landscape)
**Used in:** Portfolio page

---

### 3. BLOG POST IMAGES
**Folder:** `public/images/blog/`

```
public/images/blog/post-1.jpg           ← AI Agents in Business
public/images/blog/post-2.jpg           ← Next.js Web Apps
public/images/blog/post-3.jpg           ← Mobile App Trends
public/images/blog/post-4.jpg           ← Machine Learning
public/images/blog/post-5.jpg           ← UI/UX Design
public/images/blog/post-6.jpg           ← Cloud Computing
```
**Size:** 800x450px (landscape)
**Used in:** Blog page

---

### 4. COMPANY LOGO
**Folder:** `public/images/logo/`

```
public/images/logo/logo.png             ← Main logo (colored)
public/images/logo/logo-white.png       ← White logo (for dark backgrounds)
public/images/logo/favicon.ico          ← Browser tab icon
```
**Size:** 200x60px (logo), 32x32px (favicon)
**Used in:** Header, Footer, Browser tab

---

### 5. HOMEPAGE IMAGES
**Folder:** `public/images/home/`

```
public/images/home/hero-bg.jpg          ← Hero section background
public/images/home/service-1.jpg        ← AI Agents service image
public/images/home/service-2.jpg        ← Web Development service image
public/images/home/service-3.jpg        ← Mobile Apps service image
```
**Size:** 1920x1080px (hero), 600x400px (services)
**Used in:** Homepage

---

### 6. TESTIMONIAL CLIENT PHOTOS (Optional)
**Folder:** `public/images/testimonials/`

```
public/images/testimonials/client-1.jpg  ← Rajesh Patel photo
public/images/testimonials/client-2.jpg  ← Sneha Kulkarni photo
public/images/testimonials/client-3.jpg  ← Vikram Desai photo
```
**Size:** 100x100px (square)
**Used in:** Homepage testimonials section

---

## 📂 Complete Folder Structure

```
public/
└── images/
    ├── team/
    │   ├── ganesh-navale.jpg
    │   ├── somesh-navale.jpg
    │   └── trupti-dongare.jpg
    │
    ├── projects/
    │   ├── project-1.jpg
    │   ├── project-2.jpg
    │   ├── project-3.jpg
    │   ├── project-4.jpg
    │   ├── project-5.jpg
    │   └── project-6.jpg
    │
    ├── blog/
    │   ├── post-1.jpg
    │   ├── post-2.jpg
    │   ├── post-3.jpg
    │   ├── post-4.jpg
    │   ├── post-5.jpg
    │   └── post-6.jpg
    │
    ├── logo/
    │   ├── logo.png
    │   ├── logo-white.png
    │   └── favicon.ico
    │
    ├── home/
    │   ├── hero-bg.jpg
    │   ├── service-1.jpg
    │   ├── service-2.jpg
    │   └── service-3.jpg
    │
    └── testimonials/
        ├── client-1.jpg
        ├── client-2.jpg
        └── client-3.jpg
```

---

## 🎯 Priority Images (Add These First)

1. **Logo** - `public/images/logo/logo.png`
2. **Team Photos** - All 3 team member photos
3. **Portfolio Projects** - All 6 project screenshots

---

## ⚠️ Important Notes

- **Exact Names:** Image names must match exactly (case-sensitive)
- **Format:** Use JPG for photos, PNG for logos
- **Size:** Keep images under 500KB each
- **Backup:** Website works without images (shows placeholders)

---

## 🔧 How to Add Images

1. Navigate to project folder:
   ```
   /Users/somesh.nawale/Desktop/System-pipeline/AndyworldSoftwareDev/public/images/
   ```

2. Create folders if needed:
   ```bash
   mkdir -p public/images/team
   mkdir -p public/images/projects
   mkdir -p public/images/blog
   mkdir -p public/images/logo
   mkdir -p public/images/home
   mkdir -p public/images/testimonials
   ```

3. Copy your images to the correct folder

4. Restart server:
   ```bash
   npm run dev
   ```

---

## ✅ Current Status

Folders already created:
- ✅ `public/images/team/`
- ✅ `public/images/projects/`
- ✅ `public/images/logo/`

Need to create:
- ❌ `public/images/blog/`
- ❌ `public/images/home/`
- ❌ `public/images/testimonials/`
