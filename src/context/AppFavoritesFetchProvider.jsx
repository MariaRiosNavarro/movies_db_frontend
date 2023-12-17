import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useMyContext = () => useContext(AppContext);

export const AppFavoritesFetchProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [favoritesMessage, setFavoritesMessage] = useState(null);

  // General Fetch Funktion

  const fetchAsync = async (url, options) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const { data, message } = await response.json();
      return { data, message };
    } catch (error) {
      console.error("Fetch error", error);
      throw new Error("An error occurred during the fetch operation");
    }
  };

  //Fetch Funktion for Get ALL FAV

  const fetchFavorites = async () => {
    try {
      const { data } = await fetchAsync(
        `${import.meta.env.VITE_BACKEND_URL}/api/favorites`
      );
      setFavorites(data);
    } catch (error) {
      console.error("Error fetching favorites", error);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  //Fetch Funktion for PUT one FAV

  const addFavorite = (movie) => {
    const fetchAddFavorite = async () => {
      try {
        const { message } = await fetchAsync(
          `${import.meta.env.VITE_BACKEND_URL}/api/favorites`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(movie),
          }
        );
        // Refetch favorites after adding one
        await fetchFavorites();
        setFavoritesMessage(message);
      } catch (error) {
        console.error("Error adding favorite", error);
        setFavoritesMessage(
          error.message || "Failed to add movie to favorites"
        );
      }
    };

    fetchAddFavorite();
  };

  //Fetch Funktion for Delete one FAV

  const removeFavorite = (id) => {
    const fetchRemoveFavorite = async () => {
      try {
        const { message } = await fetchAsync(
          `${import.meta.env.VITE_BACKEND_URL}/api/favorites/${id}`,
          {
            method: "DELETE",
          }
        );

        // Refetch favorites after removing one
        await fetchFavorites();
        setFavoritesMessage(message);
      } catch (error) {
        console.error("Error removing favorite", error);
        setFavoritesMessage(
          error.message || "Failed to remove movie from favorites"
        );
      }
    };

    fetchRemoveFavorite();
  };

  return (
    <AppContext.Provider
      value={{
        favorites,
        setFavorites,
        favoritesMessage,
        setFavoritesMessage,
        addFavorite,
        removeFavorite,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
