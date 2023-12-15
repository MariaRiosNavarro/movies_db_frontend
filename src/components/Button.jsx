const Button = (props) => {
  return (
    <button
      className="btn bg-[#2A9D8F] rounded-[50px] text-[30px] h-[61px] px-[50px] hover:bg-transparent hover:border-[#2A9D8F] hover:text-[#E9C46A]"
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
