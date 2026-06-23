# Cape Town Food Fest — Ticket Landing Page

A Vue 3 single-page landing app for Cape Town Food Fest 2026, built with Vite.
Displays ticket tiers in reusable card components with favourite toggling and featured tier highlighting.

---

## Project Overview

This project was built as Exercise 02 of the Frontend Web Development module. It demonstrates:

- **Vue 3 components** with props and event emission
- **Data-driven rendering** using `v-for` (no duplicate hardcoded HTML)
- **Reactive state** with `data()` and `computed` properties
- **Component communication** — child emits events, parent listens with `@event`
- **Responsive layout** using CSS Grid and media queries

---

## Tech Stack

- Vue 3 (Options API)
- Vite
- Vanilla CSS (CSS variables, scoped styles)

---

## Getting Started

### Prerequisites
- Node.js v18 or higher
- npm

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/totoseahlumile-dot/food-fest-ticket-landing-page.git

# 2. Navigate into the project
cd food-fest-ticket-landing-page

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

---

## Project Structure

```
src/
├── components/
│   ├── AppNav.vue         # Fixed navigation bar
│   ├── HeroSection.vue    # Full-bleed hero with CTAs
│   ├── TicketSection.vue  # Grid of ticket cards + favourite counter
│   └── TicketCard.vue     # Reusable individual ticket card
├── data/
│   └── tickets.js         # All ticket tier data (single source of truth)
├── App.vue                # Root component
├── main.js                # Vue app entry point
└── style.css              # Global CSS variables and reset
```

---

## Features

- 🎟️ Three ticket tiers: Bronze, Silver (featured), Gold
- ❤️ Favourite toggle on each card with live count
- ⭐ Featured tier highlighted with badge and distinct styling
- 🌙 Gold tier dark card treatment
- 📱 Fully responsive — mobile, tablet, desktop
- ✨ Hover animations on cards and buttons

---

## Screenshot

<img width="1896" height="870" alt="image" src="https://github.com/user-attachments/assets/f115b2df-a424-4a9a-ae30-05289d5be629" />

<img width="1900" height="867" alt="image" src="https://github.com/user-attachments/assets/79d82e24-7347-4e96-87dd-5b6db2cbcb2e" />


---

## Author

Ahlumile Totose · LifeChoices Academy · Frontend Web Development Module 1
