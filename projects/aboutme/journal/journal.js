function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  const darkModeToggle = document.getElementById("darkModeToggle");
  darkModeToggle.setAttribute("aria-pressed", isDark);
}

document.addEventListener("DOMContentLoaded", () => {
document.getElementById("darkModeToggle").addEventListener("click", toggleDarkMode);
});

// ==============================
// Journal Rendering + Search + Animations
// ==============================

let journalData = [];

// Create one journal card element
function createJournalCard(entry) {
  const card = document.createElement("article");
  card.className = "entry-card fade-in"; // animation class added
  card.setAttribute("data-tags", entry.tags.join(" ").toLowerCase());

  card.innerHTML = `
    <h3>${entry.title}</h3>
    <p><strong>Tags:</strong> ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join(" ")}</p>
    <p>${entry.summary}</p>
    <details>
      <summary>Details</summary>
      <p>${entry.details}</p>
    </details>
    ${entry.resources && entry.resources.length > 0 ? `
      <div class="resources">
        <strong>Resources:</strong>
        <ul>
          ${entry.resources.map(r => `<li><a href="${r.url}" target="_blank">${r.label}</a></li>`).join("")}
        </ul>
      </div>` : ""
    }
  `;

  return card;
}

// Render filtered entries
function renderFilteredEntries(searchTerm = "") {
  const container = document.getElementById("journal");
  container.innerHTML = ""; // Clear previous

  const filtered = journalData.filter(entry => {
    const searchIn = (entry.title + " " + entry.summary + " " + entry.tags.join(" ")).toLowerCase();
    return searchIn.includes(searchTerm.toLowerCase());
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p>No entries found.</p>`;
    return;
  }

  filtered.forEach((entry, index) => {
    const card = createJournalCard(entry);
    card.style.animationDelay = `${index * 0.5}s`; // stagger animation
    container.appendChild(card);
  });
}

// Load entries from JSON
async function loadJournalEntries() {
  try {
    const res = await fetch("journal.json");
    journalData = await res.json();
    renderFilteredEntries(); // Initial render
  } catch (err) {
    console.error("Failed to load journal data:", err);
    document.getElementById("journal").innerHTML = `<p>Failed to load journal entries.</p>`;
  }
}

// Init after DOM loads
document.addEventListener("DOMContentLoaded", () => {
  // Dark mode toggle (assumes toggleDarkMode exists globally)
  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) darkToggle.addEventListener("click", toggleDarkMode);

  // Search bar live filtering
  const journalSearch = document.getElementById("journalSearch");
  if (journalSearch) {
    journalSearch.addEventListener("input", e => {
      renderFilteredEntries(e.target.value);
    });
  }

  // Load the entries
  loadJournalEntries();
});