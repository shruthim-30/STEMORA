# STEMORA - Robotics & STEM Education Platform

A professional, production-ready full-stack website for STEMORA, showcasing robotics and STEM education programs with integrated contact management and email notifications.

## 🎯 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Interactive Hero Section** - Animated counters showing key metrics
- **Course Showcase** - Detailed descriptions of robotics and STEM programs
- **Contact Forms** - "Book Free Class" and "Book a Slot" with backend integration
- **Email Notifications** - Automatic notifications to business owner on submissions
- **Database Integration** - PostgreSQL for persistent data storage
- **Professional Branding** - Custom color scheme (cyan #5CE1E6, yellow #FFDE59)
- **Fully Tested** - Comprehensive unit tests with Vitest

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 19 + Tailwind CSS 4 + TypeScript |
| Backend | Node.js + Express 4 + tRPC 11 |
| Database | PostgreSQL (MySQL compatible) |
| Testing | Vitest |
| Build | Vite |

## 📦 Quick Start

### Prerequisites
- Node.js 18+
- pnpm (or npm/yarn)
- VSCode (recommended)

### Installation

```bash
# Install dependencies
pnpm install

# Setup database
pnpm db:push

# Start development server
pnpm dev
```

Visit `http://localhost:3000` in your browser.

## 📚 Documentation

- **[SETUP_GUIDE.md](./SETUP_GUIDE.md)** - Comprehensive setup and configuration guide
- **[QUICK_START.md](./QUICK_START.md)** - Quick reference for common tasks
- **[todo.md](./todo.md)** - Project feature tracking

## 🧪 Testing

```bash
# Run all tests
pnpm test

# Run specific test file
pnpm test server/contact.submit.test.ts
```

## 🏗️ Project Structure

```
stemora-website/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   └── lib/         # Utilities and configs
│   └── public/          # Static assets
├── server/              # Node.js backend
│   ├── routers.ts       # tRPC procedures
│   ├── db.ts            # Database queries
│   └── _core/           # Framework internals
├── drizzle/             # Database schema
└── shared/              # Shared types
```

## 🚀 Deployment

### Manus Platform
```bash
# Create checkpoint (required before publishing)
pnpm build

# Click Publish in Management UI
```

### Other Platforms
```bash
# Build production bundle
pnpm build

# Deploy dist/ folder to your hosting provider
pnpm start
```

## 🎨 Customization

### Update Colors
Edit `client/src/index.css` to change the primary and secondary colors.

### Change Logo
Replace `client/public/logo.png` with your logo.

### Modify Content
- Header: `client/src/components/Header.tsx`
- Footer: `client/src/components/Footer.tsx`
- Home Page: `client/src/pages/Home.tsx`

## 📧 Email Notifications

The website automatically sends email notifications to the business owner when:
- A user submits the "Book Free Class" form
- A user submits the "Book a Slot" form

Notifications include user details and message content.

## 🔐 Environment Variables

Required environment variables (automatically provided by Manus):
- `DATABASE_URL` - Database connection string
- `JWT_SECRET` - Session signing secret
- `VITE_APP_ID` - OAuth application ID
- `OAUTH_SERVER_URL` - OAuth server URL
- `BUILT_IN_FORGE_API_URL` - Manus API URL
- `BUILT_IN_FORGE_API_KEY` - Manus API key

## 🐛 Troubleshooting

### Port Already in Use
The dev server will automatically use the next available port. Check terminal output for the actual URL.

### Database Connection Error
Verify `DATABASE_URL` is set correctly and the database is running.

### Form Submissions Not Working
1. Check backend is running (`pnpm dev`)
2. Check browser console for errors
3. Verify database connection
4. Check email notification settings

## 📞 Support

For detailed setup instructions, see [SETUP_GUIDE.md](./SETUP_GUIDE.md)

For quick reference, see [QUICK_START.md](./QUICK_START.md)

## 📄 License

Proprietary - All rights reserved to STEMORA

## 👨‍💻 Development

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build production bundle
pnpm start        # Start production server
pnpm test         # Run tests
pnpm check        # TypeScript type check
pnpm format       # Format code with Prettier
pnpm db:push      # Push database schema changes
```

---

**STEMORA** - Lighting Young Minds through STEM Education

Built with ❤️ using React, Node.js, and modern web technologies.
