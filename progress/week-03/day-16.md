# 📅 Day 16 – 6 August 2025

## ✅ What I Did
- Created a new modular journal.html page to host my learning journal
- Linked external journal.json to render entries dynamically via JavaScript
- Designed a reusable card structure with semantic HTML:
  - Used `<article>`, `<details>`, `<summary>` for accessibility and clarity
  - Rendered tags as badge-style pills
  - Embedded helpful resources as links
- Implemented consistent styling using CSS variables and a responsive layout
- Added Dark Mode toggle with ARIA attributes for better a11y
- Validated JSON structure and integrated it with fetch() and DOM rendering logic

## 🧠 Notes
- Dynamically rendering entries helps make the site maintainable and future-proof
- JSON structure (title, tags, summary, details, resources) makes adding new logs super easy
- Learned how to use .map() and template literals to populate HTML with JSON data
- Practiced semantic HTML and a11y best practices with `<section>`, aria-*, and focus-visible

## 🚀 To Do Tomorrow
- Start modularizing Projects section using JSON + JS just like the journal
- Add filtering options for tags or keywords in journal entries
- Consider localStorage for remembering Dark Mode toggle state
