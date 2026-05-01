const APP_STORE_URL = "https://apps.apple.com/app/id0000000000";

const galleryItems = {
  plain: {
    title: "Plain text search for direct lookups.",
    text: "Type a word, phrase, identifier, or error message, then review grouped matching lines with highlights and file context.",
    image: "assets/screenshots/plain-search.png",
    alt: "FindText plain text search results with highlighted matches",
    width: 2400,
    height: 1484
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

const guidedItems = {
  goal: {
    step: "Step 1 of 6",
    title: "Choose whether the search should include or exclude matching lines.",
    text: "The first decision maps to positive or inverse search. Users can ask for lines matching described traits, or lines that do not match those traits, without needing grep flags or regex syntax.",
    image: "assets/screenshots/search_goal.png",
    alt: "FindText Question Mode search goal step"
  },
  traits: {
    step: "Step 2 of 6",
    title: "Describe what each matching line must contain.",
    text: "Add one or more words, phrases, identifiers, or remembered fragments. Then decide whether all traits are required, any one trait is enough, or the traits must appear in order.",
    image: "assets/screenshots/text_traits.png",
    alt: "FindText Question Mode text traits step"
  },
  boundaries: {
    step: "Step 3 of 6",
    title: "Limit where text appears inside a line.",
    text: "Optional starts-with and ends-with questions help turn a vague text clue into a tighter line-level search. Leading indentation can stay allowed for code, logs, and Markdown lists.",
    image: "assets/screenshots/line_starts_and_ends.png",
    alt: "FindText Question Mode line starts and ends step"
  },
  structures: {
    step: "Step 4 of 6",
    title: "Add common structures without writing patterns by hand.",
    text: "Checkboxes cover reusable text shapes such as IP addresses, emails, dates, times, hex numbers, TODO markers, error terms, English letters, Chinese text, ports, and device nodes.",
    image: "assets/screenshots/common_structs.png",
    alt: "FindText Question Mode common structures step"
  },
  options: {
    step: "Step 5 of 6",
    title: "Set scope, case behavior, file types, and output format.",
    text: "The final options connect the generated rule to the practical search job: exact case, skipped folders, included extensions, and whether results show matching lines, matches only, or file paths.",
    image: "assets/screenshots/search_options.png",
    alt: "FindText Question Mode search options step"
  },
  report: {
    step: "Step 6 of 6",
    title: "Review the assembled rule before running the search.",
    text: "The report makes the generated criteria auditable. Users can check the goal, required traits, case mode, skipped folders, file types, and result format before starting the local scan.",
    image: "assets/screenshots/text_trait_report.png",
    alt: "FindText Question Mode text trait report step"
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

function updateGuidedGallery(shot) {
  const item = guidedItems[shot] || guidedItems.goal;
  const gallery = document.querySelector("[data-guided-gallery]");
  if (!gallery) return;

  const step = gallery.querySelector("[data-guided-step]");
  const title = gallery.querySelector("[data-guided-title]");
  const text = gallery.querySelector("[data-guided-text]");
  const image = gallery.querySelector("[data-guided-image]");

  if (step) step.textContent = item.step;
  if (title) title.textContent = item.title;
  if (text) text.textContent = item.text;
  if (image) {
    image.src = item.image;
    image.alt = item.alt;
    image.width = 2800;
    image.height = 1802;
  }

  gallery.querySelectorAll(".guided-tab").forEach((tab) => {
    const isActive = tab.dataset.guidedShot === shot;
    tab.classList.toggle("is-active", isActive);
    tab.setAttribute("aria-selected", String(isActive));
  });
}

document.querySelectorAll(".gallery-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateGallery(tab.dataset.shot));
});

document.querySelectorAll(".guided-tab").forEach((tab) => {
  tab.addEventListener("click", () => updateGuidedGallery(tab.dataset.guidedShot));
});

wireStoreLinks();
