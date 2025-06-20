
interface CategoryGridProps {
  categories: string[];
  onCategorySelect: (category: string) => void;
}

export const CategoryGrid = ({ categories, onCategorySelect }: CategoryGridProps) => {
  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      array: '📊',
      string: '📝',
      object: '🏗️',
      async: '⚡',
      hooks: '🎣',
      layout: '📐',
      function: '⚙️',
      component: '🧩'
    };
    return icons[category] || '📄';
  };

  const getCategoryDescription = (category: string) => {
    const descriptions: { [key: string]: string } = {
      array: 'Array manipulation and iteration methods',
      string: 'String operations and formatting',
      object: 'Object manipulation and destructuring',
      async: 'Asynchronous programming patterns',
      hooks: 'React hooks and state management',
      layout: 'CSS layout techniques and styling',
      function: 'Function utilities and patterns',
      component: 'Reusable components and patterns'
    };
    return descriptions[category] || 'Code snippets and examples';
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className="p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 text-left group"
        >
          <div className="text-3xl mb-3">{getCategoryIcon(category)}</div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white capitalize mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
            {category}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {getCategoryDescription(category)}
          </p>
        </button>
      ))}
    </div>
  );
};
