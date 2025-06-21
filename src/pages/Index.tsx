import React, {useEffect, useMemo, useState} from "react";
import {useNavigate, useSearchParams} from "react-router-dom";
import {AppHeader} from "../components/AppHeader";
import {CategoriesView} from "../components/CategoriesView";
import {SnippetsView} from "../components/SnippetsView";
import {SnippetDetail} from "../components/SnippetDetail";
import {CategorySidebar} from "../components/CategorySidebar";
import {LandingPage} from "../components/LandingPage";
import {FavoritesView} from "../components/FavoritesView";
import {ThemeProvider} from "../hooks/useTheme";
import {useFavorites} from "../hooks/useFavorites";
import {searchSnippets, Snippet} from "../data/snippets";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {SidebarProvider} from "@/components/ui/sidebar";
import {Toaster} from "sonner";
import {LanguagesView} from "@/components/LanguagesView";
import {loadSnippets} from "@/utils/loadSnippetsDynamic";
import Footer from "@/components/Footer.tsx";

type ViewState =
  | "landing"
  | "languages"
  | "categories"
  | "snippets"
  | "detail"
  | "favorites";

type SnippetData = {
  availableLanguages: string[];
  languageCategories: {
    [language: string]: string[];
  };
  allCategories: string[];
  preloadedSnippets: string[];
};

