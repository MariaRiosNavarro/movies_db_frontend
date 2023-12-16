import MovieItem from "./MovieItem";

const MoviesList = (props) => {
  const { array, arrayType } = props;

  return (
    <ul className="grid grid-cols-3 gap-[5rem]">
      {array.map((item) => (
        <MovieItem key={item._id} {...item} arrayType={arrayType} />
      ))}
    </ul>
  );
};

export default MoviesList;
