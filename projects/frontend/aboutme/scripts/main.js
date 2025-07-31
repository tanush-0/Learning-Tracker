//For Switching between DarkMode & For more info 
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

function toggleProjects() {
  const projectsToggle = document.getElementById("projectsToggle");
  const projects = document.getElementById("projectsInfo");
  const expanded = projects.hidden;
  projects.hidden = !expanded;
  projectsToggle.setAttribute("aria-expanded", expanded);
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
    document.getElementById("infoToggle").addEventListener("click", toggleInfo);
    document.getElementById("projectsToggle").addEventListener("click", toggleProjects);
});
