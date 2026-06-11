# CampusHub

CampusHub is a student-focused marketplace for engineering tools, hostel essentials, project components, and fast campus delivery.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file at the project root with:
   ```env
   DATABASE_URL="file:./dev.db"
   NEXTAUTH_SECRET="your-nextauth-secret"
   GOOGLE_CLIENT_ID="your-google-client-id"
   GOOGLE_CLIENT_SECRET="your-google-client-secret"
   ```
3. Generate Prisma client and migrate database:
   ```bash
   npm run prisma:migrate
   npm run prisma:generate
   npm run seed
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```

## Project Structure

- `app/` - Next.js app routes and pages
- `components/` - shared UI components
- `lib/` - backend utilities and Prisma client
- `prisma/` - database schema and seed data
- `public/` - static assets and brand assets

## Features included

- Mobile-first premium UI
- Authentication scaffold with Google and OTP
- Product categories and starter kits
- Cart and checkout experience
- Order tracking and admin dashboard pages
- Prisma database schema for products, orders, referrals, and discounts
