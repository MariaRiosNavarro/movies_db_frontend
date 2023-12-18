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
        <h1 className="text-secondaryColor_red text-3xl font-bold py-4">
          All Movies
        </h1>
        <MoviesList array={movies} arrayType="movies" />
      </section>
    </>
  );
};

export default Home;
