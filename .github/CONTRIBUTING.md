# Contributing to SnippetVerse 🤝

Hey there! Thanks for stopping by and considering contributing to this project. Whether you're fixing bugs, improving the code, or adding cool new snippets, your help means a lot. Before diving in, let's go over a few things to keep everything smooth and consistent.

## 📚 Table of Contents

- [Contributing to SnippetVerse 🤝](#contributing-to-snippetverse-)
  - [📚 Table of Contents](#-table-of-contents)
  - [👀 What We're Looking For](#-what-were-looking-for)
  - [🖋️ Snippet Guidelines](#️-snippet-guidelines)
    - [📂 Folder Structure](#-folder-structure)
    - [🗃️ File Type](#️-file-type)
    - [🔄 What Goes Inside](#-what-goes-inside)
    - [❗ Important Notes](#-important-notes)
  - [🛠️ How to Contribute](#️-how-to-contribute)
    - [✔️ Submitting Snippets](#️-submitting-snippets)
    - [➕ Adding Languages or Categories](#-adding-languages-or-categories)
      - [🌐 New Language](#-new-language)
      - [📂 New Category](#-new-category)
    - [Submitting Your Work](#submitting-your-work)

## 👀 What We're Looking For

- Share a better way to write something.
- Fixing bugs is always appreciated and makes a big difference.
- Submitting useful snippet ideas helps the entire community.

The only thing we ask is that you follow the rules below to keep everything tidy and easy to work with.

## 🖋️ Snippet Guidelines

### 📂 Folder Structure

Snippets live in this structure:

```
snippets/language/category/snippet.tsx
```

Here's how it breaks down:

- **`language`**: Lowercase only. For example:
  - `JavaScript` → `javascript`
  - `c++` → `cpp`
  - `c#` → `cs`
- **`category`**: Lowercase only. For example:
  - `Array` → `array`
  - `DOM` → `dom`
- **`snippet`**: Use [kebab-case](https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case). Example: `lorem-ipsum`.

### 🗃️ File Type

Every snippet must be a `.tsx` file.

### 🔄 What Goes Inside

Each snippet file must export a default object that includes all the necessary metadata and the code itself.

Here’s the required structure:

```tsx
export default {
  id: "unique-id-for-snippet", // kebab-case and language-prefixed (e.g., js-array-filter)
  title: "Name of the snippet",
  tags: ["tag1", "tag2", "tag3"],
  code: `// your snippet code here`,
  description: "Detailed explanation of what the snippet does.",
  shortDescription: "One-liner overview.",
  usage: "Describe how this snippet can be used.",
  contributedBy: "your-github-username", // i.e., PankajBaliyan
};
```

✅ **Keep all fields in the same order and format.**  
✅ Code should be wrapped in a template string inside the `code` field.  
✅ Include only what’s needed for the snippet to be functional and understandable.

### ❗ Important Notes

- **No Duplicates**: Avoid submitting code that replicates native language functionality.
- **Grammar & Naming**: Use clear grammar and relevant variable names.
- **Consistent File Naming**: Match file names to snippet title in kebab-case.
- **Only Metadata + Code**: Don’t include unrelated markdown or content.
- **No Trailing Newlines**: Make sure the file ends without extra blank lines.

If unsure about naming or structure, [open a discussion](https://github.com/PankajBaliyan/SnippetVerse/discussions) or refer to existing snippets.

## 🛠️ How to Contribute

### ✔️ Submitting Snippets

You can submit snippets manually:

#### ✍️ Manually

1. Navigate to the appropriate folder: `snippets/language/category/`
2. Add a `.tsx` file for your snippet.
3. Follow the structure and rules mentioned above.
4. Submit your work via a pull request.

### ➕ Adding Languages or Categories

#### 🌐 New Language

1. Create a folder in `snippets/` using lowercase.
   - Examples: `javascript`, `python`, `rust`
2. Add relevant categories inside.

#### 📂 New Category

1. Inside the language folder, create a category folder using kebab-case.
   - Example: `string-manipulation`, `data-structures`

### Submitting Your Work

1. Fork the repository and create a new branch.
2. Add your snippet following the guidelines.
3. Create a Pull Request with a clear title and description.
4. Be ready to make changes if maintainers leave comments.

> Minor improvements may be made by maintainers directly before merging. Don't worry — we’ll credit your contributions properly!

Thanks again for contributing! 😊
