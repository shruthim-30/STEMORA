# STEMORA Website - Quick Start Guide

## 🚀 Get Started in 5 Minutes

### For Local Development

```bash
# 1. Install dependencies
pnpm install

# 2. Setup database
pnpm db:push

# 3. Start development server
pnpm dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### For Production Build

```bash
# Build optimized production bundle
pnpm build

# Start production server
pnpm start
```

---

## 📋 What's Included

✅ **Responsive Website** - Works on desktop, tablet, and mobile  
✅ **Contact Forms** - "Book Free Class" and "Book a Slot" with email notifications  
✅ **Database** - PostgreSQL with contact submission storage  
✅ **Animated Counters** - 30+ Mentors, 25+ Schools, 50+ Internships, 13+ Exhibitions  
✅ **9 Core Offerings** - Circuit Building, Coding, Robotics, IoT, AI, and more  
✅ **Professional Branding** - STEMORA colors (cyan #5CE1E6, yellow #FFDE59)  
✅ **Full Test Suite** - All features tested with Vitest  

---

## 🎨 Brand Colors

- **Primary (Cyan)**: `#5CE1E6`
- **Secondary (Yellow)**: `#FFDE59`
- **Background**: White
- **Text**: Dark gray

---

## 📁 Key Folders

- `client/src/` - React components and pages
- `server/` - Node.js backend and tRPC procedures
- `drizzle/` - Database schema and migrations
- `client/public/` - Static assets (logo, images)

---

## 🔧 Common Tasks

### Change Logo
Replace `client/public/logo.png` with your new logo

### Update Colors
Edit color values in `client/src/index.css`

### Add New Course
Edit `courseSubmenu` in `client/src/components/Header.tsx`

### Modify Contact Info
Update footer in `client/src/components/Footer.tsx`

---

## 📧 Email Notifications

When users submit a form:
1. Data is saved to the database
2. Email notification is sent to the business owner
3. Success message is shown to the user

---

## ✅ Testing

Run all tests:
```bash
pnpm test
```

Tests include form validation, submission, and email notification logic.

---

## 🌐 Deployment

### On Manus Platform
- Click **Publish** in the Management UI
- Website goes live instantly
- Custom domains available in Settings

### On Other Platforms
- Run `pnpm build` to generate production bundle
- Deploy the `dist/` folder to your hosting provider
- Configure environment variables on your platform

---

## 📞 Support

For issues or questions:
1. Check the full `SETUP_GUIDE.md` for detailed instructions
2. Review test files for usage examples
3. Check browser console for error messages

---

**Ready to launch your STEMORA website!** 🎉
