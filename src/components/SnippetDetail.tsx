import { ArrowLeft, Heart, User, GithubIcon } from "lucide-react";
import { CopyButton } from "./CopyButton";
import { SyntaxHighlighter } from "./SyntaxHighlighter";
import { Snippet } from "../data/snippets";
import { FaGithub } from "react-icons/fa";

interface SnippetDetailProps {
  snippet: Snippet;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onBack: () => void;
}

export const SnippetDetail = ({
  snippet,
  isFavorite,
  onToggleFavorite,
  onBack,
}: SnippetDetailProps) => {
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

  const handleRedirectToGithub = (username: string) => {
    const link = `https://github.com/${username}`;
    window.open(link, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <button
          onClick={onBack}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
        >
          <ArrowLeft size={20} />
        </button>
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{snippet.title}</h1>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-3 h-3 rounded-full ${getLanguageColor(snippet.language)}`}
              ></span>
              <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
                {snippet.language}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-500">•</span>
            <span className="text-sm text-gray-600 dark:text-gray-400 capitalize">
              {snippet.category}
            </span>
            {snippet.contributedBy && (
              <>
                <span className="text-sm text-gray-500 dark:text-gray-500">•</span>
                <div
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={() => handleRedirectToGithub(snippet?.contributedBy)}
                >
                  <FaGithub size={14} className="text-gray-500 dark:text-gray-400" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    @{snippet.contributedBy}
                  </span>
                </div>
              </>
            )}
          </div>
        </div>
        <button
          onClick={() => onToggleFavorite(snippet.id)}
          className={`p-3 rounded-lg transition-colors ${
            isFavorite
              ? "text-red-500 bg-red-50 dark:bg-red-900/20"
              : "text-gray-400 hover:text-red-500 hover:bg-gray-50 dark:hover:bg-gray-700"
          }`}
        >
          <Heart size={24} fill={isFavorite ? "currentColor" : "none"} />
        </button>
      </div>

      {/* Description */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Description</h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{snippet.description}</p>
      </div>

      {/* Code */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Code</h2>
          <CopyButton text={snippet.code} />
        </div>
        <SyntaxHighlighter code={snippet.code} language={snippet.language} />
      </div>

      {/* Usage */}
      {snippet.usage && (
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">How to Use</h2>
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{snippet.usage}</p>
        </div>
      )}

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {snippet.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-md"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
