# Alif Marriage Media (Frontend) — Production-grade Skeleton

React + TypeScript + Vite + Tailwind + React Router + TanStack Query + Zustand.

## Features (included)
- Multi-page large-scale structure (Home, Search, Profiles, Profile Details, Packages, FAQ, About, Contact)
- Auth flow (Login, Register, Forgot/Reset password, Email/OTP verify pages) — mocked
- Protected routes (Dashboard)
- Theme system: light/dark + accent color picker (persisted in localStorage)
- Component library-style primitives (Button, Input, Modal, Toast, Skeleton)
- Responsive layout, navbar, mega footer
- Mock API layer + query caching (easy to swap with real backend)
- Basic SEO meta handling per route

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Notes
- Mock auth credentials:
  - Email: `demo@alif.com`
  - Password: `Demo@1234`
- Replace `src/api/http.ts` baseURL and implement real endpoints.
