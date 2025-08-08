# 📅 Day 18 – 7 August 2025

## ✅ What I Did

- Fixed journal page JavaScript loading by replacing invalid `<style src>` with `<script defer>`
- Implemented renderJournalEntries() to dynamically render journal entries from journal.json
- Parsed structured fields: title, tags, summary, details, and external resources
- Appended each journal entry into the #journal container as styled .entry-card blocks
- Validated data tags for later filtering/search features

## 🧠 Notes

- JavaScript files must be included with `<script src="...">`, not `<style>`
- DOMContentLoaded ensures rendering runs after the document is parsed
- Used fetch() and async/await to load and display local JSON content
- Dynamic rendering allows flexible content management from data files
- Applied progressive enhancement to journal UI with minimal code

## 🚀 To Do Tomorrow (Day 19)

- Add filtering/search capability to journal.html based on tags or content
- Style the .entry-card, .tag, and .resources section more cleanly
- Begin modularizing journal logic for reusability