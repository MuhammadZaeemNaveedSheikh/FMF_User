import React from "react";

const withdrawalMethods = [
  {
    name: "bitcoin",
    logoSrc: "/Images/bitcoin.png",
  },
  {
    name: "tether",
    logoSrc: "/Images/tether.png",
  },
  {
    name: "binance",
    logoSrc: "/Images/binance.png",
  },
  {
    name: "coinbase",
    logoSrc: "/Images/coinbase.png",
  },
  {
    name: "BitMEX",
    logoSrc: "/Images/bitmex.png",
  },
];

const WithdrawalMethodsTraditional: React.FC = () => {
  return (
    <section className="w-full px-12 lg:px-28">
      <div className="bg-[#FFFFFF05] text-white p-8 rounded-[44px] font-[Montserrat] border border-solid border-[FFFFFF33] w-full">
        <div className="text-center mb-8 flex flex-col items-center">
          <div className="border border-[#5B1CD4] rounded-full px-4 py-1 mb-4 flex items-center">
            <span className="text-[14px] font-semibold">Methods</span>
          </div>
          <h2 className="text-[34px] font-semibold">Our Withdrawal Methods</h2>
          <p className="mt-4 text-[#C0C0C0] text-[20px]">
            Our primary withdrawal method is with crypto with USDT, USCS, BTC,
            ETC etc. Once funded, you can enjoy a starting profit split of 85%,
            which increases as you scale your account up to a maximum of 95%.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-8 my-4">
          {withdrawalMethods.map((method, index) => (
            <img
              key={index}
              src={method.logoSrc}
              alt={method.name}
              className="h-[28px] cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WithdrawalMethodsTraditional;
