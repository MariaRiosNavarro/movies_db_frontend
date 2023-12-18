// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import MoviesList from "../components/MoviesList";
import { useMyContext } from "../context/AppFavoritesFetchProvider";

const Favorites = () => {
  const { favorites } = useMyContext();

  if (!favorites) {
    console.error("No Favorites");
    return <p>There are no saved favourites</p>;
  }

  return (
    <>
      <section className="p-[10rem]">
        <h1 className="text-secondaryColor_red text-3xl font-bold py-4">
          My Favorites
        </h1>
        <MoviesList array={favorites} arrayType="favorites" />
      </section>
    </>
  );
};

export default Favorites;
