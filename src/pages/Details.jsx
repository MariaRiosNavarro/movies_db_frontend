import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Badget from "../components/Badget";
import { useParams } from "react-router-dom";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  //HANDLE MAIN FECTH
  useEffect(() => {
    const fetchAsync = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/movies/" + id
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result = await response.json();
          console.log(result.data);
          let movie = result.data;
          setMovie(movie);
        }
      } catch (error) {
        console.error("Error Message", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAsync();
  }, [id]);

  //HANDLE FAVORITES

  const removeFavorite = () => {
    console.log("remove");
  };

  const addFavorite = () => {
    console.log("add");
  };

  //HANDLE IMG

  let imgPath = movie?.movieImage || "";
  let path = imgPath.includes("http")
    ? imgPath
    : `${import.meta.env.VITE_BACKEND_URL}/${imgPath}`;

  // so that we have images of different formats or heights
  // with style={{ paddingTop: "150%" }} we can force
  // the ratio of (3 / 2) to be respected.
  // Only with aspect-w-2 aspect-h-3, dont work it

  //HANDLE LOADING

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Header></Header>
      <section>
        <article>
          <div>
            <h3>{movie.movieTitle}</h3>
            <h4>{movie.movieReleaseYear}</h4>
          </div>
          <div>
            {favorite ? (
              <Badget onClick={removeFavorite} text="Remove to Favorites" />
            ) : (
              <Badget onClick={addFavorite} text="Add to Favorites" />
            )}
            <Badget text="Edit Movie" />
          </div>
        </article>
        <article className="flex flex-col tablet:flex-row">
          <div>
            <figure
              className="relative overflow-hidden tablet:w-[50%]"
              style={{ paddingTop: "150%" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={path}
                alt={movie.movieTitle}
              />
            </figure>
            <div className="flex">
              <p>Rating:{movie.movieRating}</p>
              <p>Duration:{movie.movieRuntime}</p>
              <p>Votes:{movie.movieVoteCount}</p>
              <p>Language:{movie.movieLanguage}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <div>
              {movie.movieGenres.map((item, index) => (
                <Badget key={index} text={item.text} />
              ))}
            </div>
            <p>{movie.movieDescription}</p>
          </div>
        </article>
      </section>

      <Footer />
    </>
  );
};

export default Details;
