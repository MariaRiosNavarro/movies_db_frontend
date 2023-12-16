import Star from "./Star";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = (props) => {
  const searchFilm = () => {
    console.log("search");
  };
  return (
    <>
      <header className="bg-bgColor_darkgreen">
        <nav className="flex justify-between items-center p-8">
          <div className="flex justify-between items-center gap-[64px]">
            <Link to="/">
              <h1 className="text-[50px] font-bold text-primaryColor_green hover:text-accentColor_yellow">
                MMDb
              </h1>
            </Link>
            <Link to="/favorites">
              <Star />
            </Link>
          </div>
          <div className="flex gap-[36px] items-center justify-center">
            <input
              className="border bg-transparent rounded-[50px] w-[511px] h-[61px] border-primaryColor_green py-[8px] px-[29px] text-primaryColor_green placeholder-primaryColor_green hover:border-accentColor_yellow"
              type="text"
              placeholder="e.g The Godfather"
            />
            <Button onClick={searchFilm} name="Submit" />
          </div>
          <Link
            className="text-primaryColor_green text-[25px] hover:text-accentColor_yellow"
            to="/add"
          >
            Add your own
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
