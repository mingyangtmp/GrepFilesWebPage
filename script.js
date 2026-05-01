const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";

const galleryItems = {
  plain: {
    title: "Question Mode for search without regex.",
    text: "Answer simple prompts, choose the folders and file types that matter, and review highlighted results without writing a regular expression.",
    image: "assets/screenshots/question-mode.png",
    alt: "FindText Guided Search question flow with a required text answer",
    width: 2400,
    height: 900
  },
  regex: {
    title: "Regex presets for patterns that repeat.",
    text: "Use regular expressions and built-in presets for diagnostics, email addresses, IPs, dates, TODO markers, and other structured text.",
    image: "assets/screenshots/regex-search.png",
    alt: "FindText regular expression search using a diagnostics preset",
    width: 2400,
    height: 1484
  },
  replace: {
    title: "Replacement previews before any write.",
    text: "Review each candidate by file and occurrence, select only the intended changes, and let FindText verify the source text before applying.",
    image: "assets/screenshots/replace-preview.png",
    alt: "FindText replacement preview with selectable file and occurrence changes",
    width: 2400,
    height: 1484
  },
  history: {
    title: "History snapshots for finished investigations.",
    text: "Return to a previous query with its original options, result counts, file paths, and highlighted matches still intact.",
    image: "assets/screenshots/history.png",
    alt: "FindText search history showing previous local search results",
    width: 2400,
    height: 1484
  }
};

function wireStoreLinks() {
  document.querySelectorAll(".app-store-link").forEach((link) => {
    link.href = APP_STORE_URL;
  });
}

function updateGallery(shot) {
  const item = galleryItems[shot] || galleryItems.plain;
  const gallery = document.querySelector("[data-gallery]");
  if (!gallery) return;

  const title = gallery.querySelector("[data-gallery-title]");
  const text = gallery.querySelector("[data-gallery-text]");
  const image = gallery.querySelector("[data-gallery-image]");

  if (title) title.textContent = item.title;
  if (text) text.textContent = item.text;
  if (image) {
    image.src = item.image;
    image.alt = item.alt;
    image.width = item.width;
    image.height = item.height;
  }

  gallery.querySelectorAll(".gallery-tab").forEach((tab) => {
    const isActive = tab.dataset.shot === shot;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

document.querySelectorAll(".gallery-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateGallery(tab.dataset.shot));
});

wireStoreLinks();
