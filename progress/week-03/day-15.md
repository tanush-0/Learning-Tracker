# 🗓️ Day 15 — 5 August 2025

## ✅ What I Did

- Started Week 3 of my roadmap focused on Cybersecurity + Web Development crossover
- Explored and understood the difference between SQL Injection and Cross-Site Scripting (XSS)
- Created a detailed markdown resource: sql-vs-xss.md
- Added a collapsible journal entry in HTML linking to this resource
- Practiced writing secure-friendly UI patterns with explanations of real-world attacks

## 🧠 Notes

- SQLi targets backend (databases) and is typically used to bypass auth or extract data.
- XSS targets frontend (browser) to hijack sessions, run scripts, or deface pages.
- Prevent SQLi with:
  - Prepared statements
  - Strict validation/sanitization
- Prevent XSS with:
  - Escaping outputs
  - Avoiding use of innerHTML
  - Using CSP headers and safe DOM APIs like textContent

## 🔗 Reference Links

- (MDN: SQL Injection)
- MDN: Cross-site scripting (XSS): https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting
- OWASP SQL Injection
- OWASP XSS: https://owasp.org/www-community/attacks/xss/

## 🚀 To Do Tomorrow

- Start working on JSON-driven content rendering (dynamic entries)
- Refactor HTML structure for reusable components
- Optionally test basic animation libraries (AOS.js or IntersectionObserver)
- Store and load theme preference via localStorage