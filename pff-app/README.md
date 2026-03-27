# Pure Football Fun Group - Team Generator

A tactical team management and balancing application built for the PFF football group. This app allows organizers to maintain a player database, select participants for a match, and generate perfectly balanced teams based on skill ratings and positions.

## 🚀 Features

- **AI-Powered Team Balancing**: Advanced algorithm that distributes players between Team Alpha and Team Omega while maintaining parity in aggregate skill ratings and position distribution.
- **Player Database**: Full CRUD management of the group roster, including custom positioning (Striker, Midfielder, Defender) and 1-5 star ratings for Defensive, Midfield, and Scoring skills.
- **Compact "Tactical HUD" UI**: A sleek, dark-themed interface with neon electric accents, optimized for high information density without the need for excessive scrolling.
- **Real-time Selection**: Interactive player selection screen with live selection counters and search functionality.

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (Custom Design Tokens)
- **Database**: Prisma ORM with SQLite
- **Icons**: Material Symbols Outlined

## 📦 Getting Started

### Prerequisites

- Node.js 18+
- npm
- **PostgreSQL** (Optional for local development, required for production)

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Database Setup**:
   - The app is configured for **PostgreSQL** (optimized for Vercel).
   - In your `.env` file, provide your `POSTGRES_PRISMA_URL` and `POSTGRES_URL_NON_POOLING`.
   - Run the migration:
     ```bash
     npx prisma db push
     ```

3. **Seed Initial Players (Optional)**:
   ```bash
   node seed.js
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚀 Deployment (Vercel)

1. **Push to GitHub**: Connect your repository to Vercel.
2. **Add Storage**: In the Vercel dashboard, add a **Vercel Postgres** database to your project.
3. **Environment Variables**: Vercel will automatically inject the necessary Prisma/Postgres env vars.
4. **Deploy**: Vercel will run `prisma generate` during build. After deployment, run `npx prisma db push` once from your local machine (pointing to the production DB) to initialize the schema.

## 📂 Project Structure

- `/app`: Next.js pages and Server Actions.
  - `/database`: Player management dashboard.
  - `/new-game`: Selection flow and team generation.
- `/lib`: Core utilities including the `prisma` client and the `teamGenerator` algorithm.
- `/prisma`: Database schema definition.
- `globals.css`: Custom neon design system variables and Tailwind utilities.

