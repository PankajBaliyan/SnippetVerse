import {Heart} from "lucide-react";
import {Snippet} from "../data/snippets";

interface SnippetListProps {
  snippets: Snippet[];
  onSnippetClick: (snippet: Snippet) => void;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
}

export const SnippetList = ({
  snippets,
  onSnippetClick,
  favorites,
  onToggleFavorite,
}: SnippetListProps) => {
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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
      {snippets.map((snippet) => (
        <div
          key={snippet?.id}
          className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-3 sm:p-4 md:p-5 lg:p-6 hover:shadow-lg transition-all duration-200 hover:border-gray-300 dark:hover:border-gray-600 cursor-pointer"
          onClick={() => onSnippetClick(snippet)}
        >
          <div className="flex items-start justify-between mb-3 sm:mb-4">
            <div className="flex-1 min-w-0">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-900 dark:text-white mb-2 truncate">
                {snippet?.title}
              </h3>
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3">
                <span
                  className={`inline-block w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${getLanguageColor(snippet?.language)}`}
                ></span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 capitalize truncate">
                  {snippet?.language}
                </span>
                <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-500">
                  •
                </span>
                <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 capitalize truncate">
                  {snippet?.category}
                </span>
              </div>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleFavorite(snippet?.id);
              }}
              className={`p-1.5 sm:p-2 rounded-lg transition-colors flex-shrink-0 ${
                favorites?.includes(snippet?.id)
                  ? "text-red-500 bg-red-50 dark:bg-red-900/20"
                  : "text-gray-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <Heart
                size={14}
                className="sm:w-4 sm:h-4"
                fill={
                  favorites?.includes(snippet?.id) ? "currentColor" : "none"
                }
              />
            </button>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 line-clamp-2">
            {snippet?.shortDescription}
          </p>

          <div className="flex flex-wrap gap-1 sm:gap-1.5">
            {snippet?.tags?.slice(0, 3)?.map((tag) => (
              <span
                key={tag}
                className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md truncate"
              >
                #{tag}
              </span>
            ))}
            {snippet?.tags?.length > 3 && (
              <span className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-xs text-gray-500 dark:text-gray-400">
                +{snippet?.tags?.length - 3} more
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
