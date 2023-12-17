import { useState, useEffect } from "react";
import Badget from "../components/Badget";
import { useParams } from "react-router-dom";
import removeSvg from "../assets/img/remove.svg";
import addSvg from "../assets/img/add.svg";
import { useMyContext } from "../context/AppFavoritesFetchProvider";
import placeholder from "../../public/img/placeholder.jpg";
import { convertSecondsToHoursMinutes } from "../utils/timeconvert";

const Details = () => {
  const { favorites, addFavorite, removeFavorite, favoritesMessage } =
    useMyContext();
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const [movie, setMovie] = useState(null);

  const { id } = useParams();

  // HANDLE FAV

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
          // HANDLE FAV
          setIsFavorite(
            favorites.some((item) => item.movieTitle === movie.movieTitle)
          );
          console.log("backend message------------", favoritesMessage);
        }
      } catch (error) {
        console.error("Error Message", error);
      } finally {
        setLoading(false);
      }
    };
    fetchAsync();
  }, [id, favorites]);

  //HANDLE IMG

  let imgPath = movie?.movieImage || "";
  let path;

  if (imgPath.includes("http")) {
    //url
    path = imgPath;
  } else if (imgPath) {
    //local server
    path = `${import.meta.env.VITE_BACKEND_URL}/${imgPath}`;
  } else {
    path = placeholder;
  }

  // so that we have images of different formats or heights
  // with style={{ paddingTop: "150%" }} we can force
  // the ratio of (3 / 2) to be respected.
  // Only with aspect-w-2 aspect-h-3, dont work it

  //HANDLE Duration of film

  let timeData = movie?.movieRuntime || "";
  let time = convertSecondsToHoursMinutes(timeData);

  //HANDLE LOADING

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <section className="max-w-[1440px] mx-auto my-0 py-[5rem] min-w-[100vw]">
        {/* header  */}
        <article className="max-w-[1440px] mx-auto my-0 px-[2.5rem] flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <h3 className="text-4xl text-secondaryColor_red">
              {movie.movieTitle}
            </h3>
            <h4 className="text-white text-xl">{movie.movieReleaseYear}</h4>
          </div>
          {/* badgets */}
          <div className="flex w-[100%] items-center gap-8 py-8">
            {isFavorite ? (
              <Badget
                onClick={() => removeFavorite(id)}
                svg={removeSvg}
                text="Remove to Favorites"
                color={"[#E9C46A]"}
              />
            ) : (
              <Badget
                onClick={() => addFavorite(movie)}
                svg={addSvg}
                text="Add to Favorites"
              />
            )}
            <Badget text="Edit Movie" />
          </div>
        </article>
        {/* image & infos below */}
        <article className="flex flex-col justify-center px-[2.5rem] tablet:flex-row  max-w-[1440px] mx-auto my-0  gap-8">
          <div className="flex flex-col gap-4 w-[100%]">
            <figure
              className="relative overflow-hidden "
              style={{ paddingTop: "150%" }}
            >
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src={path}
                alt={movie.movieTitle}
                onError={(e) => {
                  //  Handle image loading error, switch to placeholder
                  e.target.src = placeholder;
                }}
              />
            </figure>
            <div className="flex gap-12">
              {/* infos below image */}
              <p className="text-2xl">Rating:{movie.movieRating}</p>
              <p className="text-2xl">Duration:{time}</p>
            </div>
          </div>
          {/* text */}
          <div className="flex flex-col">
            {/* text:genres */}
            <div className="flex gap-4">
              {movie.movieGenres.map((item, index) => (
                <p
                  className="btn bg-primaryColor_green rounded-[50px] hover:bg-transparent hover:text-primaryColor_green hover:border-primaryColor_green"
                  key={index}
                >
                  {item.text}
                </p>
              ))}
            </div>
            <h3 className="text-4xl text-secondaryColor_red pt-8">Story</h3>
            {/* text:description */}
            <p className="py-8 text-xl">{movie.movieDescription}</p>
            {/* text:infos */}
            <div className="flex gap-4">
              <p className="text-xl">Votes: {movie.movieVoteCount}</p>
              <p className="text-xl">Language: {movie.movieLanguage}</p>
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default Details;
