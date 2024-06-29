import React, { useState } from "react";

const AccountPackageSelectors: React.FC = () => {
  const [accountSelection, setAccountSelection] = useState("");
  // const [strategySelection, setStrategySelection] = useState("");

  const handleAccountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAccountSelection(event.target.value);
  };

  // const handleStrategyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setStrategySelection(event.target.value);
  // };

  return (
    <div className="flex flex-col justify-center items-center font-[Montserrat] text-lg">
      <div className="bg-[#131119] text-white p-6 shadow-lg mb-6 border border-solid border-[#EFF0F6] rounded-[24px] w-full">
        <h2 className="font-medium mb-4">
          Only One Selection Can Be Added To Each Individual FMF Account
        </h2>
        <div className="mb-4 text-[#8F9BB7]">
          <label className="block">
            <input
              type="radio"
              name="account"
              value="10k"
              checked={accountSelection === "10k"}
              onChange={handleAccountChange}
              className="mr-2"
            />
            10k account with strategy 1
          </label>
          <label className="block">
            <input
              type="radio"
              name="account"
              value="40k"
              checked={accountSelection === "40k"}
              onChange={handleAccountChange}
              className="mr-2"
            />
            40k account with strategy 3
          </label>
          <label className="block">
            <input
              type="radio"
              name="account"
              value="100k"
              checked={accountSelection === "100k"}
              onChange={handleAccountChange}
              className="mr-2"
            />
            100k account with strategy 5
          </label>
        </div>
        <button className="bg-[#5B1CD4] text-white py-2 px-4 rounded text-[16px] font-semibold">
          Show More
        </button>
      </div>

      {/* <div className="bg-[#131119] text-white p-6 shadow-lg border border-solid border-[#EFF0F6] rounded-[24px] w-full">
        <h2 className="font-medium mb-4">
          Select The Strategy To Put On That Package
        </h2>
        <div className="mb-4 text-[#8F9BB7]">
          <label className="block">
            <input
              type="radio"
              name="strategy"
              value="GBP/USD"
              checked={strategySelection === "GBP/USD"}
              onChange={handleStrategyChange}
              className="mr-2"
            />
            GBP/USD
          </label>
          <label className="block">
            <input
              type="radio"
              name="strategy"
              value="FX 8 pairs"
              checked={strategySelection === "FX 8 pairs"}
              onChange={handleStrategyChange}
              className="mr-2"
            />
            FX 8 pairs
          </label>
          <label className="block">
            <input
              type="radio"
              name="strategy"
              value="Gold"
              checked={strategySelection === "Gold"}
              onChange={handleStrategyChange}
              className="mr-2"
            />
            Gold
          </label>
          <label className="block">
            <input
              type="radio"
              name="strategy"
              value="Us30"
              checked={strategySelection === "Us30"}
              onChange={handleStrategyChange}
              className="mr-2"
            />
            Us30
          </label>
          <label className="block">
            <input
              type="radio"
              name="strategy"
              value="Mixed"
              checked={strategySelection === "Mixed"}
              onChange={handleStrategyChange}
              className="mr-2"
            />
            Mixed
          </label>
        </div>
        <button className="bg-[#5B1CD4] text-white py-2 px-4 rounded text-[16px] font-semibold">
          Save and Continue
        </button>
      </div> */}
    </div>
  );
};

export default AccountPackageSelectors;
