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
function filterCards() {
  const query = document.getElementById("searchInput").value.toLowerCase();
  document.querySelectorAll(".entry-card").forEach(card => {
    const tags = card.dataset.tags;
    const content = card.innerText.toLowerCase();
    if (tags.includes(query) || content.includes(query)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("searchInput").addEventListener("input", filterCards);
});
