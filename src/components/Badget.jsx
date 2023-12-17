const Badget = (props) => {
  const getDinamicalClass = () => {
    if (props.svg) {
      return "min-w-auto  flex justify-between no-wrap bg-transparent border-accentColor_yellow text-accentColor_yellow hover:bg-accentColor_yellow hover:text-bgColor_darkgreen";
    } else {
      return "bg-transparent border-primaryColor_green text-primaryColor_green hover:bg-primaryColor_green hover:text-accentColor_yellow";
    }
  };

  return (
    <div
      onClick={props.onClick}
      className={`btn border rounded-[50px] px-[1.5rem] ${getDinamicalClass()}`}
    >
      {props.svg && (
        <img className="relative left-[-1rem]" src={props.svg} alt="icon" />
      )}
      <p>{props.text}</p>
    </div>
  );
};

export default Badget;
