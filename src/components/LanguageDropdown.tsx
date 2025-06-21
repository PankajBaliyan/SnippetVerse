import {useState} from "react";
import {ChevronDown} from "lucide-react";

interface LanguageDropdownProps {
  languages: string[];
  selectedLanguage: string;
  onLanguageChange: (language: string) => void;
}

export const LanguageDropdown = ({
  languages,
  selectedLanguage,
  onLanguageChange,
}: LanguageDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageSelect = (language: string) => {
    onLanguageChange(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full md:w-64 px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-white"
      >
        <span className="capitalize">
          {selectedLanguage === "all" ? "All Languages" : selectedLanguage}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          <button
            onClick={() => handleLanguageSelect("all")}
            className={`w-full px-4 py-2 text-left hover:bg-gray-50 dark:hover:bg-gray-700 ${
              selectedLanguage === "all"
                ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                : "text-gray-900 dark:text-white"
            }`}
          >
            All Languages
          </button>
          {languages.map((language) => (
            <button
              key={language}
              onClick={() => handleLanguageSelect(language)}
              className={`w-full px-4 py-2 text-left capitalize hover:bg-gray-50 dark:hover:bg-gray-700 ${
                selectedLanguage === language
                  ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                  : "text-gray-900 dark:text-white"
              }`}
            >
              {language}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
