interface Snippet {
  id: string;
  title: string;
  tags: string[];
  code: string;
  description: string;
  shortDescription: string;
  usage: string;
  contributedBy: string;
  language: string;
  category: string;
  filePath: string;
}

export async function loadSnippets() {
  // Glob all .ts files in snippets directory
  const snippetModules = import.meta.glob("/src/snippets/**/*/*.ts", {
    eager: false, // Lazy load to optimize performance
  });

  const snippets: Snippet[] = [];
  const languageCategories: Record<string, string[]> = {};
  const languages: string[] = [];
  const allCategories: string[] = [];

  // Process each module
  for (const [filePath, loadModule] of Object.entries(snippetModules)) {
    // Extract language and category from path
    const pathParts = filePath.split("/").slice(-3); // e.g., ['JavaScript', 'dom', 'js-dom-helpers.ts']
    if (pathParts.length < 3) continue; // Skip invalid paths
    const [language, category, fileName] = pathParts;

    // Load the module
    const module = await loadModule();
    const snippetData = module.default as Omit<Snippet, "language" | "category" | "filePath">;

    // Add snippet with additional metadata
    snippets.push({
      ...snippetData,
      language,
      category,
      filePath: `${language}/${category}/${fileName}`,
    });

    // Track languages and categories
    if (!languages.includes(language)) {
      languages.push(language);
    }
    if (!languageCategories[language]) {
      languageCategories[language] = [];
    }
    if (!languageCategories[language].includes(category)) {
      languageCategories[language].push(category);
    }
    if (!allCategories.includes(category)) {
      allCategories.push(category);
    }
  }

  // Sort for consistent UI display
  languages.sort();
  allCategories.sort();
  Object.keys(languageCategories).forEach((lang) => {
    languageCategories[lang].sort();
  });

  return {
    availableLanguages: languages,
    languageCategories,
    allCategories,
    preloadedSnippets: snippets,
  };
}
