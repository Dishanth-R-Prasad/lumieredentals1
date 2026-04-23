# Lumière Dentals

A modern dental clinic website built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (styling)
- **shadcn/ui** (UI components)
- **React Router** (routing)
- **React Query** (data fetching)

## Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Install & Run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deploying to Vercel

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and import the repo
3. Vercel will auto-detect Vite — no extra configuration needed
4. Click **Deploy**

## Project Structure

```
src/
├── assets/          # Images and static files
├── components/
│   ├── site/        # Page sections (Hero, Navbar, Footer, etc.)
│   └── ui/          # shadcn/ui base components
├── pages/           # Route-level pages
├── App.tsx
└── main.tsx
public/
└── favicon.ico
```
