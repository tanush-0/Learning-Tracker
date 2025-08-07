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

function toggleDetails(button) {
  const details = button.previousElementSibling;
  details.classList.toggle("hidden");
  button.textContent = details.classList.contains("hidden") ? "Read More" : "Show Less";
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
    document.getElementById("infoToggle").addEventListener("click", toggleInfo);
    document.getElementById("projectsToggle").addEventListener("click", toggleProjects);
});

// For live filtering of Projects and Journal
document.addEventListener("DOMContentLoaded", () => {
  const projectSearch = document.getElementById("projectSearch");
  const cyberSearch = document.getElementById("cyberSearch");

  // 🔎 Filter Project Cards
  if (projectSearch) {
    projectSearch.addEventListener("input", () => {
      const value = projectSearch.value.toLowerCase();
      document.querySelectorAll(".project-card").forEach(card => {
        const tags = card.dataset.tags || "";
        const content = card.innerText.toLowerCase();
        const match = tags.includes(value) || content.includes(value);
        card.style.display = match ? "block" : "none";
      });
    });
  }

  // 🔐 Filter Cybersecurity Journal Entries
  if (cyberSearch) {
    cyberSearch.addEventListener("input", () => {
      const value = cyberSearch.value.toLowerCase();
      document.querySelectorAll(".cyber-entry").forEach(entry => {
        const tags = entry.dataset.tags || "";
        const content = entry.innerText.toLowerCase();
        const match = tags.includes(value) || content.includes(value);
        entry.style.display = match ? "block" : "none";
      });
    });
  }
});
