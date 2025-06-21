import {CategoryGrid} from "./CategoryGrid";

interface CategoriesViewProps {
  selectedLanguage: string;
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export const CategoriesView = ({
  selectedLanguage,
  categories,
  onCategorySelect,
}: CategoriesViewProps) => {
  return (
    <div>
      <div className="text-center mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 md:mb-4">
          {selectedLanguage === "all"
            ? "All Categories"
            : `${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)} Categories`}
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 px-4">
          Choose a category to see related code snippets
        </p>
      </div>

      <CategoryGrid
        categories={categories}
        onCategorySelect={onCategorySelect}
      />
    </div>
  );
};
