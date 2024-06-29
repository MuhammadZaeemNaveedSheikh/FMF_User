import { TextField } from "@mui/material";

import Logo from "../../assets/images/riskcardLogo.png";
import InfoIcon from "../../assets/icons/InfoIcon";

const CTACouponCard = () => {
  return (
    <div>
      {" "}
      {/* <div className="w-[302px] xl:w-[409px] min-h-[669px] py-2 px-4 bg-[#131119] rounded-[14px] text-white border border-[#252525]"> */}
      <div className="min-h-[669px] px-4 bg-[#131119] rounded-[14px] text-white border border-[#252525]">
        <div className="flex justify-center">
          <img src={Logo} alt="fully managed funded" />
        </div>

        <div className="flex gap-2 items-center">
          <p className="mt-2 font-[Inter] font-bold text-[15.25px] text-start">
            Available Add-ons
          </p>
          <InfoIcon />
        </div>
        <p className="mt-2 font-[Rubik] font-normal text-[16px] text-start">
          80/20 Profit Split (+10%)
        </p>
        <br />

        <p className="font-[Rubik] font-normal text-[16px] text-start">
          Coupon Code
        </p>
        <div className="flex flex-wrap lg:flex-nowrap gap-2 items-center">
          <TextField
            id="coupon-code"
            type="text"
            name="coupon"
            placeholder="Coupon Code"
            inputProps={{
              style: {
                height: "0.6rem",
              },
            }}
          />
          <button className="bg-[#5B1CD4] rounded-lg w-[118px] h-[44px] font-[Rubik] font-semibold text-[16px] text-center">
            Apply
          </button>
        </div>
        <br />

        <h2 className="font-[Rubik] font-medium text-[24px] text-start">
          FMF $800k Account
        </h2>
        <br />
        <p className="font-[Rubik] font-normal text-[16px] text-start text-[#93A1A6]">
          The Challenge is your initial Steps to becoming an FMF Trader. Prove
          your trading skills, hit the profit target, and showcase responsible
          risk management.
        </p>
        <br />

        <div className="mb-6 flex gap-4 justify-between flex-wrap lg:flex-nowrap">
          <button className="bg-[#5B1CD4] rounded-lg w-[223px] h-[50px] font-[Rubik] font-semibold text-[16px] text-center mt-5">
            Get Funded
          </button>
          <div>
            <div className="flex gap-2">
              <h2 className="line-through font-[Rubik] font-medium text-[24px] text-start text-[#93A1A6]">
                $190k
              </h2>

              <h2 className="font-[Rubik] font-normal text-[24px] text-start">
                $120k
              </h2>
            </div>
            <p className="font-[Rubik] font-normal text-[16px] text-start text-[#93A1A6]">
              For $80K Account
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTACouponCard;
