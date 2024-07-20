import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography } from "@mui/material";

import AboutIcon1 from "/Images/about-icon-1.png";
import AboutIcon2 from "/Images/about-icon-2.png";

import { stylesMui } from "./styles";

const AboutCards = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>About</Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Fully Managed Funded
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Our institutional grade trading strategies earn residual income for
            all.
          </Typography>
        </div>
      </div>

      <div
        className="px-4 md:px-8 lg:px-20 mb-12 md:mb-[8.19rem] flex flex-wrap w-full justify-center gap-4 lg:gap-8 overflow-hidden"
        id="about-cards"
      >
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-3xl bg-[#131119]
           `}
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card1"
        >
          <div className="flex gap-2">
            <img src={AboutIcon1} alt="about icon" className="object-cover" />
            <Typography sx={stylesMui.aboutHeadings}>
              Transparent Profit Sharing
            </Typography>
          </div>
          <Typography sx={{ ...stylesMui.aboutCardText, color: "#8F9BB7" }}>
            70% of trading profit go to the client, 20% to the trading team, and
            10% to the brokerage and liquidity providers each month.
          </Typography>
        </div>
        <div
          className={`w-full md:w-[30%] mb-4 md:mb-0 p-8 flex flex-col justify-start items-start gap-4 rounded-3xl bg-[#131119]
           `}
          data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          id="about-card2"
        >
          <div className="flex gap-2">
            <img src={AboutIcon2} alt="about icon" className="object-cover" />
            <Typography sx={stylesMui.aboutHeadings}>
              15% Upfront Licensing Fees
            </Typography>
          </div>
          <Typography sx={{ ...stylesMui.aboutCardText, color: "#8F9BB7" }}>
            10% funds your account and 5% licensing are automated trading
            algorithms.
          </Typography>
        </div>
      </div>
    </section>
  );
};

export default AboutCards;
