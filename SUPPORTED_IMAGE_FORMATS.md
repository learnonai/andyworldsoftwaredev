# Supported Image Formats - Andyworld Software Development

## ✅ All Supported Formats

Your website now supports **multiple image formats** with automatic fallback:

### Supported Extensions:
- ✅ `.jpg` (JPEG)
- ✅ `.jpeg` (JPEG)
- ✅ `.png` (PNG)

---

## 📁 How It Works

The website will automatically try to load images in this order:
1. First tries `.jpg`
2. If not found, tries `.jpeg`
3. If not found, tries `.png`
4. If none found, shows placeholder

---

## 📸 Image Naming Examples

You can use **ANY** of these formats:

### Team Photos:
```
✅ ganesh-navale.jpg
✅ ganesh-navale.jpeg
✅ ganesh-navale.png

✅ somesh-navale.jpg
✅ somesh-navale.jpeg
✅ somesh-navale.png

✅ trupti-dongare.jpg
✅ trupti-dongare.jpeg
✅ trupti-dongare.png
```

### Portfolio Projects:
```
✅ project-1.jpg
✅ project-1.jpeg
✅ project-1.png

✅ project-2.jpg
✅ project-2.jpeg
✅ project-2.png

... and so on for project-3 to project-6
```

### Blog Posts:
```
✅ post-1.jpg
✅ post-1.jpeg
✅ post-1.png

✅ post-2.jpg
✅ post-2.jpeg
✅ post-2.png

... and so on for post-3 to post-6
```

### Logo:
```
✅ logo.png (recommended for transparency)
✅ logo.jpg
✅ logo.jpeg
```

---

## 🎯 Recommendations

### Best Format for Each Type:

**Team Photos:**
- Use: `.jpg` or `.jpeg`
- Why: Smaller file size for photos

**Portfolio Projects:**
- Use: `.jpg` or `.jpeg`
- Why: Screenshots work well as JPEG

**Blog Posts:**
- Use: `.jpg` or `.jpeg`
- Why: Good for illustrations and photos

**Logo:**
- Use: `.png`
- Why: Supports transparency

---

## 🔧 Common Spelling Variations Handled

The system automatically handles:
- `ganesh-navale` ✅
- `somesh-navale` ✅
- `trupti-dongare` ✅

Just make sure the base name matches (before the extension).

---

## 📝 Quick Guide

1. **Download/Create** your image
2. **Name it** correctly (e.g., `ganesh-navale`)
3. **Save as** `.jpg`, `.jpeg`, or `.png`
4. **Place in** correct folder:
   - Team → `public/images/team/`
   - Projects → `public/images/projects/`
   - Blog → `public/images/blog/`
   - Logo → `public/images/logo/`
5. **Refresh** browser - image will appear!

---

## ⚠️ Important Notes

- **File names are case-sensitive** on some systems
- Use **lowercase** for file names
- Use **hyphens** (-) not underscores (_)
- Keep file sizes **under 500KB** for fast loading

---

## 🚀 No Restart Needed!

Just add images to folders and refresh your browser. The website will automatically detect and load them!

---

## ✨ Example

If you have:
```
public/images/team/ganesh-navale.png
```

The website will find it even though it's looking for `.jpg` first!

Same works for:
```
public/images/projects/project-1.jpeg
public/images/blog/post-3.png
```

All formats work automatically! 🎉
