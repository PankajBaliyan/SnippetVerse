# SnippetVerse

**SnippetVerse** is an open-source web application for developers to browse, search, and save their favorite code snippets across multiple programming languages and frameworks. Built with React, Vite, and Tailwind CSS, it provides a beautiful, fast, and modern experience—no backend required!

![SnippetVerse Banner](/public/images/SnippetVerse_landing.webp)

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

Open [http://localhost:5173](http://localhost:5173) in your browser.

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
src/
  components/      # UI components (Header, SnippetCard, etc.)
  data/            # Static snippet data
  hooks/           # Custom React hooks
  pages/           # Page-level components
  snippets/        # (Optional) Dynamic snippet loading
  utils/           # Utility functions
  App.tsx          # Main app component
  main.tsx         # Entry point
public/
  index.html       # HTML template
  ...
```

## 📝 Contributing

Contributions are welcome! To add a new snippet, submit a PR or use the "Submit Snippet" button in the app. See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

This project is [MIT licensed](LICENSE).

## 🙏 Credits

Built by [pankajkumar](https://github.com/pankajkumar) and [the contributors](https://github.com/pankajkumar/snippetverse/contributors).

---

> © 2024 SnippetVerse. Made with ❤️ for developers
