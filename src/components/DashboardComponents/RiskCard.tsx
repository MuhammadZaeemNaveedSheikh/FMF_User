import React from "react";
import { Card } from "@mui/material";

import Star from "../../assets/images/riskStar.png";

const RiskCard = () => {
  return (
    <Card
      sx={{
        width: { md: 302, xl: 409 },
        p: 2,
        borderRadius: "14px",
        backgroundColor: "#131119",
        border: "1px solid #252525",
      }}
    >
      <h2 className="font-[Rubik] font-medium text-[24px] text-start">
        Risk Disclaimer
      </h2>
      <img
        src={Star}
        alt="start"
        width={12}
        height={12}
        className="relative top-4 right-2"
      />
      <p className="pl-2 font-[Rubik] font-normal text-[16px] text-start text-[#93A1A6]">
        We refrain from actively soliciting clients residing in the USA, UK, and
        Canada.
      </p>
      <div>
        <button className="bg-[#5B1CD4] rounded-lg w-[223px] h-[36px] font-[Rubik] font-semibold text-[16px] text-center mt-5">
          Read More
        </button>
      </div>
    </Card>
  );
};

export default RiskCard;
