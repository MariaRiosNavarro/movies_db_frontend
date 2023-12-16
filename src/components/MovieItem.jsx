import Badget from "./Badget";
import removeSvg from "../assets/img/remove.svg";

const MovieItem = (props) => {
  const removeFavorite = () => {
    console.log("remove");
  };

  let imgPath = props.movieImage;

  let path;
  console.log(imgPath);

  //localhost:9987

  if (imgPath.includes("http")) {
    path = imgPath;
  } else {
    console.log("ahllo");

    path = import.meta.env.VITE_BACKEND_URL + "/" + imgPath;
    console.log(path);
  }

  return (
    <li>
      <figure className="relative overflow-hidden  aspect-w-2 aspect-h-3">
        <img
          className="object-cover w-full h-full"
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
          color="accentColor_yellow"
        />
      )}
    </li>
  );
};

export default MovieItem;
