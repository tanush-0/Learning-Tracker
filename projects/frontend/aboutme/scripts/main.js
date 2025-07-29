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

const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-tab");

        tabButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        tabContents.forEach(content => {
            content.hidden = content.id !== targetId;
        });
    });
});