import {Code2, Globe} from "lucide-react";
import {FaHtml5, FaJava, FaPython, FaRust} from "react-icons/fa";
import {IoLogoCss3, IoLogoJavascript, IoLogoNodejs, IoLogoReact,} from "react-icons/io5";
import {SiMysql, SiSwift, SiTypescript} from "react-icons/si";

interface LanguagesViewProps {
  languages: string[];
  onLanguageSelect: (language: string) => void;
}

export const LanguagesView = ({
  languages,
  onLanguageSelect,
}: LanguagesViewProps) => {
  const getLanguageIcon = (language: string) => {
    const iconMap: { [key: string]: any } = {
      javascript: IoLogoJavascript,
      python: FaPython,
      css: IoLogoCss3,
      react: IoLogoReact,
      typescript: SiTypescript,
      html: FaHtml5,
      sql: SiMysql,
      java: FaJava,
      swift: SiSwift,
      nodejs: IoLogoNodejs,
      rust: FaRust,
      all: Globe,
    };

    const IconComponent = iconMap[language.toLowerCase()] || Code2;
    return <IconComponent className="h-8 w-8" />;
  };

  const getLanguageColor = (language: string) => {
    const colorMap: { [key: string]: string } = {
      javascript: "bg-yellow-500",
      python: "bg-blue-500",
      css: "bg-blue-600",
      react: "bg-cyan-500",
      typescript: "bg-blue-700",
      html: "bg-orange-500",
      sql: "bg-purple-500",
      java: "bg-red-500",
      swift: "bg-orange-600",
      "node.js": "bg-green-600",
      all: "bg-gray-600",
    };

    return colorMap[language.toLowerCase()] || "bg-gray-500";
  };

  return (
    <div
      className="bg-white"
      style={{ backgroundColor: "hsl(var(--background))" }}
    >
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Choose a Language
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Select a programming language to explore code snippets and examples
        </p>
      </div>

      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {languages.map((language) => (
          <button
            key={language}
            onClick={() => onLanguageSelect(language)}
            className="group p-6 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 hover:shadow-lg transform hover:-translate-y-1"
          >
            <div
              className={`w-16 h-16 ${getLanguageColor(language)} rounded-xl mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-200`}
            >
              {getLanguageIcon(language)}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 capitalize">
              {language === "all" ? "All Languages" : language}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {language === "all"
                ? "Browse all available snippets"
                : `${language} code examples`}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
};
