import FacebookSvg from "./svg/FacebookSvg";
import YoutubeSvg from "./svg/YoutubeSvg";
import HearthSvg from "./svg/HearthSvg";

const Footer = () => {
  return (
    <footer className="bg-primaryColor_green h-[10rem] px-[10rem] flex justify-around items-center">
      <div className="flex justify-around items-center gap-[5rem] ">
        <h3 className="text-3xl text-bgColor_darkgreen">Imprint</h3>
        <div className="flex justify-center items-center gap-[1.5rem]">
          <h3 className="text-3xl text-bgColor_darkgreen ">
            Made with love in heart and popcorn in tummy.
          </h3>
          <HearthSvg />
        </div>
        <div className="flex justify-center items-center gap-[1.5rem] h-[100%]">
          <YoutubeSvg />
          <FacebookSvg />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
