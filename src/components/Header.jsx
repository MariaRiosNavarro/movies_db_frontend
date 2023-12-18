import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import StarSvg from "./svg/StarSvg";
import { useState, useRef } from "react";

const Header = ({ movies, loading }) => {
  const [notFoundMessage, setNotFoundMessage] = useState(null);
  const titleRef = useRef();
  const navigate = useNavigate();

  const searchFilm = async () => {
    let value = titleRef.current.value;
    const findMovie = movies.filter((movie) => movie.movieTitle === value);

    if (findMovie.length > 0) {
      let id = findMovie[0]._id;

      try {
        const response = await fetch(
          import.meta.env.VITE_BACKEND_URL + "/api/movies/" + id
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        } else {
          const result = await response.json();
          console.log(result.message);
          console.log(result.data);
          // Use navigate to redirect to the movie details page
          navigate(`/movie/${id}`);
        }
      } catch (error) {
        console.error("Error fetching movie details", error);
        setNotFoundMessage("Error fetching movie details");
      }
    } else {
      setNotFoundMessage(
        "We have not found this title, would you like to add it?"
      );
      setTimeout(() => {
        setNotFoundMessage("");
      }, 3000);
      navigate(`/add`);
    }
  };

  return (
    <>
      <header className="bg-bgColor_darkgreen max-w-[1440px] mx-auto my-0 p-4 tablet:p-10 ">
        <nav className="max-w-[1440px] mx-auto flex flex-col  items-center justify-between tablet:gap-[3%] tablet:flex-row  bigdesktop:mx-auto bigdesktop:my-0 tablet:px-0 tablet:mx-0 ">
          <div className="flex justify-between items-center gap-4">
            <Link to="/">
              <h1 className="text-2xl tablet:text-3xl  desktop:text-4xl font-bold text-primaryColor_green hover:text-accentColor_yellow ">
                MMDb
              </h1>
            </Link>
            <Link to="/favorites">
              <StarSvg />
            </Link>
          </div>

          <div className="mt-4 tablet:mt-0 flex flex-col  gap-4 tablet:flex-row  tablet:gap-8 items-center justify-center">
            <input
              className="border bg-transparent rounded-full desktop:w-[511px] labtop:w-[20%]  h-[61px] border-primaryColor_green py-2 px-4 text-primaryColor_green placeholder-primaryColor_green hover:border-accentColor_yellow"
              type="text"
              placeholder="e.g The Godfather"
              ref={titleRef}
            />
            <Button onClick={searchFilm} name="Submit" />
          </div>

          <Link
            className="mt-4 tablet:mt-0 text-primaryColor_green text-lg tablet:text-2xl desktop:text-3xl hover:text-accentColor_yellow min-w-fit"
            to="/add"
          >
            Add your own
          </Link>
        </nav>
      </header>
      {notFoundMessage && (
        <p className="p-8 bg-secondaryColor_red rounded-2xl text-2xl font-bolder text-center w-50% mx-auto my-0 z-10">
          <span className="px-8">⬇</span> {notFoundMessage}
          <span className="px-8">⬇</span>
        </p>
      )}
    </>
  );
};

export default Header;
