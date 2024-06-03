import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";

import SelectedCircle from "../../assets/icons/SelectedCircle";
import UnselectedCircle from "../../assets/icons/UnselectedCircle";
import CTACouponCardWeb from "./CTACouponCardWeb";
import RiskCardWeb from "./RiskCardWeb";

const sizes = [
  { value: 10000, label: "$10K" },
  { value: 25000, label: "$25K" },
  { value: 50000, label: "$50K" },
  { value: 100000, label: "$100K" },
  { value: 200000, label: "$200K" },
];

const types = [
  { value: 1, label: "1-Step" },
  { value: 2, label: "2-Step" },
  { value: 3, label: "2-Step (Swing)" },
];

const tableData = {
  10000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$500 (5%)",
    equityMargin: "$1,000 (10%)",
    profitTarget: "$1,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
  25000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$1,000 (5%)",
    equityMargin: "$2,000 (10%)",
    profitTarget: "$2,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
  50000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$2,000 (5%)",
    equityMargin: "$4,000 (10%)",
    profitTarget: "$4,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
  100000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$5,000 (5%)",
    equityMargin: "$8,000 (10%)",
    profitTarget: "$8,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
  200000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$10,000 (5%)",
    equityMargin: "$16,000 (10%)",
    profitTarget: "$16,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
};

const SizeTableWeb = () => {
  const theme = useTheme();
  const [selectedSize, setSelectedSize] = useState<number>(100000);
  const [selectedType, setSelectedType] = useState<number>(2);

  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  const handleTypeChange = (type: number) => {
    setSelectedType(type);
  };

  const data = tableData[selectedSize];

  return (
    <div>
      <div className="flex w-full flex-wrap md:flex-nowrap justify-center md:justify-between items-start">
        <div className="text-start">
          <Typography
            sx={{
              fontSize: 30,
              fontWeight: 500,
              ml: "26px",
              color: theme.palette.mode === "light" ? "black" : "#ffffff",
            }}
          >
            Type:
          </Typography>
          <div className="ml-6 mb-6 relative flex flex-wrap md:flex-nowrap gap-2 md:gap-4 lg:gap-10 mt-4">
            {types.map((type) => (
              <div key={type.value} className="text-center">
                <div className="flex flex-col justify-content">
                  <div
                    onClick={() => handleTypeChange(type.value)}
                    className="cursor-pointer"
                  >
                    {selectedType === type.value ? (
                      <SelectedCircle />
                    ) : (
                      <UnselectedCircle />
                    )}
                  </div>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: selectedType === type.value ? 600 : 400,
                      color:
                        theme.palette.mode === "light" ? "black" : "#ffffff",
                      mt: 1,
                    }}
                  >
                    {type.label}
                  </Typography>
                </div>
                {selectedType === type.value && selectedType === 2 && (
                  <Typography
                    sx={{
                      fontSize: 12,
                      fontWeight: 400,
                      color: "#5B1CD4",
                    }}
                  >
                    Most Popular
                  </Typography>
                )}
              </div>
            ))}
            <div
              className={`hidden lg:block w-[645px] absolute left-5 h-px -z-10 ${
                selectedType === 2
                  ? "top-[17%] w-[225px]"
                  : "top-[22%] w-[210px]"
              }`}
              style={{ backgroundColor: "#252525" }}
            ></div>
          </div>
        </div>
        <RiskCardWeb />
      </div>

      <div className="text-start">
        <Typography
          sx={{
            fontSize: 30,
            fontWeight: 500,
            ml: "26px",
            color: theme.palette.mode === "light" ? "black" : "#ffffff",
          }}
        >
          Size:
        </Typography>
      </div>

      <div className="ml-6 relative flex flex-wrap md:flex-nowrap gap-2 md:gap-4 lg:gap-10 mt-4">
        {sizes.map((size) => (
          <div key={size.value} className="text-center">
            <div className="flex flex-col justify-content">
              <div
                onClick={() => handleSizeChange(size.value)}
                className="cursor-pointer"
              >
                {selectedSize === size.value ? (
                  <SelectedCircle />
                ) : (
                  <UnselectedCircle />
                )}
              </div>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: selectedSize === size.value ? 600 : 400,
                  color: theme.palette.mode === "light" ? "black" : "#ffffff",
                  mt: 1,
                }}
              >
                {size.label}
              </Typography>
            </div>
            {selectedSize === size.value && selectedSize === 100000 && (
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 400,
                  color: "#5B1CD4",
                }}
              >
                Most Popular
              </Typography>
            )}
          </div>
        ))}
        <div
          className={`hidden lg:block w-[645px] absolute left-5 h-px -z-10 ${
            selectedSize === 100000
              ? "top-[17%] w-[645px]"
              : "top-[22%] w-[630px]"
          }`}
          style={{ backgroundColor: "#252525" }}
        ></div>
      </div>

      {/* TABLE  */}
      <div className="w-full mt-6 flex items-start justify-between flex-wrap lg:flex-nowrap">
        <div className="flex flex-col justify-center w-full md:w-[68%] min-h-[669px] py-4 px-6 bg-[#131119] rounded-[14px] text-white border border-[#252525]">
          <p className="font-[Rubik] font-bold text-[16px] ml-32">
            FULLY
            <br /> FUNDED
          </p>
          <p className="mb-2 font-[Rubik] font-normal text-[16px] ml-32">
            Verification
          </p>
          <table className="w-full">
            <tbody>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Trading Period
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.tradingPeriod}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Withdrawals (Min. 1%)
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.withdrawals}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Maximum Daily Loss
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.dailyLoss}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Account Equity Margin
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.equityMargin}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Monthly Profit Target
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.profitTarget}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Account Leverage
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.leverage}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Refundable Fee
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.refundableFee}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="w-full md:w-[29%] mt-2 md:mt-0">
          <CTACouponCardWeb />
        </div>
      </div>
    </div>
  );
};

export default SizeTableWeb;
