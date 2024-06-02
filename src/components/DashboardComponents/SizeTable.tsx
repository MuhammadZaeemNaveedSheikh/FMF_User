import React, { useState } from "react";
import { Typography, useTheme } from "@mui/material";

import SelectedCircle from "../../assets/icons/SelectedCircle";
import UnselectedCircle from "../../assets/icons/UnselectedCircle";

const sizes = [
  { value: 10000, label: "$10,000" },
  { value: 20000, label: "$20,000" },
  { value: 40000, label: "$40,000" },
  { value: 100000, label: "$100,000" },
  { value: 200000, label: "$200,000" },
  { value: 400000, label: "$400,000" },
  { value: 1000000, label: "$1,000,000" },
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
  20000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$1,000 (5%)",
    equityMargin: "$2,000 (10%)",
    profitTarget: "$2,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
  40000: {
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
  400000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$20,000 (5%)",
    equityMargin: "$32,000 (10%)",
    profitTarget: "$32,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
  1000000: {
    tradingPeriod: "Unlimited",
    withdrawals: "Monthly (30 days)",
    dailyLoss: "$50,000 (5%)",
    equityMargin: "$80,000 (10%)",
    profitTarget: "$80,000 (1% to 5%)",
    leverage: "1:100 Max",
    refundableFee: "No Refunds",
  },
};

const SizeTable = () => {
  const theme = useTheme();
  const [selectedSize, setSelectedSize] = useState<number>(100000);

  const handleSizeChange = (size: number) => {
    setSelectedSize(size);
  };

  const data = tableData[selectedSize];

  return (
    <div>
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

      <div className="ml-6 relative flex gap-8 lg:gap-10 mt-4">
        {sizes.map((size) => (
          <div key={size.value} className="text-center">
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
          className={`w-[600px] absolute left-5 h-px bg-gray-800 -z-10 ${
            selectedSize === 100000 ? "top-[17%]" : "top-[22%]"
          }`}
          style={{ backgroundColor: "white" }}
        ></div>
      </div>

      {/* TABLE  */}
      <div className="mt-6 p-4 bg-gray-900 rounded-lg text-white">
        <Typography variant="h6" className="text-center mb-4">
          FULLY FUNDED <br /> Verification
        </Typography>
        <table className="w-full">
          <tbody>
            <tr>
              <td className="py-2">Trading Period</td>
              <td className="py-2 text-right">{data.tradingPeriod}</td>
            </tr>
            <tr>
              <td className="py-2">Withdrawals (Min. 1%)</td>
              <td className="py-2 text-right">{data.withdrawals}</td>
            </tr>
            <tr>
              <td className="py-2">Maximum Daily Loss</td>
              <td className="py-2 text-right">{data.dailyLoss}</td>
            </tr>
            <tr>
              <td className="py-2">Account Equity Margin</td>
              <td className="py-2 text-right">{data.equityMargin}</td>
            </tr>
            <tr>
              <td className="py-2">Monthly Profit Target</td>
              <td className="py-2 text-right">{data.profitTarget}</td>
            </tr>
            <tr>
              <td className="py-2">Account Leverage</td>
              <td className="py-2 text-right">{data.leverage}</td>
            </tr>
            <tr>
              <td className="py-2">Refundable Fee</td>
              <td className="py-2 text-right">{data.refundableFee}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SizeTable;
