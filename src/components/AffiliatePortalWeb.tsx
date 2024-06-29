import { Typography, FormControl, TextField, useTheme } from "@mui/material";

import FinancialJourney from "./FinancialJourney";
import Fish from "/Icons/affiliate-fish.svg";

import { stylesMui } from "../pages/styles.js";
import LeaderboardComponent from "./LeaderboardComponent/LeaderboardComponent.js";

const AffiliatePortalWeb = () => {
  const theme = useTheme();

  return (
    <>
      <div className="w-full my-6 flex-wrap lg:flex-nowrap flex gap-4 justify-center px-12 lg:px-44">
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-5 bg-[#151322]">
          <h3 className="font-[Montserrat] text-[26px] font-medium">
            20% Trading Fees
          </h3>
          <p className="font-[Montserrat] text-[16px] font-medium text-[#646464]">
            (as 10% goes directly towards paying the fxbroker and liquidity
            provider costs) List Item
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-5 bg-[#151322]">
          <h3 className="font-[Montserrat] text-[26px] font-medium">
            5% upfront Licensing Fees
          </h3>
          <p className="font-[Montserrat] text-[16px] font-medium text-[#646464]">
            (as 10% goes directly towards margining the trading account)
          </p>
        </div>
      </div>
      <Typography sx={stylesMui.pageTitle}>
        Tiers <br /> <span className="text-[#5B1CD4]">Refer</span> And
        <span className="text-[#5B1CD4]"> Earn</span>
      </Typography>

      <div className="my-6 w-[94%] lg:w-[50%] mx-auto rounded-2xl cursor-pointer p-1 lg:p-5 bg-[#151322]">
        <Typography
          sx={{
            fontSize: { xs: 16, sm: 26 },
            color: theme.palette.mode === "light" ? "black" : "white",
          }}
        >
          Your Unique Link
        </Typography>

        <div className="flex flex-row gap-4 mt-4">
          <FormControl fullWidth>
            <TextField
              id="outlined-adornment-email-login"
              type="text"
              // value={values.email}
              name="text"
              // onBlur={handleBlur}
              // onChange={handleChange}
              placeholder="https://myfundedfx.tech/purchasechallenge/?sl=4469"
              inputProps={{
                style: {
                  height: "0.5rem",
                },
              }}
            />
          </FormControl>

          <button className=" bg-[#5B1CD4] text-white font-medium text-sm font-[Montserrat] cursor-pointer px-6 py-1 rounded-md">
            COPY
          </button>
        </div>
      </div>

      <div className="w-full my-6 flex-wrap lg:flex-nowrap flex gap-6 justify-center px-12 lg:px-80">
        <div
          className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-5 bg-[#151322]"
          style={{ boxShadow: "8px 4px 37px 0px #7676764D" }}
        >
          <h2 className="font-[Poppins] text-[48px] font-bold text-[#5B1CD4]">
            Level 1
          </h2>
          <h3 className="font-[Poppins] text-[40px] font-medium">10%</h3>
          <p className="flex font-[Poppins] text-[16px] font-medium text-[#646464]">
            <span className="flex gap-1 mr-1 text-[#5B1CD4] font-bold">
              <img src={Fish} alt="icon" />
              1-10
            </span>{" "}
            Referrals
          </p>
          <p className="flex font-[Poppins] text-[16px] font-medium text-[#646464]">
            <span className="flex gap-1 mr-1 text-[#5B1CD4] font-bold">
              <img src={Fish} alt="icon" />
              10%
            </span>
            Commission
          </p>
        </div>
        <div
          className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-5 bg-[#151322]"
          style={{ boxShadow: "8px 4px 37px 0px #7676764D" }}
        >
          <h2 className="font-[Poppins] text-[48px] font-bold text-[#5B1CD4]">
            Level 2
          </h2>
          <h3 className="font-[Poppins] text-[40px] font-medium">20%</h3>
          <p className="flex font-[Poppins] text-[16px] font-medium text-[#646464]">
            <span className="flex gap-1 mr-1 text-[#5B1CD4] font-bold">
              <img src={Fish} alt="icon" />
              Unlimited
            </span>{" "}
            Client Referrals
          </p>
          <p className="flex font-[Poppins] text-[16px] font-medium text-[#646464]">
            <span className="flex gap-1 mr-1 text-[#5B1CD4] font-bold">
              <img src={Fish} alt="icon" />
              20%
            </span>
            Commission
          </p>
        </div>
      </div>

      <section className="flex justify-center px-12 lg:px-32">
        <div className="my-6 w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-5 bg-[#151322] ">
          <h3 className="font-[Montserrat] text-[26px] font-medium capitalize">
            the 10% on both levels is paid form two revenue streams:
          </h3>
          <p className="font-[Montserrat] text-[16px] font-medium text-[#646464]">
            1 - From the 20% we keep formt he 30% per month which is 2% per
            level (as out liquidity provider / broker we pay them 10% of the 30%
            we bill)
          </p>
          <p className="font-[Montserrat] text-[16px] font-medium text-[#646464]">
            2 - From the 5% of the 15% purchase price paid up front
          </p>
          <p className="font-[Montserrat] text-[16px] font-medium text-[#646464]">
            10% of 5% = 0.5% on both levels
          </p>
        </div>
      </section>

      <Typography sx={{ ...stylesMui.pageTitle, fontSize: "45px" }}>
        All The People On <br />{" "}
        <span className="text-[#5B1CD4]">Level 1 And Level 2</span>
      </Typography>

      <div className="px-6 lg:px-40">
        <Typography sx={stylesMui.subHeroText}>
          Affiliate commission are generate the 15th fo the month for the
          previous months activities. For the monthly performance fees we change
          that on the first of each month for the previous months trading
          profits.
        </Typography>
      </div>

      <div className="my-6 flex flex-wrap justify-center gap-4 lg:gap-6">
        <div>
          <h2 className="font-[Poppins] font-semibold text-[45px]">Level 1</h2>
          <LeaderboardComponent isAffiliates={true} />
        </div>
        <div>
          <h2 className="font-[Poppins] font-semibold text-[45px]">Level 2</h2>
          <LeaderboardComponent isAffiliates={true} />
        </div>
      </div>

      <div className="flex justify-center mt-6">
        <FinancialJourney />
      </div>
    </>
  );
};

export default AffiliatePortalWeb;
