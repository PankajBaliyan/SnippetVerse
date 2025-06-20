import { useMemo } from "react";
import {
  ArrowRight,
  Book,
  Code,
  Globe,
  Plus,
  Search,
  Star,
  Users,
  Zap,
} from "lucide-react";
import { CopyButton } from "./CopyButton";
import { AppHeader } from "./AppHeader";
import Footer from "@/components/Footer.tsx";

interface Snippet {
  id: string;
  title: string;
  language: string;
  category: string;
  code: string;
  tags: string[];
  description: string;
  shortDescription: string;
  usage?: string;
  contributedBy?: string;
}

interface LandingPageProps {
  onGetStarted: () => void;
  onSnippetClick: (snippet: Snippet) => void;
  onFavoritesClick: () => void;
  totalSnippets: number;
  totalLanguages: number;
  totalCategories: number;
  allLoadedSnippets: Snippet[];
}

export const LandingPage = ({
  onGetStarted,
  onSnippetClick,
  onFavoritesClick,
  totalSnippets,
  totalLanguages,
  totalCategories,
  allLoadedSnippets,
}: LandingPageProps) => {
  // Get random snippets for preview
  const randomSnippets = useMemo(() => {
    const shuffled = [...allLoadedSnippets].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 6);
  }, []);

  const getLanguageColor = (lang: string) => {
    // Simplified color palette - just gray variations
    return "bg-gray-600";
  };

  const handleContribute = () => {
    window.open("https://github.com", "_blank", "noopener,noreferrer");
  };

  const features = [
    {
      icon: <Search className="h-6 w-6" />,
      title: "Smart Search",
      description:
        "Find code snippets instantly with our powerful search functionality across languages, categories, and tags.",
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Multiple Languages",
      description:
        "Support for JavaScript, Python, CSS, React, TypeScript and more programming languages and frameworks.",
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Save Favorites",
      description:
        "Bookmark your favorite snippets for quick access later. All saved locally in your browser.",
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Organized Categories",
      description:
        "Browse snippets by categories like arrays, strings, async operations, and more for easy discovery.",
    },
  ];

  const stats = [
    {
      icon: <Code className="h-6 w-6" />,
      number: `${totalSnippets}+`,
      label: "Code Snippets",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      number: `${totalLanguages}+`,
      label: "Languages",
    },
    {
      icon: <Book className="h-6 w-6" />,
      number: `${totalCategories}+`,
      label: "Categories",
    },
    {
      icon: <Users className="h-6 w-6" />,
      number: "100%",
      label: "Free & Open",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <AppHeader
        onHomeClick={() => window.location.reload()}
        onFavoritesClick={onFavoritesClick}
      />

      {/* Hero Section */}
      <section className="relative bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
                <Code className="h-16 w-16 text-blue-600 dark:text-blue-400" />
              </div>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white">
              SnippetVerse
            </h1>

            <p className="text-xl md:text-2xl mb-12 text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              Your ultimate destination for code snippets. Browse, search, and
              save your favorite code examples across multiple programming
              languages and frameworks.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button
                onClick={onGetStarted}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                Get Started <ArrowRight className="h-5 w-5" />
              </button>
              <button
                onClick={handleContribute}
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors duration-200 flex items-center justify-center gap-2"
              >
                <Plus className="h-5 w-5" />
                Submit Snippet
              </button>
              <button
                onClick={() =>
                  document
                    .getElementById("features")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                Learn More
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-3 text-blue-600 dark:text-blue-400">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About SnippetVerse
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed">
              SnippetVerse is an open-source web application designed for
              developers who want to quickly find, save, and organize code
              snippets. Built with modern web technologies, it provides a
              seamless experience for browsing code examples across multiple
              programming languages and frameworks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Zap className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Fast & Lightweight
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                No backend required. Everything runs in your browser for maximum
                speed and privacy.
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Code className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Open Source
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Completely open source and free to use. Contribute and make it
                better for everyone!
              </p>
            </div>

            <div className="text-center p-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-xl mx-auto mb-6 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Beautiful UI
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Clean, modern interface with dark mode support for comfortable
                coding sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Everything you need to manage and discover code snippets
              efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-200"
              >
                <div className="text-blue-600 dark:text-blue-400 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Snippets Preview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Featured Snippets
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Here's a taste of what you'll find in our collection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {randomSnippets.map((snippet) => (
              <div
                key={snippet.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 cursor-pointer hover:shadow-lg transform hover:-translate-y-1"
                onClick={() => onSnippetClick?.(snippet)}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block w-3 h-3 rounded-full bg-blue-600"></span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 capitalize font-medium">
                    {snippet.language}
                  </span>
                  <span className="text-sm text-gray-400 dark:text-gray-600">
                    •
                  </span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                    {snippet.category}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 hover:text-blue-600 dark:hover:text-blue-300 transition-colors">
                  {snippet.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                  {snippet.shortDescription}
                </p>

                <div className="relative">
                  <pre className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 text-sm overflow-x-auto border border-gray-200 dark:border-gray-700">
                    <code className="text-gray-300">
                      {snippet.code.slice(0, 120)}...
                    </code>
                  </pre>
                  <div className="absolute top-3 right-3">
                    <CopyButton text={snippet.code} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {snippet.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                    View Details →
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <button
              onClick={onGetStarted}
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-lg text-lg font-medium transition-colors duration-200"
            >
              Explore All Snippets
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                SnippetVerse
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md leading-relaxed">
                Your go-to resource for code snippets. Built by developers, for
                developers. Open source and always free.
              </p>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Twitter
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Features
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Code Snippets
                </li>
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Smart Search
                </li>
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Favorites
                </li>
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Dark Mode
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Languages
              </h4>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  JavaScript
                </li>
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  Python
                </li>
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  React
                </li>
                <li className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors cursor-pointer">
                  TypeScript
                </li>
              </ul>
            </div>
          </div>

          <Footer mode={"outside"} />
        </div>
      </footer>
    </div>
  );
};
