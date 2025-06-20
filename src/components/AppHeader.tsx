import {Github, Heart} from "lucide-react";
import {ThemeToggle} from "./ThemeToggle";

interface AppHeaderProps {
  onHomeClick: () => void;
  onFavoritesClick?: () => void;
}

export const AppHeader = ({ onHomeClick, onFavoritesClick }: AppHeaderProps) => {
  return (
    <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
        <div className="flex items-center justify-between h-12 sm:h-14 md:h-16">
          <div className="flex items-center">
            <button
              onClick={onHomeClick}
              className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              SnippetVerse
            </button>
            <span className="ml-1 sm:ml-2 px-1 sm:px-2 py-0.5 sm:py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">
              Beta
            </span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
            {onFavoritesClick && (
              <button
                onClick={onFavoritesClick}
                className="p-1.5 sm:p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                title="Favorites"
              >
                <Heart size={16} className="sm:w-5 sm:h-5" />
              </button>
            )}
            <a
              href="https://github.com/PankajBaliyan/SnippetVerse"
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 sm:p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              title="GitHub Repository"
            >
              <Github size={16} className="sm:w-5 sm:h-5" />
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
};
