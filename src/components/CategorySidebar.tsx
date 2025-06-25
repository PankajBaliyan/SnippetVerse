import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue,} from "@/components/ui/select";
import {SearchBar} from "./SearchBar";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarProvider,
    useSidebar,
} from "@/components/ui/sidebar";
import {Folder, Languages, PanelLeftClose, PanelLeftOpen, Search, Sparkles,} from "lucide-react";
import {useEffect} from "react";

interface CategorySidebarProps {
  selectedLanguage: string;
  selectedCategory: string;
  searchQuery: string;
  languages: string[];
  categories: string[];
  onLanguageChange: (language: string) => void;
  onCategorySelect: (category: string) => void;
  onSearchChange: (query: string) => void;
}

const CategorySidebarContent = ({
  selectedLanguage,
  selectedCategory,
  searchQuery,
  languages,
  categories,
  onLanguageChange,
  onCategorySelect,
  onSearchChange,
}: CategorySidebarProps) => {
  const { toggleSidebar, state } = useSidebar();

  useEffect(() => {
    // selectedLanguage not found in list, set to "all"
    if (selectedLanguage && !languages.includes(selectedLanguage)) {
      onLanguageChange("all");
    }
  }, [selectedLanguage, languages]);

  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon"
      className="border-r border-gray-200 dark:border-gray-700"
    >
      <SidebarHeader
        className={`border-b border-gray-200 dark:border-gray-700 p-4 ${state === "expanded" ? "" : "px-2"}`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-md">
              <Folder className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-gray-900 dark:text-white group-data-[collapsible=icon]:hidden">
              Categories
            </span>
          </div>
          {state === "expanded" && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="h-8 w-8 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              title="Collapse sidebar"
            >
              <PanelLeftClose className="h-4 w-4" />
            </Button>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="p-2 space-y-4 group-data-[collapsible=icon]:p-2 group-data-[collapsible=icon]:space-y-2">
        {/* Collapsed state toggle */}
        {state === "collapsed" && (
          <div className="flex justify-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSidebar}
              className="h-10 w-10 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200"
              title="Expand sidebar"
            >
              <PanelLeftOpen className="h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Language Selection */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 px-2 group-data-[collapsible=icon]:hidden">
            <Languages className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Language
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="group-data-[collapsible=icon]:hidden">
              <Select value={selectedLanguage} onValueChange={onLanguageChange}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Languages</SelectItem>
                  {languages.map((language) => (
                    <SelectItem
                      key={language}
                      value={language}
                      className="capitalize"
                    >
                      {language}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <SidebarMenuButton
                onClick={toggleSidebar}
                className="h-10 w-10 flex items-center justify-center"
                tooltip="Language Selection"
              >
                <Languages className="h-5 w-5" />
              </SidebarMenuButton>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Search Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 px-2 group-data-[collapsible=icon]:hidden">
            <Search className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Search
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="group-data-[collapsible=icon]:hidden">
              <SearchBar
                value={searchQuery}
                onChange={onSearchChange}
                placeholder="Search snippets..."
              />
            </div>
            <div className="hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <SidebarMenuButton
                onClick={toggleSidebar}
                className="h-10 w-10 flex items-center justify-center"
                tooltip="Search"
              >
                <Search className="h-5 w-5" />
              </SidebarMenuButton>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Categories Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 px-2 group-data-[collapsible=icon]:hidden">
            <Folder className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            Browse Categories
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <div className="group-data-[collapsible=icon]:hidden">
              <SidebarMenu className="space-y-1">
                <SidebarMenuItem>
                  <SidebarMenuButton
                    onClick={() => onCategorySelect("")}
                    isActive={!selectedCategory}
                    className="w-full justify-start"
                  >
                    <Sparkles className="h-4 w-4 mr-3" />
                    <span>All Categories</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                  {categories?.map((category) => (
                  <SidebarMenuItem key={category}>
                    <SidebarMenuButton
                      onClick={() => onCategorySelect(category)}
                      isActive={selectedCategory === category}
                      className="w-full justify-start capitalize"
                    >
                      <Folder className="h-4 w-4 mr-3" />
                      <span>{category}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </div>
            <div className="hidden group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center">
              <SidebarMenuButton
                onClick={toggleSidebar}
                className="h-10 w-10 flex items-center justify-center"
                tooltip="Browse Categories"
              >
                <Folder className="h-5 w-5" />
              </SidebarMenuButton>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export const CategorySidebar = (props: CategorySidebarProps) => {
  return (
    <SidebarProvider>
      <CategorySidebarContent {...props} />
    </SidebarProvider>
  );
};
