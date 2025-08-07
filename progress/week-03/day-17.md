# 📅 Day 17 – 7 August 2025

## ✅ What I Did
- Implemented live search filtering for:
  - 🔍 Projects section (via `#projectSearch`)
  - 🔐 Cybersecurity journal entries (via `#cyberSearch`)
- Updated JavaScript to:
  - Match user input against both `data-tags` and visible content
  - Hide non-matching entries in real time
  - Use a clean, modular DOMContentLoaded setup

## 🧠 Notes
- Always structure searchable content using `data-*` attributes (e.g., `data-tags`)
- Combined filtering logic is cleaner than splitting functions unnecessarily
- Keeping consistent class names (e.g., `.project-card`, `.cyber-entry`) is crucial for reliable DOM selection
- Searching both tags and text ensures flexible filtering

## 🚀 To Do Tomorrow
- Learn about loading journal entries dynamically from JSON using JavaScript
- Start designing a reusable rendering function for journal/project entries
- Optionally use localStorage to save search input or filters

