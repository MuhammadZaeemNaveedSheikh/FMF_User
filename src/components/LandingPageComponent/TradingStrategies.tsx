import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography } from "@mui/material";

import AboutIcon1 from "/Images/checkMark.png";
import AboutIcon2 from "/Images/about-icon-alt.png";
import AboutImage from "/Images/copy-trade.png";

import { stylesMui } from "./styles";

const TradingStrategies = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center font-[Poppins]">
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>
            Choose from our
          </Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            3 Trading Strategies
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            We picked and choose 3 of our best trading strategies with the
            lowest risk, aiming for 1-5% monthly profit.
          </Typography>
        </div>
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 mb-6 md:mb-8 flex flex-wrap w-full justify-center gap-4 lg:gap-8 overflow-hidden"
        id="about-cards"
      >
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-center items-start gap-4 rounded-3xl bg-[#131119]
           `}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <img src={AboutIcon1} alt="about icon" className="object-cover" />
          <h3 className="font-bold text-[21px] text-[#F4F6FF]">
            CC NovaStar Algo
          </h3>
          <p className="text-[15px] text-[#CFD4FFA3]">
            A.I-Based Trading Algorithm designed for hedge funds and financial
            institutions seeking a low-risk strategy. This Algorithm trades 8
            forex pairs, diversifying its risk, to perform well through high
            impacts news.
          </p>
          <button className="h-[46.45px] text-white bg-[#5B1CD4] rounded-full w-full font-semibold text-[15px]">
            Learn More
          </button>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-center items-start gap-4 rounded-3xl bg-[#131119]
           `}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card2"
        >
          <img src={AboutIcon1} alt="about icon" className="object-cover" />
          <h3 className="font-bold text-[21px] text-[#F4F6FF]">
            CC LSFX SMC Algo
          </h3>
          <p className="text-[15px] text-[#CFD4FFA3]">
            This algorithm was able to perform with stellar risk management.
            This institutional-level algorithm is the perfect solution for
            risk-averse investors, looking for an above-average sharp ratio.
          </p>
          <button className="h-[46.45px] text-white bg-[#5B1CD4] rounded-full w-full font-semibold text-[15px]">
            Learn More
          </button>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-center items-start gap-4 rounded-3xl bg-[#131119]
           `}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card3"
        >
          <img src={AboutIcon1} alt="about icon" className="object-cover" />
          <h3 className="font-bold text-[21px] text-[#F4F6FF]">
            CC Diversified Algo
          </h3>
          <p className="text-[15px] text-[#CFD4FFA3]">
            This Algorithm blends two flagship products, trading 8 forex pairs
            designed to diversify the trading strategies not only in terms of
            asset classes being traded, but rather in execution style.
          </p>
          <button className="h-[46.45px] text-white bg-[#5B1CD4] rounded-full w-full font-semibold text-[15px]">
            Learn More
          </button>
        </div>
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 mb-12 md:mb-[8.19rem] flex flex-wrap w-full justify-center gap-4 lg:gap-8 overflow-hidden"
        id="about-cards-expanded"
      >
        <div
          className={`w-full min-h-[303.5px] md:w-[47%] mb-4 md:mb-0 p-8 flex flex-col justify-center items-start rounded-3xl bg-[#131119]
           `}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="2xl:flex">
            <div>
              <img src={AboutIcon2} alt="about icon" className="object-cover" />
              <h3 className="font-bold text-[21px] text-[#F4F6FF] my-2">
                Let The Pros Do the Work
              </h3>
              <p className="text-[15px] text-[#CFD4FFA3]">
                Advanced AI Trading technology harnesses the power of Expert
                Traders and Artificial intelligence algorithms (A.i) to execute
                trades autonomously based on predefined criteria, market
                analysis, and historical data.
              </p>
            </div>
            <img src={AboutImage} alt="about icon" className="mt-2 2xl:mt-0" />
          </div>
        </div>
        <div
          className={`w-full min-h-[303.5px] md:w-[47%] mb-4 md:mb-0 p-8 flex flex-col justify-center items-center gap-4 rounded-3xl bg-[#131119]
           `}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <h3 className="font-bold text-[21px] text-[#F4F6FF]">
            <span className="text-[68px] font-semibold text-[#5B1CD4]">6+</span>
            Years Trading History
          </h3>
          <p className="text-[15px] text-[#CFD4FFA3]">
            Available via FXBooks & ForexFactory
          </p>
        </div>
      </div>
    </section>
  );
};

export default TradingStrategies;
