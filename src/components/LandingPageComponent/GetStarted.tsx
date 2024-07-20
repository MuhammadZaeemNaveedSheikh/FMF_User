import React from "react";
import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const getStartedSteps = [
  {
    title: "Step 1 - Sign Up",
    description:
      "Sign up via our main website www.fullynamgedfunded.com or an affiliate referral link.",
    logoSrc: "/Images/sign-up.png",
  },
  {
    title: "Step 2 - Get Verified",
    description:
      "Complete KYC and earn by sharing your referral link = Verify your account by completing the KYC/KYB process (upload government issued photo I.D. and proof of address).",
    logoSrc: "/Images/trophy.png",
  },
  {
    title: "Step 3 - Fund Your Account",
    description:
      "Found your account via crypto currency (USDT/BTC/ETH) in order to be able to purchase an account package.",
    logoSrc: "/Images/trophy.png",
  },
  {
    title: "Step 4 - Choose & Purchase a Package",
    description:
      "Choose and purchase a FMF account package. We have accounts ranging from $10,000 to $10,000,000 at the low cost",
    logoSrc: "/Images/menu.png",
  },
  {
    title: "Step 5 - Earn Passive Income",
    description:
      "Earn passive income from a fully managed automated trading account and refer others to do the same via your affiliate referral link.",
    logoSrc: "/Images/graph.png",
  },
];

const GetStarted: React.FC = () => {
  return (
    <section className="w-full px-12 lg:px-28">
      <div className="mb-7 md:mb-11" id="text-section">
        <div className="w-full text-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>How To Get</Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Started
          </Typography>
          <Typography sx={stylesMui.bodyText}>5 Easy Steps:</Typography>
        </div>
      </div>
      <div className="font-[Poppins] w-full">
        {getStartedSteps.map((method, index) => (
          <div
            key={index}
            className="flex justify-center md:justify-start items-center gap-8 my-4"
          >
            <img
              src={method.logoSrc}
              alt="icon"
              className="h-[28px] cursor-pointer"
            />
            <div className="flex flex-col justify-between">
              <h3 className="text-[18px] font-semibold">{method.title}</h3>
              <p className="text-[#C0C0C0] text-[14px]">{method.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GetStarted;
