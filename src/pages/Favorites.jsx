import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import MoviesList from "../components/MoviesList";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/favorites"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result = await response.json();
          const movieData = result.data || [];
          console.log(movieData);
          setFavorites(movieData);
        }
      } catch (error) {
        console.error("Error Message", error);
      } finally {
        console.log("Add cleanup code here (if needed)");
      }
    };
    fetchAsync();
  }, []);

  return (
    <>
      <Header></Header>
      <section className=" px-[10rem]">
        <h1>My Favorites</h1>
        <MoviesList array={favorites} arrayType="favorites" />
      </section>
      <Footer />
    </>
  );
};

export default Favorites;
