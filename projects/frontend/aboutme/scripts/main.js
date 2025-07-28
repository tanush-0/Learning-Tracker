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