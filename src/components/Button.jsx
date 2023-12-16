const Button = (props) => {
  return (
    <button
      className="btn bg-primaryColor_green rounded-[50px] text-[30px] h-[61px] px-[50px] hover:bg-transparent hover:border-primaryColor_green hover:text-accentColor_yellow"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
