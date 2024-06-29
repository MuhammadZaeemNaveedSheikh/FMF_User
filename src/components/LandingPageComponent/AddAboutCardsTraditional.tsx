import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography, useTheme } from "@mui/material";

import AboutIcon1 from "../../assets/images/landing/aboutIcon1.svg";
import AboutIcon2 from "../../assets/images/landing/aboutIcon2.svg";
import AboutIcon3 from "../../assets/images/landing/aboutIcon3.svg";
import AboutIcon4 from "../../assets/images/landing/aboutIcon4.svg";
import AboutIcon5 from "../../assets/images/landing/aboutIcon5.svg";
import AboutIcon6 from "../../assets/images/landing/aboutIcon6.svg";

import { stylesMui } from "./styles";

const AddAboutCardsTraditional = () => {
  const theme = useTheme();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        className="px-4 md:px-8 lg:px-20 mb-12 md:mb-[8.19rem] flex flex-col flex-wrap md:flex-row w-full justify-between gap-8 overflow-hidden"
        id="about-cards"
      >
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-[#131119]" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon1} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              5% Max Daily Drawdown
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-[#131119]" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card2"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon2} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              10% Total Account Loss
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-[#131119]" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card3"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon3} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              Trades Can Be Hold Over The Weekend
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-[#131119]" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card4"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon4} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              No Data/News Trading Restrictions
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-[#131119]" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card5"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon5} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              No Minimum Trading Days
            </Typography>
          </div>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-lg ${
            theme.palette.mode === "light" ? "bg-[#131119]" : "bg-white"
          } bg-opacity-5`}
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card6"
        >
          <div className="mb-3 md:mb-6">
            <img src={AboutIcon6} alt="about icon" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[0.62rem]">
            <Typography sx={stylesMui.aboutHeadings}>
              Withdraw Funds Monthly
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddAboutCardsTraditional;
