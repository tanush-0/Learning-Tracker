function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.setAttribute("aria-pressed", isDark);
}

document.addEventListener("DOMContentLoaded", () => {
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
});

// For insert journal cards dynamically
function createJournalCard(entry) {
    const card = document.createElement("article");
    card.className = "entry-card";
    card.innerHTML = `
        <h3>${entry.title}</h3>
        <p><strong>Tags:</strong> ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}</p>
        <p>${entry.summary}</p>
        <details><summary>Details</summary><p>${entry.details}</p></details>
        <div class="resources">
            <strong>Resources:</strong>
            <ul>
                ${entry.resources.map(r => `<li><a href="${r.url}" target="_blank">${r.label}</a></li>`).join("")}
            </ul>
        </div>
    `;
    return card;
}

function loadJournalEntries(data) {
    const container = document.getElementById("journal");
    container.innerHTML = "";  // clear existing
    data.forEach(entry => {
        const card = createJournalCard(entry);
        container.appendChild(card);
    });
}
// Load from JSON file
fetch('journal.json')
  .then(res => res.json())
  .then(data => loadJournalEntries(data))
  .catch(err => console.error("Failed to load journal data:", err));

let journalData = [];

function createJournalCard(entry) {
  const card = document.createElement("article");
  card.className = "entry-card";
  card.setAttribute("data-title", entry.title.toLowerCase());
  card.setAttribute("data-tags", entry.tags.join(" ").toLowerCase());
  card.setAttribute("data-summary", entry.summary.toLowerCase());
  card.innerHTML = `
      <h3>${entry.title}</h3>
      <p><strong>Tags:</strong> ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}</p>
      <p>${entry.summary}</p>
      <details><summary>Details</summary><p>${entry.details}</p></details>
      <div class="resources">
          <strong>Resources:</strong>
          <ul>
              ${entry.resources.map(r => `<li><a href="${r.url}" target="_blank">${r.label}</a></li>`).join("")}
          </ul>
      </div>
  `;
  return card;
}

function loadJournalEntries(data) {
  journalData = data;
  renderFilteredEntries(""); // Initially show all
}

function renderFilteredEntries(searchTerm) {
  const container = document.getElementById("journal");
  container.innerHTML = ""; // Clear previous
  const filtered = journalData.filter(entry => {
    const matchText = (entry.title + " " + entry.summary + " " + entry.tags.join(" ")).toLowerCase();
    return matchText.includes(searchTerm.toLowerCase());
  });
  filtered.forEach(entry => {
    const card = createJournalCard(entry);
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
  // Hook into search input
  document.getElementById("journalSearch").addEventListener("input", e => {
    renderFilteredEntries(e.target.value);
  });
});

fetch('journal.json')
  .then(res => res.json())
  .then(data => loadJournalEntries(data))
  .catch(err => console.error("Failed to load journal data:", err));

// 🔃 Render Journal Entries Dynamically
async function renderJournalEntries() {
  const container = document.getElementById("journal");
  if (!container) return;

  try {
    const res = await fetch("data/journal.json");
    const entries = await res.json();

    entries.forEach(entry => {
      const card = document.createElement("div");
      card.className = "entry-card cyber-entry";
      card.setAttribute("data-tags", entry.tags.join(" "));

      card.innerHTML = `
        <h2>${entry.title}</h2>
        <p class="entry-date">📅 ${entry.date}</p>
        <p>${entry.description}</p>

        ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}

        ${entry.resources && entry.resources.length > 0
          ? `<div class="resources">
              <h4>Resources:</h4>
              <ul>
                ${entry.resources.map(link => `<li><a href="${link.url}" target="_blank">${link.label}</a></li>`).join("")}
              </ul>
            </div>`
          : ""
        }
      `;

      container.appendChild(card);
    });

  } catch (err) {
    console.error("Failed to render journal entries:", err);
    container.innerHTML = "<p>Failed to load journal entries.</p>";
  }
}

// Call it on page load
document.addEventListener("DOMContentLoaded", () => {
  renderJournalEntries();
});
