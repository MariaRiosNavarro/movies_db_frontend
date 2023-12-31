import Badget from "./Badget";
import removeSvg from "../assets/img/remove.svg";
import { Link } from "react-router-dom";
import { useMyContext } from "../context/AppFavoritesFetchProvider";

const MovieItem = (props) => {
  const { removeFavorite } = useMyContext();

  //handle the diferents images of the db
  let imgPath = props?.movieImage || "";
  let path;

  if (imgPath.includes("http")) {
    //url
    path = imgPath;
  } else if (imgPath) {
    //local server
    path = `${import.meta.env.VITE_BACKEND_URL}/${imgPath}`;
  } else {
    path = "/img/placeholder.jpg";
  }

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
            onError={(e) => {
              //  Handle image loading error, switch to placeholder
              e.target.src = "/img/placeholder.jpg";
            }}
          />
        </figure>

        <h3 className="text-white text-xl py-4 font-bold">
          {props.movieTitle}
        </h3>
        <h4 className="text-primaryColor_green text-xl font-bold">
          {props.movieReleaseYear}
        </h4>
      </Link>
      {props.arrayType === "favorites" && (
        <Badget
          svg={removeSvg}
          onClick={() => removeFavorite(props._id)}
          text="Remove from Favorites"
        />
      )}
    </li>
  );
};

export default MovieItem;
