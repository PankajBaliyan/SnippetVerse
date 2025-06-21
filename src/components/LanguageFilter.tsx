interface LanguageFilterProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageFilter = ({
  languages,
  selectedLanguage,
  onLanguageChange,
}: LanguageFilterProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onLanguageChange("all")}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
          selectedLanguage === "all"
            ? "bg-blue-600 text-white"
            : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
        }`}
      >
        All
      </button>
      {languages.map((language) => (
        <button
          key={language}
          onClick={() => onLanguageChange(language)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
            selectedLanguage === language
              ? "bg-blue-600 text-white"
              : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
};
