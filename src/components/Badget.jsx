const Badget = (props) => {
  return (
    <div
      onClick={props.onClick}
      className={`btn  border-${props.color} rounded-[50px] px-[1.5rem]`}
    >
      {props.svg && <img src={props.svg} alt="icon" />}
      <p>{props.text}</p>
    </div>
  );
};

export default Badget;
