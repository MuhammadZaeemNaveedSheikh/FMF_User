import { useState } from "react";
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
    step1: {
      tradingPeriod: "Unlimited",
      minimumTradingDays: "0 days",
      maxDailyLoss: "$500 (5%)",
      maxLoss: "$800 (8%)",
      profitTarget: "$1,000 (10%)",
      leverage: "1:100 Max",
      refundableFee: "$100",
    },
    step2: {
      tradingPeriod: "Unlimited",
      minimumTradingDays: "1 day",
      maxDailyLoss: "$600 (6%)",
      maxLoss: "$900 (9%)",
      profitTarget: "$900 (9%)",
      leverage: "1:90 Max",
      refundableFee: "$200",
    },
    funded: {
      tradingPeriod: "1 year",
      minimumTradingDays: "10 days",
      maxDailyLoss: "$700 (7%)",
      maxLoss: "$1000 (10%)",
      profitTarget: "$1,100 (11%)",
      leverage: "1:80 Max",
      refundableFee: "$300",
    },
  },
  25000: {
    step1: {
      tradingPeriod: "6 months",
      minimumTradingDays: "5 days",
      maxDailyLoss: "$1,000 (4%)",
      maxLoss: "$1,500 (6%)",
      profitTarget: "$2,500 (10%)",
      leverage: "1:100 Max",
      refundableFee: "$150",
    },
    step2: {
      tradingPeriod: "6 months",
      minimumTradingDays: "7 days",
      maxDailyLoss: "$1,200 (4.8%)",
      maxLoss: "$1,800 (7.2%)",
      profitTarget: "$2,000 (8%)",
      leverage: "1:90 Max",
      refundableFee: "$250",
    },
    funded: {
      tradingPeriod: "1 year",
      minimumTradingDays: "15 days",
      maxDailyLoss: "$1,400 (5.6%)",
      maxLoss: "$2,000 (8%)",
      profitTarget: "$2,700 (10.8%)",
      leverage: "1:80 Max",
      refundableFee: "$350",
    },
  },
  50000: {
    step1: {
      tradingPeriod: "3 months",
      minimumTradingDays: "7 days",
      maxDailyLoss: "$1,500 (3%)",
      maxLoss: "$2,000 (4%)",
      profitTarget: "$5,000 (10%)",
      leverage: "1:100 Max",
      refundableFee: "$200",
    },
    step2: {
      tradingPeriod: "3 months",
      minimumTradingDays: "10 days",
      maxDailyLoss: "$1,800 (3.6%)",
      maxLoss: "$2,500 (5%)",
      profitTarget: "$4,000 (8%)",
      leverage: "1:90 Max",
      refundableFee: "$300",
    },
    funded: {
      tradingPeriod: "6 months",
      minimumTradingDays: "20 days",
      maxDailyLoss: "$2,000 (4%)",
      maxLoss: "$3,000 (6%)",
      profitTarget: "$5,500 (11%)",
      leverage: "1:80 Max",
      refundableFee: "$400",
    },
  },
  100000: {
    step1: {
      tradingPeriod: "1 month",
      minimumTradingDays: "10 days",
      maxDailyLoss: "$2,000 (2%)",
      maxLoss: "$3,000 (3%)",
      profitTarget: "$10,000 (10%)",
      leverage: "1:100 Max",
      refundableFee: "$300",
    },
    step2: {
      tradingPeriod: "1 month",
      minimumTradingDays: "15 days",
      maxDailyLoss: "$2,500 (2.5%)",
      maxLoss: "$4,000 (4%)",
      profitTarget: "$8,000 (8%)",
      leverage: "1:90 Max",
      refundableFee: "$400",
    },
    funded: {
      tradingPeriod: "3 months",
      minimumTradingDays: "25 days",
      maxDailyLoss: "$3,000 (3%)",
      maxLoss: "$5,000 (5%)",
      profitTarget: "$11,000 (11%)",
      leverage: "1:80 Max",
      refundableFee: "$500",
    },
  },
  200000: {
    step1: {
      tradingPeriod: "2 weeks",
      minimumTradingDays: "14 days",
      maxDailyLoss: "$4,000 (2%)",
      maxLoss: "$5,000 (2.5%)",
      profitTarget: "$20,000 (10%)",
      leverage: "1:100 Max",
      refundableFee: "$400",
    },
    step2: {
      tradingPeriod: "2 weeks",
      minimumTradingDays: "20 days",
      maxDailyLoss: "$5,000 (2.5%)",
      maxLoss: "$6,000 (3%)",
      profitTarget: "$16,000 (8%)",
      leverage: "1:90 Max",
      refundableFee: "$500",
    },
    funded: {
      tradingPeriod: "1 month",
      minimumTradingDays: "30 days",
      maxDailyLoss: "$6,000 (3%)",
      maxLoss: "$7,000 (3.5%)",
      profitTarget: "$22,000 (11%)",
      leverage: "1:80 Max",
      refundableFee: "$600",
    },
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
        <div className="text-center md:text-start">
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

      <div className="text-center md:text-start">
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
            <div className="flex flex-col justify-center">
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
              ? "top-[17%] w-[345px]"
              : "top-[22%] w-[320px]"
          }`}
          style={{ backgroundColor: "#252525" }}
        ></div>
      </div>

      {/* TABLE  */}
      <div className="w-full mt-6 flex items-start justify-between flex-wrap lg:flex-nowrap">
        <div className="flex flex-col justify-center w-full md:w-[68%] min-h-[669px] py-4 px-6 bg-[#131119] rounded-[14px] text-white border border-[#252525]">
          <thead>
            <tr className="flex justify-end md:gap-12 lg:gap-24 2xl:gap-36 md:mr-14 lg:mr-30 2xl:mr-48">
              <th className="py-5 font-[Rubik] font-bold text-[16px] text-start">
                Step 1 <br />
                <span className="text-[#93A1A6] font-normal">Challenge</span>
              </th>
              <th className="py-5 font-[Rubik] font-bold text-[16px] text-start">
                Step 2<br />
                <span className="text-[#93A1A6] font-normal">Verification</span>
              </th>
              <th className="py-5 font-[Rubik] font-bold text-[16px] text-start">
                Funded <br />
                <span className="text-[#93A1A6] font-normal">Trader</span>
              </th>
            </tr>
          </thead>
          <table className="w-full">
            <tbody>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Trading Period
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.tradingPeriod}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.tradingPeriod}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.tradingPeriod}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Minimum Trading Days
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.minimumTradingDays}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.minimumTradingDays}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.minimumTradingDays}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Maximum Daily Loss
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.maxDailyLoss}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.maxDailyLoss}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.maxDailyLoss}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Maximum Loss
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.maxLoss}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.maxLoss}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.maxLoss}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Profit Target
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.profitTarget}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.profitTarget}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.profitTarget}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Account Leverage
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.leverage}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.leverage}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.leverage}
                </td>
              </tr>
              <tr className="border-t border-[#FAF1E01A]">
                <td className="py-5 font-[Rubik] font-medium text-[14px] text-start">
                  Refundable Fee
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step1.refundableFee}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.step2.refundableFee}
                </td>
                <td className="font-[Rubik] font-medium text-[16px] text-start">
                  {data.funded.refundableFee}
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
