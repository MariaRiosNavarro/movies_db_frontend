import { useState, useEffect } from "react";
import Header from "../components/Header";
import BigImage from "../components/BigImage";
import Footer from "../components/Footer";
import MoviesList from "../components/MoviesList";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/movies"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result = await response.json();
          const movieData = result.data || [];
          console.log(movieData);
          setMovies(movieData);
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
      <BigImage />
      <section className="px-[10rem]">
        <h1>All Movies</h1>
        <MoviesList array={movies} arrayType="movies" />
      </section>
      <Footer />
    </>
  );
};

export default Home;
