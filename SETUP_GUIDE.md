# STEMORA Website - Complete Setup Guide (PostgreSQL Version)

## Project Overview

STEMORA is a professional, production-ready full-stack website for a robotics and STEM education company. This version has been updated to use **PostgreSQL** and includes the missing **About Us** and **Contact Us** pages.

## Local Setup Instructions (Windows/Mac/Linux)

### Prerequisites

1. **Node.js** (version 18 or higher)
2. **PostgreSQL Server** (Running locally or on a server)
3. **pnpm** (Recommended) or **npm**

### Step 1: Extract and Install

1. Extract the zip file.
2. Open terminal in the project folder.
3. Run `pnpm install` or `npm install`.

### Step 2: Configure Environment

Create a `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/stemora_db
RESEND_API_KEY=your_resend_api_key_here
```

*Note: Replace `username`, `password`, and `stemora_db` with your actual PostgreSQL credentials.*

### Step 3: Setup Database

Run the following command to sync the schema with your PostgreSQL database:

```bash
pnpm db:push
```

*Note: If you encounter an error saying "relation already exists", it means the tables are already in your database. `drizzle-kit push` is the recommended way to sync your schema during development as it handles existing tables more gracefully than migrations.*

### Step 4: Start Development Server

```bash
pnpm dev
```

Open `http://localhost:5173` in your browser.

---

## New Pages Added

- **About Us**: Accessible at `/about`
- **Contact Us**: Accessible at `/contact`

The navigation in the Header and Footer has been updated to link to these new pages.

---

## Troubleshooting Common Issues

### 1. Database Connection Error
This means the app cannot reach your PostgreSQL server.
- **Check PostgreSQL**: Ensure your PostgreSQL service is running.
- **Check URL**: Ensure the connection string in `.env` is correct.
- **Check Database**: Ensure the database name (e.g., `stemora_db`) actually exists in your PostgreSQL server.

### 2. Port already in use
The server will try to use the next available port. Check the terminal output for the correct URL.

---

## Email Configuration
The form is configured to send emails to `stemoraeducation@gmail.com`. 
- For actual emails to be sent, you must provide a valid `RESEND_API_KEY`.
- If no key is provided, the email content will be printed to your terminal console for verification.
