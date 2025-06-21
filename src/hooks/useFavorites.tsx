import {useEffect, useState} from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("snippet-favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (snippetId: string) => {
    const newFavorites = favorites.includes(snippetId)
      ? favorites.filter((id) => id !== snippetId)
      : [...favorites, snippetId];

    setFavorites(newFavorites);
    localStorage.setItem("snippet-favorites", JSON.stringify(newFavorites));
  };

  const isFavorite = (snippetId: string) => favorites.includes(snippetId);

  return { favorites, toggleFavorite, isFavorite };
};
