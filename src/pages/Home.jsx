import { useState, useEffect } from "react";
import BigImage from "../components/BigImage";
import MoviesList from "../components/MoviesList";

const Home = ({ movies, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <BigImage />
      <section className="p-[10rem]">
        <h1>All Movies</h1>
        <MoviesList array={movies} arrayType="movies" />
      </section>
    </>
  );
};

export default Home;
