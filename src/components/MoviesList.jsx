import MovieItem from "./MovieItem";

const MoviesList = (props) => {
  const { array, arrayType } = props;

  return (
    <ul className="grid desktop:grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1 gap-[5rem]">
      {array?.map((item) => (
        <MovieItem key={item._id} {...item} arrayType={arrayType} />
      ))}
    </ul>
  );
};

export default MoviesList;
