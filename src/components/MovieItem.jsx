import Badget from "./Badget";
import removeSvg from "../assets/img/remove.svg";
import { Link } from "react-router-dom";

const MovieItem = (props) => {
  const removeFavorite = () => {
    console.log("remove");
  };

  //handle the diferents images of the db

  // handle Image
  let imgPath = props?.movieImage || "";
  let path = imgPath.includes("http")
    ? imgPath
    : import.meta.env.VITE_BACKEND_URL + "/" + imgPath;

  //so that we have images of different formats or heights
  //with style={{ paddingTop: "150%" }} we can force
  //the ratio of (3 / 2) to be respected.
  //Only with aspect-w-2 aspect-h-3, dont work it

  return (
    <li>
      <Link to={`/movie/${props._id}`}>
        <figure
          className="relative overflow-hidden"
          style={{ paddingTop: "150%" }}
        >
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={path}
            alt={props.movieTitle}
          />
        </figure>

        <h3>{props.movieTitle}</h3>
        <h4>{props.movieReleaseYear}</h4>

        {props.arrayType === "favorites" && (
          <Badget
            svg={removeSvg}
            onClick={removeFavorite}
            text="Remove from Favorites"
          />
        )}
      </Link>
    </li>
  );
};

export default MovieItem;
