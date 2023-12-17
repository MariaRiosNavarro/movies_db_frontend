import Button from "./Button";
import { Link } from "react-router-dom";
import StarSvg from "./svg/StarSvg";

const Header = (props) => {
  const searchFilm = () => {
    console.log("search");
  };

  return (
    <>
      <header className="bg-bgColor_darkgreen p-4 tablet:p-10 min-w-[100vw]">
        <nav className="container  mx-auto flex flex-col  items-center justify-between tablet:gap-[3%] tablet:flex-row bigdesktop:max-w-[1440px] bigdesktop:mx-auto bigdesktop:my-0 tablet:px-0 tablet:mx-0 ">
          <div className="flex justify-between items-center gap-4">
            <Link to="/">
              <h1 className="text-2xl tablet:text-3xl  desktop:text-4xl font-bold text-primaryColor_green hover:text-accentColor_yellow ">
                MMDb
              </h1>
            </Link>
            <Link to="/favorites">
              <StarSvg />
            </Link>
          </div>

          <div className="mt-4 tablet:mt-0 flex flex-col  gap-4 tablet:flex-row  tablet:gap-8 items-center justify-center">
            <input
              className="border bg-transparent rounded-full desktop:w-[511px] labtop:w-[20%]  h-[61px] border-primaryColor_green py-2 px-4 text-primaryColor_green placeholder-primaryColor_green hover:border-accentColor_yellow"
              type="text"
              placeholder="e.g The Godfather"
            />
            <Button onClick={searchFilm} name="Submit" />
          </div>

          <Link
            className="mt-4 tablet:mt-0 text-primaryColor_green text-lg tablet:text-2xl desktop:text-3xl hover:text-accentColor_yellow min-w-fit"
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
