import { useState } from "react";
import { convertTimeToSeconds } from "../utils/timeconvert";

const MovieForm = () => {
  const [message, setMessage] = useState("");
  const [useFile, setUseFile] = useState(false);
  const [formData, setFormData] = useState({
    movieTitle: "",
    movieReleaseYear: "",
    movieRuntime: "",
    movieRating: "",
    movieVoteCount: "",
    movieLanguage: "",
    movieImage: "",
    movieDescription: "",
    movieGenres: [],
  });

  //Handle Files

  const handleFile = (e) => {
    const file = e.target.files[0];
    console.log("Selected File:", file);
    setFormData({ ...formData, movieImage: file });
  };

  //handle Genres
  const handleGenreChange = (event) => {
    const selectedGenres = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setFormData({
      ...formData,
      movieGenres: selectedGenres,
    });
  };

  const transformToGenreObjects = (selectedGenres) => {
    return selectedGenres.map((genre) => ({ text: genre }));
  };

  //Handle SAVE

  const saveNewMovie = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("movieTitle", formData.movieTitle);
    formDataToSend.append("movieReleaseYear", formData.movieReleaseYear);
    if (useFile) {
      formDataToSend.append("movieImage", formData.movieImage);
    }
    // Convert time to seconds before saving to the database
    const movieRuntimeInSeconds = convertTimeToSeconds(formData.movieRuntime);
    formDataToSend.append("movieRuntime", movieRuntimeInSeconds);
    formDataToSend.append("movieRating", formData.movieRating);
    formDataToSend.append("movieVoteCount", formData.movieVoteCount);
    formDataToSend.append("movieLanguage", formData.movieLanguage);
    formDataToSend.append("movieDescription", formData.movieDescription);
    //genres
    const genreObjects = transformToGenreObjects(formData.movieGenres);
    formDataToSend.append("movieGenres", JSON.stringify(genreObjects));

    //Dynamical Header
    const headers = useFile
      ? {} //for form with files
      : {
          "Content-Type": "application/json", // for form without files
        };

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL + "/api/movies",
        {
          method: "POST",
          headers: headers,
          body: useFile ? formDataToSend : JSON.stringify({ ...formData }),
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
      console.error("Error Message-------->", error);
    }
  };

  return (
    <section className="flex flex-col gap-4 min-w-[70%] mx-auto my-0 pb-[10rem]">
      <h3 className="min-w-[70%] mx-auto my-0 text-4xl text-secondaryColor_red">
        Add your own movies
      </h3>
      <form
        onSubmit={saveNewMovie}
        className="flex flex-col gap-4 min-w-[70%] mx-auto my-0 "
      >
        {/* --------------------------------------title */}
        <input
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4  pl-8 border placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest"
          type="text"
          placeholder="Title"
          name="movieTitle"
          id="movieTitle"
          value={formData.movieTitle}
          onChange={(e) =>
            setFormData({ ...formData, movieTitle: e.target.value })
          }
          required
        />
        {/* --------------------------------------year */}
        <input
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          type="number"
          name="movieReleaseYear"
          id="movieReleaseYear"
          placeholder="Release Year"
          value={formData.movieReleaseYear}
          onChange={(e) =>
            setFormData({ ...formData, movieReleaseYear: e.target.value })
          }
        />

        {/* --------------------------------------runtime */}
        <input
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4  pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest"
          type="time"
          name="movieRuntime"
          id="movieRuntime"
          value={formData.movieRuntime}
          placeholder="Duration"
          onChange={(e) =>
            setFormData({ ...formData, movieRuntime: e.target.value })
          }
        />
        {/* --------------------------------------Rating */}
        <input
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest"
          type="number"
          name="movieRating"
          id="movieRating"
          placeholder="Rating"
          value={formData.movieRating}
          onChange={(e) =>
            setFormData({ ...formData, movieRating: e.target.value })
          }
        />
        {/* --------------------------------------VoteCount*/}
        <input
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          type="number"
          name="movieVoteCount"
          id="movieVoteCount"
          value={formData.movieVoteCount}
          placeholder="Votes"
          onChange={(e) =>
            setFormData({ ...formData, movieVoteCount: e.target.value })
          }
        />
        {/* --------------------------------------Language*/}
        <input
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest"
          type="text"
          name="movieLanguage"
          id="movieLanguage"
          placeholder="Language"
          value={formData.movieLanguage}
          onChange={(e) =>
            setFormData({ ...formData, movieLanguage: e.target.value })
          }
        />

        {/* --------------------------------------Image Type */}
        <div className=" flex justify-center items-center gap-4 p-4">
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
        {/* --------------------------------------Image */}
        {useFile ? (
          <div className="flex justify-center items-center gap-4 p-4">
            <h4 className="text-2xl text-primaryColor_green">Upload File:</h4>
            <input
              className="file-input text-primaryColor_green file-input-bordered file-input-success w-full max-w-xs "
              type="file"
              name="movieImage"
              id="movieImage"
              placeholder="PNG or JPG for Poster"
              onChange={(e) => handleFile(e)}
            />
          </div>
        ) : (
          <div className="flex justify-center items-center gap-4 p-4">
            <h4 className="text-2xl text-primaryColor_green">Enter URL:</h4>
            <input
              className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8  border min-w-[70%]  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest"
              type="text"
              name="movieImage"
              value={formData.movieImage}
              id="movieImage"
              placeholder="URL for Poster"
              onChange={(e) =>
                setFormData({ ...formData, movieImage: e.target.value })
              }
            />
          </div>
        )}

        {/* --------------------------------------Description*/}
        <textarea
          className="rounded-[50px] bg-transparent border-primaryColor_green p-4 pl-8 border  placeholder:text-primaryColor_green placeholder:text-xl placeholder:font-bold placeholder:tracking-widest "
          type="text"
          name="movieDescription"
          id="movieDescription"
          rows={5}
          value={formData.movieDescription}
          placeholder="Description"
          onChange={(e) =>
            setFormData({ ...formData, movieDescription: e.target.value })
          }
        />
        {/*-------------- Multi-select dropdown for genres */}
        <h4 className="text-2xl text-primaryColor_green text-center">
          Choose Genres:
        </h4>
        <select
          multiple
          className="h-auto  border-primaryColor_green flex flex-col justify-center items-center gap-4 rounded-3xl "
          name="movieGenres"
          id="movieGenres"
          value={formData.movieGenres}
          onChange={handleGenreChange}
        >
          <option
            className="bg-primaryColor_green text-bgColor_darkgreen pb-4 pl-8 text-2xl  text-center  border-b-bgColor_darkgreen border-b-[3px]  hover:text-accentColor_yellow"
            value="comedy"
          >
            Comedy
          </option>
          <option
            className="bg-primaryColor_green text-bgColor_darkgreen pb-4 pl-8 text-2xl  text-center  border-b-bgColor_darkgreen border-b-[3px]  hover:text-accentColor_yellow"
            value="drama"
          >
            Drama
          </option>
          <option
            className="bg-primaryColor_green text-bgColor_darkgreen pb-4 pl-8 text-2xl text-center  border-b-bgColor_darkgreen border-b-[3px]  hover:text-accentColor_yellow"
            value="horror"
          >
            Horror
          </option>
          <option
            className="bg-primaryColor_green text-bgColor_darkgreen pb-4 pl-8 text-2xl text-center  border-b-bgColor_darkgreen border-b-[3px]  hover:text-accentColor_yellow"
            value="science-fiction"
          >
            Science-fiction
          </option>
          <option
            className="bg-primaryColor_green text-bgColor_darkgreen pb-4 pl-8 text-2xl   text-center  border-b-bgColor_darkgreen border-b-[3px]  hover:text-accentColor_yellow"
            value="sport"
          >
            Sport
          </option>
          <option
            className="bg-primaryColor_green text-bgColor_darkgreen pb-4 pl-8 text-2xl text-center border-b-bgColor_darkgreen border-b-[3px] hover:text-accentColor_yellow"
            value="fantasy"
          >
            Fantasy
          </option>
        </select>
        {message && (
          <div className="p-4 bg-secondaryColor_red flex justify-center rounded-3xl">
            <p className="text-2xl">{message}</p>
          </div>
        )}
        <input
          type="submit"
          value="Save"
          className="btn text-3xl bg-primaryColor_green text-bgColor_darkgreen rounded-[50px] p-4 h-auto cursor-pointer hover:bg-transparent hover:border-primaryColor_green hover:text-accentColor_yellow"
        />
      </form>
    </section>
  );
};

export default MovieForm;
