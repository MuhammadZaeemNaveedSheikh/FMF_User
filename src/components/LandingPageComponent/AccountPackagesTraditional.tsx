import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Typography } from "@mui/material";
import AccountPackageSelectors from "./AccountPackageSelectors";

import { stylesMui } from "./styles";
import AddAboutCardsTraditional from "./AddAboutCardsTraditional";

const AccountPackagesTraditional = () => {
  const data = [
    {
      equity: "$150,000",
      account: "$1,000,000 Trading Account (10% Equity Margin)",
    },
    {
      equity: "$60,000",
      account: "$400,000 Trading Account (10% Equity Margin)",
    },
    {
      equity: "$30,000",
      account: "$200,000 Trading Account (10% Equity Margin)",
    },
    {
      equity: "$15,000",
      account: "$100,000 Trading Account (10% Equity Margin)",
    },
    {
      equity: "$3,000",
      account: "$20,000 Trading Account (10% Equity Margin)",
    },
    {
      equity: "$1,500",
      account: "$10,000 Trading Account (10% Equity Margin)",
    },
  ];

  // const rules = [
  //   "5% Max Daily Drawdown",
  //   "10% Total Account Loss",
  //   "Trades Can Be Hold Over The Weekend",
  //   "No Data/News Trading Restrictions",
  //   "No Minimum Trading Days",
  //   "Withdraw Funds Monthly",
  // ];

  const features = [
    {
      title: "Real time data",
      description: "Get the data you need to make smarter decisions.",
      iconSrc: "/Images/Chart.png",
    },
    {
      title: "Fast and Easy to use",
      description: "Easily to convert API with just a few clicks",
      iconSrc: "/Images/Rocket.png",
    },
    {
      title: "Safely Security",
      description: "All customer data is encrypted",
      iconSrc: "/Images/Chart.png",
    },
    {
      title: "Powerfull App",
      description: "Provide simple and minimalist dashboard",
      iconSrc: "/Images/Category.png",
    },
  ];

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="w-full flex flex-col items-center justify-center font-[Poppins] px-12 lg:px-28">
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageSubheadings}>FMF Account</Typography>
          <Typography sx={{ ...stylesMui.pageSubheadings, color: "#5B1CD4" }}>
            Packages
          </Typography>
          <Typography sx={stylesMui.bodyText}>
            15% Upfront Licensing Fee
          </Typography>
        </div>
      </div>
      <div className="w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between gap-6 items-start">
        <div className="flex flex-col gap-6">
          <div
            id="table"
            className="w-full flex justify-center items-center bg-[#131119] text-[16px] rounded-[14px] border border-solid border-[#252525]"
          >
            <div className="text-white rounded-lg p-6 shadow-lg">
              <div className="mb-4 text-center">
                <h2 className="font-bold">FMF Rules And Objectives</h2>
                <p className="text-[#93A1A6]">1% To 5% Monthly Target</p>
              </div>
              <table className="w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-700">
                      Equity
                    </th>
                    <th className="px-4 lg:pl-20 2xl:pl-36 py-2 border-b border-gray-700">
                      Trading Account
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr key={index}>
                      <td className="px-2 lg:pr-20 2xl:pr-36 py-6 border-b border-gray-700 text-[14px]">
                        {row.equity}
                      </td>
                      <td className="px-2 lg:pl-20 2xl:pl-36 pr-36 py-6 border-b border-gray-700">
                        {row.account}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          {/* <div className="bg-[#131119] text-[16px] rounded-[14px] border border-solid border-[#252525] flex flex-col justify-center items-start p-8">
            {rules.map((rule, index) => (
              <p key={index} className="flex items-center mb-2">
                <img
                  src="/Images/star-bullet.png"
                  alt="bullet"
                  className="mr-2"
                />
                {rule}
              </p>
            ))}
          </div> */}
        </div>
        <div className="flex flex-col gap-2 items-start lg:max-w-[40%]">
          <AccountPackageSelectors />
        </div>
      </div>
      <div id="usps" className="mt-6">
        <AddAboutCardsTraditional />
      </div>
      <div
        id="reasons"
        className="mt-6 w-full flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-4"
      >
        <div className="">
          <img src="/Images/graph-image-left.png" alt="graph" />
        </div>
        <div className="lg:max-w-[45%] flex flex-col justify-between items-start">
          <h3 className="font-medium text-[34px]">
            The reasons to prefer choosing our platform
          </h3>
          <p className="font-light text-[#C0C0C0] text-[16px]">
            Seamless integration of more than 20+ apps that can help analytics
            your product
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col justify-start">
                <img
                  src={feature.iconSrc}
                  alt={`${feature.title} icon`}
                  className="w-8 h-8 mr-4"
                />
                <div>
                  <h3 className="text-[16px] font-medium">{feature.title}</h3>
                  <p className="mt-2 text-[#C0C0C0] text-[14px]">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccountPackagesTraditional;
