import { useState, useEffect, useRef } from "react";

const Edit = ({ movie }) => {
  //   const [useFile, setUseFile] = useState(false);
  const [message, setMessage] = useState(null);

  const movieTitleRef = useRef();
  const movieReleaseYearRef = useRef();
  const movieRuntimeRef = useRef();
  const movieRatingRef = useRef();
  const movieVoteCountRef = useRef();
  const movieLanguageRef = useRef();
  const movieDescriptionRef = useRef();
  //   const movieImageRef = useRef();

  //   //Handle Files

  //   let file;

  //   const handleFile = (e) => {
  //     file = e.target.files[0];
  //     return file;
  //   };

  const editMovie = async () => {
    const form = new FormData();

    form.append("movieTitle", movieTitleRef.current.innerText);
    form.append("movieReleaseYear", movieReleaseYearRef.current.innerText);
    form.append("movieRuntime", movieRuntimeRef.current.innerText);
    form.append("movieRating", movieRatingRef.current.innerText);
    form.append("movieVoteCount", movieVoteCountRef.current.innerText);
    form.append("movieLanguage", movieLanguageRef.current.innerText);
    form.append("movieDescription", movieDescriptionRef.current.innerText);
    const updateMovieData = Object.fromEntries(form);
    //   // Append movieImage only if it exists (not undefined)
    //   if (movieImageRef.current && movieImageRef.current.files.length > 0) {
    //     form.append("movieImage", movieImageRef.current.files[0]);
    //   }

    // //Dynamical Header
    // const headers = useFile
    //   ? {} //for form with files
    //   : {
    //       "Content-Type": "application/json", // for form without files
    //     };

    const headers = { "Content-Type": "application/json" };
    console.log(updateMovieData);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/movies/" + movie._id,
        {
          method: "PUT",
          headers: headers,
          body: JSON.stringify(updateMovieData),
          //   body: useFile ? form : JSON.stringify({ ...form }),
        }
      );
      const result = await response.json();
      if (!response.ok) {
        // Toast
        setMessage(result.message);
        setTimeout(() => {
          setMessage("");
        }, 4000);
        throw new Error("Network response was not ok");
      } else {
        // Toast
        setMessage(result.message);
        setTimeout(() => {
          setMessage("");
        }, 4000);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <article className="p-[10rem]">
      <h1 className="py-8 text-secondaryColor_red text-3xl font-bolder">
        Edit Your Film
      </h1>
      <div className="flex flex-col gap-4">
        {/* --------------------------------------title */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieTitleRef}
          contentEditable
        >
          {movie.movieTitle}
        </p>
        {/* --------------------------------------year */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieReleaseYearRef}
          contentEditable
        >
          {movie.movieReleaseYear}
        </p>
        {/* --------------------------------------runtime */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieRuntimeRef}
          contentEditable
        >
          {movie.movieRuntime}
        </p>
        {/* --------------------------------------Rating */}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieRatingRef}
          contentEditable
        >
          {movie.movieRating}
        </p>
        {/* --------------------------------------VoteCount*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieVoteCountRef}
          contentEditable
        >
          {movie.movieVoteCount}
        </p>
        {/* --------------------------------------Language*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieLanguageRef}
          contentEditable
        >
          {movie.movieLanguage}
        </p>
        {/* --------------------------------------Image */}
        {/* <div className=" flex justify-center items-center gap-4 p-4">
          <h4 className="text-2xl text-primaryColor_green">
            Choose Image Type:
          </h4>
          <label className="flex justify-center items-center">
            <input
              className="toggle toggle-success"
              type="checkbox"
              checked={useFile}
              onChange={(e) => setUseFile(e.target.checked)}
            />
            <span className="text-2xl text-primaryColor_green pl-4">
              Use File
            </span>
          </label>
        </div>
        {useFile ? (
          <div className="flex justify-center items-center gap-4 p-4">
            <h4 className="text-2xl text-primaryColor_green">Upload File:</h4>
            <input
              className="file-input text-primaryColor_green file-input-bordered file-input-success w-full max-w-xs "
              type="file"
              name="movieImage"
              ref={movieImageRef}
              id="movieImage"
              placeholder="PNG or JPG for Poster"
              onChange={(e) => handleFile(e)}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4 p-4">
            <h4 className="text-2xl text-primaryColor_green">Enter URL:</h4>
            <p
              className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8  border min-w-[70%]  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest"
              ref={movieImageRef}
              contentEditable
            />
          </div>
        )} */}
        {/* --------------------------------------Description*/}
        <p
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          ref={movieDescriptionRef}
          contentEditable
        >
          {movie.movieDescription}
        </p>

        {/*-------------- TODO: edit genres->for now no genres */}

        {/* <div>
          {props.genres.map((genre, index) => (
            <span
              className="btn bg-primaryColor_green pr-4"
              ref={genre.text}
              key={index}
            >
              {genre.text}
            </span>
          ))}
        </div> */}

        {/*--------------- message */}
        {message && (
          <div className="p-4 bg-secondaryColor_red flex justify-center rounded-3xl">
            <p className="text-2xl">{message}</p>
          </div>
        )}
        <input
          type="submit"
          onClick={editMovie}
          className="btn text-3xl bg-primaryColor_green text-bgColor_darkgreen rounded-[50px] p-4 h-auto cursor-pointer hover:bg-transparent hover:border-primaryColor_green hover:text-accentColor_yellow"
        />
      </div>
    </article>
  );
};

export default Edit;
