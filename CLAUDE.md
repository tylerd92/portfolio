# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A personal portfolio website for Tyler Deans, built with Create React App (react-scripts), React Router, and Tailwind CSS. Live at https://tylerdeans.dev.

## Commands

- `npm start` — run the dev server (CRA, hot reload)
- `npm run build` — production build to `build/`
- `npm test` — run tests via react-scripts (Jest + React Testing Library, watch mode by default); no test files exist in the repo yet
- `npm run eject` — irreversible CRA eject; do not run without explicit user instruction

There is no lint script configured; CRA's built-in ESLint config runs as part of `npm start`/`npm run build`.

## Architecture

- `src/index.js` — entry point; wraps `App` in `BrowserRouter`
- `src/App.jsx` — defines all routes via `react-router-dom`'s `<Routes>`/`<Route>` (currently `/` → `Home`, `/about` → `About`)
- `src/pages/` — top-level route components (`Home.jsx`, `About.jsx`); each page composes its own `Header` and page-specific sections and renders its own footer inline (no shared `Layout`/`Footer` component yet)
- `src/components/` — reusable pieces used across pages (`Header`, `Projects`, `Contact`)
- Styling is Tailwind utility classes inline in JSX; `tailwind.config.js` scans `src/**/*.{js,jsx,ts,tsx}`; global styles/Tailwind directives live in `src/index.css`
- No state management, no API/data layer, no backend — content (project list, skills, contact links) is hardcoded directly in the components
