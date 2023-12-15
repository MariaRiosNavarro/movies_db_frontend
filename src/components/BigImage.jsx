const BigImage = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/img/cinema.jpeg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold relative top-[-9rem] text-[#A16171]">
            MovieMagicDatabase has it all.
            <span className="block">
              But you can still
              <span className="text-[#283A45] drop-shadow-[2px_2px_2px_rgba(161,97,113,1)] mx-4 ">
                add
              </span>
              to it.
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BigImage;
