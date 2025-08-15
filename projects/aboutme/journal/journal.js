// ==============================
// Dark Mode Toggle
// ==============================
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark-mode");
  const darkModeToggle = document.getElementById("darkModeToggle");
  if (darkModeToggle) {
    darkModeToggle.setAttribute("aria-pressed", isDark);
  }
}

// ==============================
// Global Variables
// ==============================
let journalData = [];
let selectedCategory = "all";
let sortDirection = "desc"; // Default: newest first

// ==============================
// Create Journal Card
// ==============================
function createJournalCard(entry) {
  const card = document.createElement("article");
  card.className = "entry-card fade-in";
  card.setAttribute("data-tags", entry.tags.join(" ").toLowerCase());

  card.innerHTML = `
    <h3>${entry.title}</h3>
    <p><strong>Date:</strong> ${entry.date}</p>
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

// ==============================
// Render Filtered + Sorted Entries
// ==============================
function renderFilteredEntries(searchTerm = "") {
  const container = document.getElementById("journal");
  container.innerHTML = "";

  let filtered = journalData.filter(entry => {
    const matchText = (entry.title + " " + entry.summary + " " + entry.tags.join(" ")).toLowerCase();
    const categoryMatch = selectedCategory === "all" || (entry.category && entry.category.toLowerCase() === selectedCategory.toLowerCase());
    return matchText.includes(searchTerm.toLowerCase()) && categoryMatch;
  });

  // Sort by date
  filtered.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortDirection === "asc" ? dateA - dateB : dateB - dateA;
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p>No entries found.</p>`;
    return;
  }

  filtered.forEach((entry, index) => {
    const card = createJournalCard(entry);
    card.style.animationDelay = `${index * 0.1}s`; // stagger animation
    container.appendChild(card);
  });
}

// ==============================
// Load Entries from JSON
// ==============================
async function loadJournalEntries() {
  try {
    const res = await fetch("journal.json");
    journalData = await res.json();
    renderFilteredEntries();
  } catch (err) {
    console.error("Failed to load journal data:", err);
    document.getElementById("journal").innerHTML = `<p>Failed to load journal entries.</p>`;
  }
}

// ==============================
// Event Listeners Setup
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  // Dark mode
  const darkToggle = document.getElementById("darkModeToggle");
  if (darkToggle) darkToggle.addEventListener("click", toggleDarkMode);

  // Search
  const journalSearch = document.getElementById("journalSearch");
  if (journalSearch) {
    journalSearch.addEventListener("input", e => {
      renderFilteredEntries(e.target.value);
    });
  }

  // Category filter
  document.querySelectorAll(".filter-buttons button").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-buttons button").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedCategory = btn.dataset.category;
      renderFilteredEntries(journalSearch ? journalSearch.value : "");
    });
  });

  // Sort toggle
  const sortToggle = document.getElementById("sortToggle");
  if (sortToggle) {
    sortToggle.addEventListener("click", () => {
      sortDirection = sortDirection === "asc" ? "desc" : "asc";
      renderFilteredEntries(journalSearch ? journalSearch.value : "");
      sortToggle.textContent = `Sort: ${sortDirection === "asc" ? "Oldest → Newest" : "Newest → Oldest"}`;
    });
  }

  // Load data
  loadJournalEntries();
});
