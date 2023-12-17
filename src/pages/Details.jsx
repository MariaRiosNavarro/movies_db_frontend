import { useState, useEffect } from "react";
import Badget from "../components/Badget";
import { useParams } from "react-router-dom";
import removeSvg from "../assets/img/remove.svg";
import addSvg from "../assets/img/add.svg";

const Details = () => {
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  //HANDLE MAIN FECTH - details

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
          // console.log(result.data);
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
      <section className="max-w-[1440px] mx-auto my-0">
        {/* header  */}
        <article className="max-w-[1000px] mx-auto my-0 tablet:px-[10rem]">
          <div>
            <h3 className="text-4xl text-secondaryColor_red">
              {movie.movieTitle}
            </h3>
            <h4 className="text-white text-xl">{movie.movieReleaseYear}</h4>
          </div>
          {/* badgets */}
          <div>
            {isFavorite ? (
              <Badget
                onClick={removeFavorite}
                svg={removeSvg}
                text="Remove to Favorites"
                color={"[#E9C46A]"}
              />
            ) : (
              <Badget
                onClick={addFavorite}
                svg={addSvg}
                text="Add to Favorites"
              />
            )}
            <Badget text="Edit Movie" />
          </div>
        </article>
        {/* image & infos below */}
        <article className="flex flex-col justify-center tablet:flex-row  max-w-[1000px] mx-auto my-0 tablet:px-[10rem]">
          <div>
            <figure
              className="relative overflow-hidden "
              style={{ paddingTop: "150%" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={path}
                alt={movie.movieTitle}
              />
            </figure>
            <div className="flex">
              {/* infos below image */}
              <p>Rating:{movie.movieRating}</p>
              <p>Duration:{movie.movieRuntime}</p>
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col">
            {/* text:genres */}
            <div>
              {movie.movieGenres.map((item, index) => (
                <p
                  className="btn bg-primaryColor_green rounded-[50px]"
                  key={index}
                >
                  {item.text}
                </p>
              ))}
            </div>
            {/* text:description */}
            <p>{movie.movieDescription}</p>
            {/* text:infos */}
            <div className="flex gap-4">
              <p>Votes:{movie.movieVoteCount}</p>
              <p>Language:{movie.movieLanguage}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Details;
