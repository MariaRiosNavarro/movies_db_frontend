import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Add from "./pages/Add";
import Favorites from "./pages/Favorites";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState, useEffect } from "react";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      }
    };
    fetchAsync();
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-bgColor_darkgreen min-w-[100vw]">
        <Header movies={movies} loading={loading} />
        <Routes>
          <Route
            path="/"
            element={<Home movies={movies} loading={loading} />}
          />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="/add" element={<Add />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
