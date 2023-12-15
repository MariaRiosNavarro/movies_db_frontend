import Star from "./Star";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = (props) => {
  const searchFilm = () => {
    console.log("search");
  };
  return (
    <>
      <header className="bg-[#283A45]">
        <nav className="flex justify-between items-center p-8">
          <div className="flex justify-between items-center gap-[64px]">
            <Link to="/">
              <h1 className="text-[50px] font-bold text-[#2A9D8F] hover:text-[#E9C46A]">
                MMDb
              </h1>
            </Link>
            <Link to="/favorites">
              <Star />
            </Link>
          </div>
          <div className="flex gap-[36px] items-center justify-center">
            <input
              className="border bg-transparent rounded-[50px] w-[511px] h-[61px] border-[#2a9d8f] py-[8px] px-[29px] text-[#2A9D8F] placeholder-[#2A9D8F] hover:border-[#E9C46A]"
              type="text"
              placeholder="e.g The Godfather"
            />
            <Button onClick={searchFilm} name="Submit" />
          </div>
          <Link
            className="text-[#2A9D8F] text-[25px] hover:text-[#E9C46A]"
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
