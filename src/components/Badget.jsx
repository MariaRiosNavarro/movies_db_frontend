const Badget = (props) => {
  const getColorClass = () => {
    if (props.svg) {
      return "bg-transparent border-accentColor_yellow text-accentColor_yellow";
    } else {
      return "bg-transparent border-primaryColor_green text-primaryColor_green";
    }
  };

  return (
    <div
      onClick={props.onClick}
      className={`btn border rounded-[50px] px-[1.5rem] ${getColorClass()}`}
    >
      {props.svg && <img src={props.svg} alt="icon" />}
      <p>{props.text}</p>
    </div>
  );
};

export default Badget;
