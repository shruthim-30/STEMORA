# Hosting Stemora Website on GoDaddy

This guide will help you host your website on GoDaddy and set up the email functionality.

## Option 1: GoDaddy VPS or Dedicated Server (Recommended for Full-Stack)

Since your website has a backend (Node.js) and a database, a simple "Shared Hosting" plan might not be enough unless it supports Node.js. A VPS is recommended.

### 1. Prepare the Project
1. Run `pnpm build` to create the production files.
2. The `dist` folder and `package.json` are the main files needed for production.

### 2. Setup on Server
1. Upload the entire project folder to your server.
2. Install Node.js and pnpm on the server.
3. Run `pnpm install --prod` to install only production dependencies.
4. Set up a PostgreSQL database (GoDaddy offers managed databases or you can install it on your VPS).
5. Create a `.env` file in the root directory with your credentials:
   ```env
   DATABASE_URL=your_postgresql_connection_string
   JWT_SECRET=your_random_secret_string
   RESEND_API_KEY=your_resend_api_key
   NODE_ENV=production
   ```

### 3. Run the Website
1. Use a process manager like `pm2` to keep the website running:
   ```bash
   npm install -g pm2
   pm2 start pnpm --name "stemora" -- start
   ```

---

## Option 2: Setting up Email (Resend.com)

To make the "Book Free Class" button send emails to `stemoraeducation@gmail.com`, we use a service called **Resend**.

1. Go to [Resend.com](https://resend.com) and create a free account.
2. Get your **API Key** from the dashboard.
3. Add this API Key to your `.env` file:
   ```env
   RESEND_API_KEY=re_your_api_key_here
   ```
4. By default, it will send from `onboarding@resend.dev`. To send from your own domain (e.g., `info@stemora.com`), you need to verify your domain in the Resend dashboard.

---

## Local Development Setup

1. **Install Node.js**: Download from [nodejs.org](https://nodejs.org/).
2. **Install pnpm**: Run `npm install -g pnpm` in your terminal.
3. **Extract the Zip**: Unzip the folder I provided.
4. **Install Dependencies**:
   ```bash
   pnpm install
   ```
5. **Run the App**:
   ```bash
   pnpm dev
   ```
6. **Database**: For local running without a database, the app might show errors. You can set up a local PostgreSQL or use a free hosted one like [Supabase](https://supabase.com) or [Neon](https://neon.tech).

---

## Important Note on "GoDaddy Shared Hosting"
If you are using GoDaddy's basic **Shared Web Hosting (cPanel)**, it is primarily for static sites or PHP. To run this Node.js app, you should look for their **"Web Hosting Plus"** or **"VPS Hosting"** which supports Node.js applications.