const IndexContent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Initialize state from URL parameters
  const [viewState, setViewState] = useState<ViewState>(() => {
    const view = searchParams.get("view");
    const language = searchParams.get("language");
    const category = searchParams.get("category");
    const snippetId = searchParams.get("snippet");

    if (snippetId) return "detail";
    if (category) return "snippets";
    if (language && language !== "all") return "categories";
    if (view === "languages") return "languages";
    if (view === "favorites") return "favorites";
    return "landing";
  });

  const [selectedLanguage, setSelectedLanguage] = useState(
    () => searchParams.get("language") || "all",
  );
  const [selectedCategory, setSelectedCategory] = useState(
    () => searchParams.get("category") || "",
  );
  const [selectedSnippet, setSelectedSnippet] = useState<Snippet | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [dynamicSnippets, setDynamicSnippets] = useState<Snippet[]>([]);
  const [allLoadedSnippets, setAllLoadedSnippets] = useState<Snippet[]>([]);
  const [dynamicLanguages, setDynamicLanguages] = useState<string[]>([]);
  const [dynamicCategories, setDynamicCategories] = useState<string[]>([]);
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  const [allData, setData] = useState<SnippetData>({
    availableLanguages: [],
    languageCategories: {},
    allCategories: [],
    preloadedSnippets: [],
  });
  console.log("🚀 ~ IndexContent ~ allData:", allData);

  // Loads app data on initial mount
  useEffect(() => {
    async function fetchData() {
      const result = await loadSnippets();
      setDynamicLanguages(result?.availableLanguages || []);
      setData(result);
    }
    fetchData();

    // Enable HMR updates
    if (import.meta.hot) {
      import.meta.hot.on("vite:beforeUpdate", () => {
        fetchData(); // Reload data on file changes
      });
    }
  }, []);

  // Update categories state when allData changes or selectedLanguage changes
  useEffect(() => {
    if (allData) {
      // If selectedLanguage is "all", we can show all categories
      if (selectedLanguage === "all") {
        setDynamicCategories(allData?.allCategories);
      } else {
        // Filter categories based on selected language
        const categoriesForLanguage =
          allData?.languageCategories[selectedLanguage] || [];
        setDynamicCategories(categoriesForLanguage);
      }

      // Load all snippets
      setAllLoadedSnippets(allData?.preloadedSnippets);
    }
  }, [allData, selectedLanguage]);

  // Update snippets (dynamicSnippets) state when allData changes or selectedLanguage/selectedCategory changes
  useEffect(() => {
    if (allData) {
      // Filter snippets based on selected language and category
      let filteredSnippets = allData?.preloadedSnippets || [];

      if (selectedLanguage && selectedLanguage !== "all") {
        filteredSnippets = filteredSnippets.filter(
          (snippet) => snippet.language === selectedLanguage,
        );
      }

      if (selectedCategory) {
        filteredSnippets = filteredSnippets.filter(
          (snippet) => snippet.category === selectedCategory,
        );
      }

      setDynamicSnippets(filteredSnippets);
    }
  }, [allData, selectedLanguage, selectedCategory]);

  // Update URL when state changes
  const updateURL = (updates: {
    view?: ViewState;
    language?: string;
    category?: string;
    snippet?: string | null;
  }) => {
    const newParams = new URLSearchParams(searchParams);

    if (updates.view !== undefined) {
      if (updates.view === "landing") {
        newParams.delete("view");
        newParams.delete("language");
        newParams.delete("category");
        newParams.delete("snippet");
      } else {
        newParams.set("view", updates.view);
      }
    }

    if (updates.language !== undefined) {
      if (updates.language === "all") {
        newParams.delete("language");
      } else {
        newParams.set("language", updates.language);
      }
    }

    if (updates.category !== undefined) {
      if (updates.category === "") {
        newParams.delete("category");
      } else {
        newParams.set("category", updates.category);
      }
    }

    if (updates.snippet !== undefined) {
      if (updates.snippet === null) {
        newParams.delete("snippet");
      } else {
        newParams.set("snippet", updates.snippet);
      }
    }

    setSearchParams(newParams);
  };

  // Load snippets when language or category changes, on page loads
  useEffect(() => {
    const loadSnippets = async () => {
      if (
        viewState === "snippets" ||
        viewState === "categories" ||
        viewState === "detail"
      ) {
        try {
          // If we're in detail view and have a snippet ID from URL, find and set the snippet
          const snippetId = searchParams.get("snippet");

          if (
            viewState === "detail" &&
            snippetId &&
            dynamicSnippets?.length > 0
          ) {
            const snippet = dynamicSnippets?.find((s) => s?.id === snippetId);

            if (snippet) {
              setSelectedSnippet(snippet);
            } else {
              // Snippet not found, redirect to snippets view
              setViewState("snippets");
              updateURL({ view: "snippets", snippet: null });
            }
          }
        } catch (error) {
          console.error("Error loading snippets:", error);
        }
      }
    };

    loadSnippets();
  }, [viewState, searchParams, dynamicSnippets]);

  // Use only dynamic data - no fallback to static data
  const allLanguages = dynamicLanguages;
  const allCategories = useMemo(() => {
    return dynamicCategories.filter((category) => {
      // If a specific language is selected, only show categories that have snippets for that language
      if (selectedLanguage === "all") return true;
      // This will be filtered by the actual snippets loaded
      return true;
    });
  }, [dynamicCategories, selectedLanguage]);

  // Use only dynamic snippets
  const currentSnippets = useMemo(() => {
    let baseSnippets: Snippet[] = [...dynamicSnippets];

    if (selectedLanguage !== "all") {
      baseSnippets = baseSnippets.filter(
        (snippet) => snippet.language === selectedLanguage,
      );
    }

    // Only filter by category if a specific category is selected
    // If selectedCategory is empty (""), show all categories (All Categories)
    if (selectedCategory) {
      baseSnippets = baseSnippets.filter(
        (snippet) => snippet.category === selectedCategory,
      );
    }

    return searchSnippets(baseSnippets, searchQuery);
  }, [dynamicSnippets, selectedLanguage, selectedCategory, searchQuery]);

  const handleGetStarted = () => {
    setViewState("languages");
    updateURL({ view: "languages" });
  };

  const handleFavoritesClick = () => {
    setViewState("favorites");
    updateURL({ view: "favorites" });
  };

  const handleLandingSnippetClick = (snippet: Snippet) => {
    setSelectedLanguage(snippet.language);
    setSelectedCategory(snippet.category);
    setSelectedSnippet(snippet);
    setViewState("detail");
    updateURL({
      view: "detail",
      language: snippet.language,
      category: snippet.category,
      snippet: snippet.id,
    });
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setViewState("categories");
    updateURL({ view: "categories", language, category: "", snippet: null });
  };

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
    // Clear selected category when language changes (this selects "All Categories")
    setSelectedCategory("");
    // Close any open snippet detail
    setSelectedSnippet(null);
    // Update view state - if we're in snippets or detail view, go back to categories
    if (viewState === "snippets" || viewState === "detail") {
      setViewState("categories");
      updateURL({ view: "categories", language, category: "", snippet: null });
    } else {
      updateURL({ language, category: "", snippet: null });
    }
    // Clear search query
    setSearchQuery("");
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setViewState("snippets");
    setSearchQuery("");
    updateURL({ view: "snippets", category, snippet: null });
  };

  const handleSnippetClick = (snippet: Snippet) => {
    setSelectedSnippet(snippet);
    setViewState("detail");
    updateURL({ view: "detail", snippet: snippet.id });
  };

  const handleBack = () => {
    if (viewState === "detail") {
      setViewState("snippets");
      setSelectedSnippet(null);
      updateURL({ view: "snippets", snippet: null });
    } else if (viewState === "snippets") {
      setViewState("categories");
      setSelectedCategory("");
      setSearchQuery("");
      updateURL({ view: "categories", category: "", snippet: null });
    } else if (viewState === "categories") {
      setViewState("languages");
      setSelectedLanguage("all");
      updateURL({
        view: "languages",
        language: "all",
        category: "",
        snippet: null,
      });
    } else if (viewState === "languages" || viewState === "favorites") {
      setViewState("landing");
      updateURL({ view: "landing" });
    }
  };

  const renderBreadcrumb = () => {
    if (viewState === "landing") return null;

    return (
      <Breadcrumb className="mb-4 sm:mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              onClick={() => {
                setViewState("landing");
                updateURL({ view: "landing" });
              }}
              className="cursor-pointer text-xs sm:text-sm"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>

          {viewState === "favorites" && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs sm:text-sm">
                  Favorites
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}

          {viewState !== "languages" && viewState !== "favorites" && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => {
                    setViewState("languages");
                    setSelectedLanguage("all");
                    updateURL({
                      view: "languages",
                      language: "all",
                      category: "",
                      snippet: null,
                    });
                  }}
                  className="cursor-pointer text-xs sm:text-sm"
                >
                  Languages
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}

          {(viewState === "categories" ||
            viewState === "snippets" ||
            viewState === "detail") && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => {
                    setViewState("categories");
                    setSelectedCategory("");
                    updateURL({
                      view: "categories",
                      category: "",
                      snippet: null,
                    });
                  }}
                  className="cursor-pointer capitalize text-xs sm:text-sm"
                >
                  {selectedLanguage === "all"
                    ? "All Languages"
                    : selectedLanguage}
                </BreadcrumbLink>
              </BreadcrumbItem>
            </>
          )}

          {(viewState === "snippets" || viewState === "detail") &&
            selectedCategory && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    onClick={() => {
                      setViewState("snippets");
                      updateURL({ view: "snippets", snippet: null });
                    }}
                    className="cursor-pointer capitalize text-xs sm:text-sm"
                  >
                    {selectedCategory}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}

          {viewState === "detail" && selectedSnippet && (
            <>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-xs sm:text-sm">
                  {selectedSnippet.title}
                </BreadcrumbPage>
              </BreadcrumbItem>
            </>
          )}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };

  // Show landing page
  if (viewState === "landing") {
    return (
      <LandingPage
        onGetStarted={handleGetStarted}
        onSnippetClick={handleLandingSnippetClick}
        onFavoritesClick={handleFavoritesClick}
        totalSnippets={allLoadedSnippets.length}
        totalLanguages={allLanguages.length}
        totalCategories={allCategories.length}
        allLoadedSnippets={allLoadedSnippets}
      />
    );
  }

  const shouldShowSidebar =
    viewState === "snippets" ||
    viewState === "categories" ||
    viewState === "detail";

  if (shouldShowSidebar) {
    return (
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <CategorySidebar
            selectedLanguage={selectedLanguage}
            selectedCategory={selectedCategory}
            searchQuery={searchQuery}
            languages={allLanguages}
            categories={allCategories}
            onLanguageChange={handleLanguageChange}
            onCategorySelect={handleCategorySelect}
            onSearchChange={(value) => {
              setSearchQuery(value);
              if (value && selectedCategory) {
                setSelectedCategory("");
                updateURL({ category: "" });
              }
            }}
          />
          <div className="flex-1 flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors">
            <AppHeader
              onHomeClick={() => {
                setViewState("landing");
                updateURL({ view: "landing" });
              }}
              onFavoritesClick={handleFavoritesClick}
            />

            <main className="flex-1 max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 sm:py-6 md:py-8 w-full">
              {renderBreadcrumb()}

              {(viewState === "snippets" || viewState === "categories") && (
                <SnippetsView
                  snippets={currentSnippets}
                  selectedLanguage={selectedLanguage}
                  selectedCategory={selectedCategory}
                  searchQuery={searchQuery}
                  favorites={favorites}
                  onSnippetClick={handleSnippetClick}
                  onToggleFavorite={toggleFavorite}
                />
              )}

              {viewState === "detail" && selectedSnippet && (
                <SnippetDetail
                  snippet={selectedSnippet}
                  isFavorite={isFavorite(selectedSnippet.id)}
                  onToggleFavorite={toggleFavorite}
                  onBack={handleBack}
                />
              )}
            </main>

            <Footer mode={"inside"} />
          </div>
        </div>
      </SidebarProvider>
    );
  }

  return (
    <div className="min-h-screen bg-white-50 dark:bg-white-900 transition-colors flex flex-col">
      <AppHeader
        onHomeClick={() => {
          setViewState("landing");
          updateURL({ view: "landing" });
        }}
        onFavoritesClick={handleFavoritesClick}
      />

      <main className="flex-1 max-w-7xl mx-auto px-2 xs:px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16 py-4 sm:py-6 md:py-8">
        {renderBreadcrumb()}

        {viewState === "languages" && (
          <LanguagesView
            languages={["all", ...allLanguages]}
            onLanguageSelect={handleLanguageSelect}
          />
        )}

        {viewState === "categories" && (
          <CategoriesView
            selectedLanguage={selectedLanguage}
            categories={allCategories}
            onCategorySelect={handleCategorySelect}
          />
        )}

        {viewState === "favorites" && (
          <FavoritesView
            allSnippets={allLoadedSnippets}
            favorites={favorites}
            onSnippetClick={handleSnippetClick}
            onToggleFavorite={toggleFavorite}
          />
        )}
      </main>

      <Footer mode={"inside"} />
    </div>
  );
};

const Index = () => {
  return (
    <ThemeProvider>
      <IndexContent />
      <Toaster />
    </ThemeProvider>
  );
};

export default Index;
