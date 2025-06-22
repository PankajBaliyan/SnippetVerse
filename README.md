# SnippetVerse

**SnippetVerse** is an open-source web application for developers to browse, search, and save their favorite code snippets across multiple programming languages and frameworks. Built with React, Vite, and Tailwind CSS, it provides a beautiful, fast, and modern experience—no backend required!

![SnippetVerse Banner](/public/images/snippetverse_PH_landing.webp)

## ✨ Features

- 🔍 **Smart Search:** Instantly find code snippets by language, category, or tags.
- 🌐 **Multiple Languages:** JavaScript, Python, CSS, React, TypeScript, and more.
- ⭐ **Save Favorites:** Bookmark your favorite snippets for quick access (saved locally).
- 🗂️ **Organized Categories:** Browse by categories like arrays, strings, async, and more.
- 🎨 **Beautiful UI:** Clean, modern interface with dark mode support.
- ⚡ **Fast & Lightweight:** 100% frontend, no backend, privacy-friendly.
- 🆓 **Open Source:** Free to use and contribute.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [bun](https://bun.sh/) (if you want to use bun, otherwise use npm/yarn/pnpm)

### Installation

Clone the repository:

```sh
git https://github.com/PankajBaliyan/SnippetVerse
cd SnippetVerse
```

Install dependencies:

```sh
npm install
# or
bun install
```

### Development

Start the development server:

```sh
npm run dev
# or
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

### Build for Production

```sh
npm run build
# or
bun run build
```

Preview the production build:

```sh
npm run preview
# or
bun run preview
```

## 📁 Project Structure

```
├── public
│   ├── images
│   └── svgs
└── src
├── components # UI components (Header, SnippetCard, etc.)
│   └── ui
├── data        # Static data
├── hooks       # Custom React hooks
├── lib         # Utility functions and libraries
├── pages       # Main application pages
├── snippets    # snippets organized by language and category
│   ├── css     # Language-specific snippets
│   │   ├── animations  # Categorie 1
│   │   └── layouts     # Categorie 2
│   ├── javascript
│   │   ├── array
│   │   ├── dom
│   │   └── functions
│   ├── nodejs
│   │   └── functions
│   ├── python
│   │   └── data-structures
│   ├── react
│   │   ├── components
│   │   └── hooks
│   └── regex
└── utils

32 directories
```

## 📝 Contributing

Contributions are welcome! To add a new snippet, submit a PR or use the "Submit Snippet" button in the app. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is [MIT licensed](LICENSE).

## 🙏 Credits

Built by [pankajkumar](https://github.com/PankajBaliyan) and [the contributors](https://github.com/PankajBaliyan/SnippetVerse/graphs/contributors).

---

> © 2025 SnippetVerse. Made with ❤️ for developers
