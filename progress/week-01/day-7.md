# ✅ Day 7: JavaScript Structure Improvement & Accessibility

**🗓 Date**: 2025-07-28  
**🎯 Goal**: Modularize JavaScript, improve structure, and enhance accessibility through ARIA attributes.

---

## ✅ Tasks Completed

- 📁 **Created Modular JavaScript File**
  - Created `scripts/main.js` and moved all JS logic into it.
  - Linked `main.js` to HTML using:
    ```html
    <script src="scripts/main.js" defer></script>
    ```

- 🧼 **Removed Inline JS**
  - Removed `onclick` attributes in `index.html`.
  - Used `addEventListener` for event-driven behavior instead.

- ♿ **Implemented ARIA Accessibility**
  - `darkModeToggle` uses `aria-pressed` to indicate toggle state.
  - `infoToggle` uses `aria-expanded` to show expanded/collapsed state of additional info.
  - Replaced style-based display logic with semantic `hidden` attribute for extra info toggle.

- 🔄 **Scoped Functions**
  - Defined two clean, maintainable functions:
    - `toggleDarkMode()`
    - `toggleInfo()`

- ⏳ **Ensured Safe DOM Access**
  - All DOM queries are now wrapped inside `DOMContentLoaded` for reliability.

---

## 📌 `main.js` Final Code Snapshot

```js
function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-mode");
    const darkModeToggle = document.getElementById("darkModeToggle");
    darkModeToggle.setAttribute("aria-pressed", isDark);
}

function toggleInfo() {
    const infoToggle = document.getElementById("infoToggle");
    const info = document.getElementById("extra-info");
    const expanded = info.hidden;
    info.hidden = !expanded;
    infoToggle.setAttribute("aria-expanded", expanded);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
    document.getElementById("infoToggle").addEventListener("click", toggleInfo);
});
```

---

## 🧠 What I Learned

- How to decouple JavaScript from HTML structure using external scripts.
- Importance of semantic HTML: using `hidden` instead of `display: none`.
- How ARIA roles like `aria-pressed` and `aria-expanded` improve accessibility for screen readers and keyboard navigation.
- Use of `defer` to load JS safely without blocking HTML parsing.

---

## 📈 Day 8 (Next)

- Practicing:
  - Tabbed Interface for notes/resources integration (clean UI component)
  - Modal Window to display notes dynamically (useful for overlays and interactivity)
