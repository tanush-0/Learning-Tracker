# 📘 Notes & Learnings — About Me Project (Day 1 to Day 7)

---

## 🔹 HTML Essentials

- Learned to structure a semantic webpage using tags like:
  - `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`
  - Structural elements: `<header>`, `<nav>`, `<main>`, `<footer>`
  - Content elements: `<h1>`–`<h6>`, `<p>`, `<a>`, `<button>`, `<div>`, etc.
- Focused on clean, readable layout using:
  - Proper indentation
  - Section grouping (`main-content`, `card`, `skills`)

---

## 🔹 CSS Fundamentals + Progressive Styling

- Applied reset styles via:
  ```css
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
- Designed consistent themes using:
  - Color schemes, spacing, shadows, border-radius
  - Layout properties: flex, gap, wrap, media queries
- Introduced:
  - Button hover effects
  - Card-based UI
  - Responsive navbar

---

## 🔹 Dark Mode Implementation

- Introduced theme switching using .dark-mode toggle on <body>
- Added full color theming via CSS variables:
  - Defined in :root {} for light mode and overridden in .dark-mode {}
  - Key variables: --bg-color, --text-color, --primary, --button-bg, etc.
- Ensured smooth transitions and consistency using:
  ```css
  transition: all 0.3s ease-in-out;

---

## 🔹 Responsive Design

- Used media queries for mobile optimization:
  ```css
  @media (max-width: 768px) { ... }
- Ensured:
  - Navbar becomes a vertical stack
  - Buttons become full-width and stack properly

---

## 🔹 Accessibility (a11y) Improvements

- Implemented ARIA attributes:
  - aria-pressed for dark mode toggle state
  - aria-expanded and hidden for the "More Info" section
- Added keyboard-friendly focus indicators:
  ```css
  :focus-visible {
   outline: 2px dashed var(--primary);
   outline-offset: 3px;
  }

---

## 🔹 JavaScript Modularization (Day 7)

- Moved all inline JS into an external file: scripts/main.js
- Advantages:
  - Better maintainability
  - Cleaner separation of logic and content
- Ensured safe DOM interaction with:
  ```js
  document.addEventListener("DOMContentLoaded", () => {
  // Safe DOM manipulations
  });
- Attached button listeners:
  ```js
  document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
- Created clean reusable functions:
  - toggleDarkMode()
  - toggleInfo()

---

## 🔹 Git + Commit Practices

- Learned to:
  - Stage and commit changes incrementally (git add ., git commit -m "...")
  - Write clear, descriptive commit messages
  - Keep the project modular and under version control effectively

---