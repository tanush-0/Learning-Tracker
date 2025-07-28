---

## 👨‍🏫 Step-by-Step: How to Implement

1. **Create the JS File**
   - Create a new folder named `scripts/` in your project directory.
   - Inside it, create `main.js`.

2. **Move JavaScript to `main.js`**
   - Take the two functions (`toggleDarkMode` and `toggleInfo`) and place them inside `main.js`.
   - Use `document.addEventListener("DOMContentLoaded", ...)` if needed for future safety.

3. **Link JS in HTML**
   - In `index.html`, replace the old `<script>` block with:
     ```html
     <script src="scripts/main.js" defer></script>
     ```

4. **Test Everything**
   - Open your page in the browser and verify both buttons still work.
   - Check for errors in the browser console (F12 → Console tab).

---
