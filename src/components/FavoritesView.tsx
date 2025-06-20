
import { useMemo } from "react";
import { SnippetList } from "./SnippetList";
import { Snippet } from "../data/snippets";
import { Heart } from "lucide-react";

interface FavoritesViewProps {
  allSnippets: Snippet[];
  favorites: string[];
  onSnippetClick: (snippet: Snippet) => void;
  onToggleFavorite: (id: string) => void;
}

export const FavoritesView = ({
  allSnippets,
  favorites,
  onSnippetClick,
  onToggleFavorite,
}: FavoritesViewProps) => {
  const favoriteSnippets = useMemo(() => {
    return allSnippets.filter(snippet => favorites.includes(snippet.id));
  }, [allSnippets, favorites]);

  return (
    <div>
      <div className="mb-4 sm:mb-6 md:mb-8">
        <div className="flex items-center gap-3 mb-3 sm:mb-4 md:mb-6">
          <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-lg">
            <Heart className="w-6 h-6 text-red-500" fill="currentColor" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
              Favorite Snippets
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Your saved and liked code snippets
            </p>
          </div>
        </div>

        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          {favoriteSnippets.length === 0
            ? "No favorite snippets yet. Start liking snippets to see them here!"
            : `Showing ${favoriteSnippets.length} favorite ${favoriteSnippets.length === 1 ? "snippet" : "snippets"}`}
        </p>
      </div>

      {favoriteSnippets.length > 0 ? (
        <SnippetList
          snippets={favoriteSnippets}
          onSnippetClick={onSnippetClick}
          favorites={favorites}
          onToggleFavorite={onToggleFavorite}
        />
      ) : (
        <div className="text-center py-8 sm:py-10 md:py-12">
          <div className="text-4xl sm:text-5xl md:text-6xl mb-3 sm:mb-4">❤️</div>
          <h3 className="text-base sm:text-lg font-medium text-gray-900 dark:text-white mb-1 sm:mb-2">
            No favorites yet
          </h3>
          <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Browse snippets and click the heart icon to save your favorites here
          </p>
        </div>
      )}
    </div>
  );
};
