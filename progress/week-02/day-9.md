# 📅 Day 9 – 30 July 2025

## ✅ What I Did
- Removed all modal and tabbed UI elements from the About Me project
- Reverted back to the clean, functional Day 7 layout
- Retained core features:
  - Responsive flex layout
  - Dark mode toggle with accessibility (`aria-pressed`)
  - "More Info" toggle with `aria-expanded` and hidden attribute
  - Modularized JavaScript in `scripts/main.js`
- Cleaned up `index.html`, `style.css`, and `main.js` for simplicity

## 🧠 What I Learned

### 🔹 Importance of Simplicity
- Adding too many UI elements at once (modal + tabs) made the design feel bloated and confusing
- Keeping the layout minimal helps maintain focus and understandability

### 🔹 Clean Architecture
- HTML: Clear semantic structure with `<nav>`, `<div class="card">`, and button interactions
- CSS: Centralized styling using CSS variables for light/dark themes
- JS: External modular JavaScript file (`main.js`) ensures separation of concerns

### 🔹 Accessibility in Practice
- Used ARIA attributes (`aria-pressed`, `aria-expanded`) for better screen reader and keyboard support
- Hidden attribute + toggle logic ensures visual state matches screen-reader state

## 🚀 To Do Tomorrow (Day 10)
- Reintroduce notes using **just one** clean method: a simple **accessible modal**
- Practice keyboard accessibility:
  - Tab trap inside modal
  - ESC to close modal
- Keep UI minimal and understandable

