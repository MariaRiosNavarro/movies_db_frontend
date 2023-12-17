const Button = (props) => {
  return (
    <button
      className="btn bg-primaryColor_green rounded-[50px] text-2xl  labtop:text-3xl h-[61px] px-[50px] hover:bg-transparent hover:border-primaryColor_green hover:text-accentColor_yellow labtop:w-[250px] tablet:w-[150px]"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
