# Website Editing Guide - Andyworld Software Development

## How to Edit Your Website Content

### Quick Start
1. Open the project folder in any code editor (VS Code recommended)
2. Find the file you want to edit (see sections below)
3. Make your changes
4. Save the file
5. Refresh your browser to see changes

---

## Main Files to Edit

### 1. Homepage Content
**File:** `app/page.tsx`

**What you can edit:**
- Hero section headline and description
- Services descriptions
- Testimonials (client names, quotes, companies)
- Call-to-action buttons text

**Example - Change hero text:**
```typescript
<h1>Your New Headline Here</h1>
<p>Your new description here</p>
```

---

### 2. About Us Page
**File:** `app/about/page.tsx`

**What you can edit:**
- Company mission and vision statements
- Team member names and descriptions
- Company values
- Why choose us section

**Example - Update mission:**
```typescript
<p>Your new mission statement here</p>
```

---

### 3. Services Page
**File:** `app/services/page.tsx`

**What you can edit:**
- Service names and descriptions
- Pricing information
- Service features list
- Development process steps

**Example - Add new service:**
```typescript
<div className="bg-gray-50 p-8 rounded-lg">
  <h2>Your New Service</h2>
  <p>Service description</p>
</div>
```

---

### 4. Portfolio Page
**File:** `app/portfolio/page.tsx`

**What you can edit:**
- Project titles and descriptions
- Technologies used
- Case studies
- Success metrics

**Example - Add new project:**
```typescript
{
  id: 7,
  title: "Your Project Name",
  category: "Category",
  description: "Project description",
  technologies: ["Tech1", "Tech2"]
}
```

---

### 5. Contact Page
**File:** `app/contact/page.tsx`

**What you can edit:**
- Office address
- Phone numbers
- Email addresses
- Business hours
- Google Maps location

**Example - Update phone:**
```typescript
<p>Primary: +91 YOUR_NUMBER</p>
```

---

### 6. Header Navigation
**File:** `components/Header.tsx`

**What you can edit:**
- Navigation menu items
- Company name in header
- "Get Quote" button text

---

### 7. Footer
**File:** `components/Footer.tsx`

**What you can edit:**
- Footer description
- Contact information
- Social media links
- Footer menu items

---

## Changing Colors

**File:** `tailwind.config.js`

```javascript
colors: {
  primary: '#2563eb',    // Main blue color
  secondary: '#1e40af',  // Darker blue
}
```

Change the hex codes to your preferred colors.

---

## Adding Your Logo

1. Add logo image to: `public/images/logo/logo.png`
2. Edit `components/Header.tsx`:

```typescript
<Link href="/">
  <img src="/images/logo/logo.png" alt="Andyworld" className="h-10" />
</Link>
```

---

## Common Edits

### Change Phone Number Everywhere
Search for: `+91 91466 39224`
Replace with: Your new number

### Change Email Everywhere
Search for: `andyworldsoftwaredev@gmail.com`
Replace with: Your new email

### Update Company Name
Search for: `Andyworld Software Development`
Replace with: Your preferred name

---

## Testing Your Changes

1. Save all files
2. Run: `npm run dev`
3. Open: http://localhost:3000
4. Check your changes
5. If something breaks, undo your last change

---

## Need Help?

- **Syntax Error:** Check for missing brackets `{}` or quotes `""`
- **Page Not Loading:** Check browser console (F12) for errors
- **Styling Issues:** Check className spellings
- **Can't Find File:** Use search (Ctrl+Shift+F in VS Code)

---

## Backup Before Editing

Always make a copy of the file before editing:
```bash
cp app/page.tsx app/page.tsx.backup
```

This way you can restore if something goes wrong!
