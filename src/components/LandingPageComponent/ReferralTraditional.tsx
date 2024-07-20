import React from "react";
import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const ReferralTraditional: React.FC = () => {
  return (
    <section className="w-full px-12 lg:px-28">
      <div className="mb-7 md:mb-11" id="text-section">
        <div className="w-full text-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>
            Join our Exclusive Affiliate Program
          </Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Refer Your Friends!
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            Earn up to 10% of the net profits on two levels.
          </Typography>
        </div>
      </div>
      <div className="font-[Poppins] w-full bg-[#131119] rounded-[10px] flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-4">
        <div
          id="text-left"
          className="lg:w-[47%] flex flex-col justify-center px-12"
        >
          <h2 className="text-[36px] font-bold mb-4">Two Level Program</h2>
          <p className="text-lg text-[#96989B] font-bold mb-4">
            Refer A Friend And Enjoy Passive Income Rewards!
          </p>
          <p className="mb-4 font-semibold text-[15px]">
            Our affiliate program is paid out from the following revenues:
          </p>
          <ul className="mb-4 space-y-2">
            <li className="flex items-start">
              <span className="text-[#8B4DFB] mr-2">›</span>
              <p className="font-semibold text-[15px]">
                5% upfront licensing fee (as 10% goes directly towards margining
                the trading account)
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-[#8B4DFB] mr-2">›</span>
              <p className="font-semibold text-[15px]">
                20% trading fees (as 10% goes directly towards paying the
                fxbroker and liquidity provider costs)
              </p>
            </li>
          </ul>
          <p className="mb-4 font-semibold text-[15px]">
            Our affiliate program pays out on two levels:
          </p>
          <ul className="space-y-2">
            <li className="flex items-start">
              <span className="text-[#8B4DFB] mr-2">›</span>
              <p className="font-semibold text-[15px]">Level 1 = 10%</p>
            </li>
            <li className="flex items-start">
              <span className="text-[#8B4DFB] mr-2">›</span>
              <p className="font-semibold text-[15px]">Level 2 = 10%</p>
            </li>
          </ul>
        </div>
        <div id="image">
          <img
            src="/Images/referral-image.png"
            alt="referral"
            className="h-[275px] lg:h-[509px]"
          />
        </div>
      </div>
    </section>
  );
};

export default ReferralTraditional;
