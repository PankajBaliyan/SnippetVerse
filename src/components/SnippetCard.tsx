import { useState } from "react";
import { CopyButton } from "./CopyButton";
import { Heart } from "lucide-react";

interface SnippetCardProps {
  id: string;
  title: string;
  language: string;
  code: string;
  tags: string[];
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const SnippetCard = ({
  id,
  title,
  language,
  code,
  tags,
  isFavorite,
  onToggleFavorite,
}: SnippetCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayCode = isExpanded ? code : code.slice(0, 200);
  const shouldShowExpand = code.length > 200;

  const getLanguageColor = (lang: string) => {
    const colors: { [key: string]: string } = {
      javascript: "bg-yellow-500",
      python: "bg-blue-500",
      css: "bg-purple-500",
      html: "bg-orange-500",
      react: "bg-cyan-500",
      typescript: "bg-blue-600",
    };
    return colors[lang.toLowerCase()] || "bg-gray-500";
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600">
      <div className="flex items-start justify-between mb-3 sm:mb-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
            <span
              className={`inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${getLanguageColor(language)}`}
            ></span>
            <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 capitalize">
              {language}
            </span>
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(id)}
          className={`p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0 ${
            isFavorite
              ? "text-red-500 bg-red-50 dark:bg-red-900/20"
              : "text-gray-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          <Heart size={14} className="sm:w-4 sm:h-4" fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="relative">
        <pre className="bg-gray-50 dark:bg-gray-900 rounded-lg p-2 sm:p-3 md:p-4 text-xs sm:text-sm overflow-x-auto border">
          <code className="text-gray-800 dark:text-gray-200">
            {displayCode}
            {!isExpanded && shouldShowExpand && "..."}
          </code>
        </pre>
        <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
          <CopyButton text={code} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-3 sm:mt-4">
        <div className="flex flex-wrap gap-1 sm:gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
        {shouldShowExpand && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs sm:text-sm text-blue-600 dark:text-blue-400 hover:underline flex-shrink-0 ml-2"
          >
            {isExpanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
};
