# ✅ Day 8: Tabbed Interface for Notes Section

**🗓 Date**: 2025-07-29  
**🎯 Goal**: Visually embed the "Notes & Learnings" section into the About Me project using a tabbed interface.

---

## ✅ Tasks Completed

- 🧩 **Designed Tabbed Notes Section**
  - Created a reusable `<section>` in HTML for notes with a tabbed layout.
  - Tabs include:
    - HTML
    - CSS
    - JavaScript
    - Accessibility
    - Git

- 💻 **HTML Structure for Tabs**
  - Used semantic HTML for tabs and content containers:
    ```html
    <div class="tabs">
        <button class="tab-button" data-tab="html">HTML</button>
        <button class="tab-button" data-tab="css">CSS</button>
        ...
    </div>
    <div class="tab-content" id="html">...</div>
    ```

- 🎨 **Styled Tabs Using CSS**
  - Applied active/inactive styles using classes.
  - Made layout responsive and accessible.

- ⚙️ **JavaScript for Tab Switching**
  - Added script to switch content based on which tab is clicked.
  - Highlighted active tab using `aria-selected` and a `.active` class.

- 🛠 **Accessible Tab Interactions**
  - Each tab is keyboard-navigable.
  - Tab panels use `role="tabpanel"` and `aria-labelledby` for screen readers.

---

## 📌 Code Snapshots

### HTML (Tabs & Content)

```html
<div class="tabs">
  <button class="tab-button active" data-tab="html" id="tab-html" aria-selected="true">HTML</button>
  <button class="tab-button" data-tab="css" id="tab-css">CSS</button>
  ...
</div>

<div class="tab-contents">
  <div class="tab-content" id="html" role="tabpanel" aria-labelledby="tab-html">...</div>
  <div class="tab-content hidden" id="css" role="tabpanel" aria-labelledby="tab-css">...</div>
</div>
```

### JavaScript (Tab Behavior)

```js
document.querySelectorAll(".tab-button").forEach(button => {
  button.addEventListener("click", () => {
    const tabId = button.dataset.tab;

    document.querySelectorAll(".tab-button").forEach(btn => {
      btn.classList.remove("active");
      btn.setAttribute("aria-selected", "false");
    });
    button.classList.add("active");
    button.setAttribute("aria-selected", "true");

    document.querySelectorAll(".tab-content").forEach(panel => {
      panel.classList.add("hidden");
    });
    document.getElementById(tabId).classList.remove("hidden");
  });
});
```

### CSS (Simplified)

```css
.tab-button.active {
  background-color: var(--primary);
  color: white;
}

.tab-content.hidden {
  display: none;
}
```

---

## 🧠 What I Learned

- How to structure a tabbed interface using semantic HTML.
- Best practices for accessibility in dynamic UI components:
  - `aria-selected`, `aria-labelledby`, and `role="tabpanel"` are crucial.
- How to cleanly manage interactivity using modular, scalable JavaScript.
- The importance of separating logic (JavaScript), structure (HTML), and style (CSS) in UI components.

---

## 🧾 Git Commit Message Suggestion

```
feat: Add tabbed interface for Notes section with accessibility and responsive design
```

---

## 📈 Coming Up: Day 9

- Practice creating **modal windows** for displaying notes or tutorials.
- Explore how modals differ from tabs in purpose, UX, and technical handling.
- Maintain accessibility with focus traps and keyboard navigation inside modals.
