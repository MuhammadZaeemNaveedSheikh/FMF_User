import React from "react";

const GetAppTraditional: React.FC = () => {
  return (
    <section className="w-full px-12 lg:px-28 flex flex-wrap lg:flex-nowrap justify-center lg:justify-between">
      <div className="">
        <h2 className="font-[Poppins] font-bold text-[46px] text-start my-5">
          Keep Track and Follow with MetaTrader 5
        </h2>
        <img src="/Images/rating-text.png" alt="" className="my-5" />
        <button className="bg-gradient-to-r from-[#8B4DFB] to-[#0AB2FF] w-[212px] py-4 rounded-full text-sm font-[Inter] text-[13.5px] my-5">
          Download MT5
        </button>
      </div>
      <div className="flex flex-col justify-center">
        <img src="/Images/steps-app-download.png" alt="" />
        <img
          src="/Images/google-play-button.png"
          alt=""
          className="mt-4 cursor-pointer w-[200px]"
        />
      </div>
    </section>
  );
};

export default GetAppTraditional;
