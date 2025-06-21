import {SnippetList} from "./SnippetList";
import {Snippet} from "../data/snippets";

interface SnippetsViewProps {
  snippets: Snippet[];
  selectedLanguage: string;
  selectedCategory: string;
  searchQuery: string;
  favorites: string[];
  onSnippetClick: (snippet: Snippet) => void;
  onToggleFavorite: (id: string) => void;
}

export const SnippetsView = ({
  snippets,
  selectedLanguage,
  selectedCategory,
  searchQuery,
  favorites,
  onSnippetClick,
  onToggleFavorite,
}: SnippetsViewProps) => {
  return (
    <div>
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 mb-3 sm:mb-4 md:mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white capitalize mb-1 sm:mb-2">
              {selectedCategory
                ? `${selectedCategory} Snippets`
                : searchQuery
                  ? "Search Results"
                  : "All Snippets"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              {selectedLanguage === "all"
                ? "All Languages"
                : selectedLanguage.charAt(0).toUpperCase() +
                  selectedLanguage.slice(1)}
              {searchQuery &&
                !selectedCategory &&
                " • Searching across all categories"}
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {snippets.length !== 0 &&
            `Showing ${snippets.length} ${snippets.length === 1 ? "snippet" : "snippets"}`}
        </p>
      </div>

      {snippets.length > 0 ? (
        <SnippetList
          snippets={snippets}
          onSnippetClick={onSnippetClick}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <div className="text-center py-8 sm:py-10 md:py-12">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">
            🔍
          </div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1 sm:mb-2">
            No snippets found
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            {searchQuery ? "Try adjusting your search terms" : ""}
          </p>
        </div>
      )}
    </div>
  );
};
