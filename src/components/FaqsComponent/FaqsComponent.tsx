import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const faqData = [
  {
    question: "What is FMF (Fully Managed Funded)?",
    answer:
      "Fully Managed Funded (FMF) is a service specializing in forex trading by providing margin accounts that utilize liquidity providers to maximize leverage. \n\nThis approach allows investors to significantly enhance their trading capacity by using borrowed funds, thereby increasing potential returns. \n\nFMF is committed to comprehensive and transparent management of these accounts, ensuring that clients fully understand their investments and the strategies employed. \n\nWith FMF, clients benefit from:\n- Clear communication\n- Full transparency in all activities\n- Expert management aimed at achieving optimal financial outcomes.",
  },
  {
    question: "What is Margin?",
    answer:
      "Forex Margin refers to the use of borrowed funds to increase the potential return on investment in forex trading. \n\nWhen you trade on margin, you are using leverage provided by your broker or liquidity provider to control a larger position than you could with your own funds alone. \n\nAt Fully Managed Funded (FMF), we offer margin accounts that allow our clients to trade forex with enhanced leverage. This means you can control larger positions in the market by only using a fraction of your own capital. \n\nOur service works with top liquidity providers to ensure you have access to competitive rates and optimal trading conditions. \n\nFMF is committed to transparency and comprehensive management, ensuring you understand the risks and rewards associated with trading on margin. With our expertise, we help you maximize your investment potential while maintaining clear and open communication about all activities.",
  },
  {
    question: "Who provides the liquidity for margin?",
    answer:
      "Fully Managed Funded (FMF) provides liquidity for margin accounts by partnering with top-tier liquidity providers. \n\nThese providers supply the necessary funds that enable our clients to trade with leverage, significantly enhancing their trading capacity. \n\nBy utilizing these relationships, FMF ensures that our clients have access to competitive rates and optimal trading conditions, allowing them to control larger positions in the forex market with a smaller initial investment. \n\nFMF's commitment to transparency means that we clearly communicate the terms, conditions, and risks associated with trading on margin, ensuring that our clients are fully informed and confident in their investment decisions.",
  },
  {
    question: "What are the deposit options?",
    answer:
      "Fully Managed Funded (FMF) accepts deposits exclusively in cryptocurrency. \n\nThis provides a fast, secure, and efficient way to fund your account. \n\nIf you are new to cryptocurrency or need assistance with the purchasing process, FMF can help guide you through the steps to acquire the necessary crypto assets. \n\nOur support team is available to assist you in making your deposit smooth and straightforward, ensuring that you can start trading as quickly as possible.",
  },
  {
    question: "How often can I withdraw & withdrawal methods?",
    answer:
      "Fully Managed Funded (FMF) processes all withdrawals in cryptocurrency. \n\nWe aim to offer both monthly and weekly withdrawal options to provide flexibility for our clients. \n\nWithdrawals are facilitated through our liquidity providers and are paid out by top-tier banks and our financial institutional partners. \n\nThis ensures that you receive your funds securely and efficiently. \n\nIf you have any questions or need assistance with the withdrawal process, our support team is ready to help.",
  },
  {
    question: "What is the licensing fee?",
    answer:
      "A licensing fee at Fully Managed Funded (FMF) is a charge of 15% on all margin accounts. This fee is divided into two parts:\n\n- 5% is allocated to our service licensing: This portion covers the costs associated with maintaining and operating our platform, ensuring we provide top-notch services and support.\n- 10% is invested back into your margin account: This part of the fee helps to increase the leverage available in your trading account, giving you more power to maximize your trading potential. \n\nThis fee structure ensures that our services are sustainable while directly enhancing your trading capabilities.",
  },
  {
    question: "How can I view the trades?",
    answer:
      "You can view all your trades using MetaTrader 5 (MT5), a leading financial trading platform provided by MetaQuotes. \n\nMT5 is the largest provider of financial software, allowing you to trade and monitor all existing positions with ease. \n\nThrough our partnership with Trading Master, we ensure that you have access to advanced trading tools and real-time data to manage your investments effectively. \n\nThis platform provides comprehensive insights, charts, and analytical tools to help you stay informed about your trading activities.",
  },
  {
    question: "What is the profit split?",
    answer:
      "Our profit split at Fully Managed Funded (FMF) is structured as follows:\n\n- 70% to You: You keep 70% of all profits generated from your trading activities. This portion belongs entirely to you, allowing you to enjoy the rewards of your successful trades.\n\n- 30% to FMF and Service Providers: The remaining 30% is divided among FMF, the trading team, and the service provider, Trading Master. This portion covers the costs associated with managing your account, including trading expertise, platform access, and ongoing support. \n\nThis profit split ensures a fair distribution of profits while providing you with the opportunity to maximize your earnings from trading.",
  },
  {
    question: "What are the trading strategies and asset classes traded?",
    answer:
      "At Fully Managed Funded (FMF), we trade a variety of asset classes using carefully curated trading strategies. Here's an overview:\n\n**Asset Classes Traded:**\n- Forex: We trade currency pairs in the forex market, offering opportunities to profit from fluctuations in exchange rates.\n- Indices: Our trading includes contracts for difference (CFDs) on major stock indices, allowing you to benefit from movements in broader market trends.\n- Stocks: We trade CFDs on individual stocks, providing exposure to leading companies across various industries.\n- Precious Metals: Our trading extends to precious metals such as gold and silver, offering diversification and hedging opportunities.\n\n**Trading Strategies:**\n- Risk Adverse Approach: We prioritize risk management, employing strategies that aim to minimize exposure to market volatility.\n- Expert Oversight: Our trading strategies are developed and overseen by a trusted team of industry professionals with decades of experience.\n- Sophisticated Algorithms: We utilize sophisticated algorithms to analyze market data and identify high-probability trading opportunities.\n- Proven Track Record: Our strategies have a proven track record, with six years of demonstrated success and live audited statistics to validate their performance.\n- Targeted Profit Gains: Our goal is to achieve consistent monthly profit gains of 1-5%, ensuring that your marginal account receives the profits it deserves while maintaining a cautious approach to risk. \n\nBy trading a diverse range of asset classes and employing proven strategies, we aim to maximize the profitability of your marginal account while safeguarding your investments against undue risks.",
  },
  {
    question: "How much experience does FMF have?",
    answer:
      "Fully Managed Funded (FMF) boasts a wealth of experience, drawing on the collective expertise of our team members. Here's a breakdown:\n\n**Team Composition:**\n- Our team comprises of 6 professionals, each bringing unique skills and insights to the table.\n\n**Combined Experience:**\n- Collectively, we have over 60 years of experience in the financial industry. This includes experience in institutional fund management, expert institutional trading, and brokerage management.\n\n**Diverse Backgrounds:**\n- Our team members have worked for some of the largest institutions globally, managing portfolios worth over $100 million. This extensive background provides us with a deep understanding of market dynamics and risk management strategies.\n\n**Shared Goal:**\n- Our shared goal at FMF is to leverage our expertise to build a legacy platform. We aim to democratize access to the financial markets, allowing even the smallest retail investors to benefit from our winning strategies and market insights.\n\nWith our combined experience and dedication to excellence, FMF is committed to providing top-tier financial services and empowering investors to achieve their financial goals.",
  },
];

const FaqsComponent = () => {
  return (
    <>
      {faqData.map((faq, index) => (
        <section className="flex flex-col py-[3.12rem] px-[3.12rem] w-full bg-white bg-opacity-5 rounded-[0.875rem] mb-6">
          <div
            className="flex flex-col items-start w-full"
            key={index}
            id={`faq-unit-${index}`}
          >
            <Typography sx={stylesMui.faqQuestion}>{faq.question}</Typography>
            <hr className="my-6 md:my-[1.88rem] w-full h-[0.0625rem]" />
            <Typography sx={{ ...stylesMui.faqAnswer, whiteSpace: "pre-line" }}>
              {faq.answer}
            </Typography>
          </div>
        </section>
      ))}
      <section className="w-full mt-12">
        <div className="bg-[#FFFFFF05] text-white p-8 rounded-[44px] font-[Montserrat] border border-solid border-[FFFFFF33] w-full">
          <div className="mb-8 flex flex-col items-center">
            <h2 className="text-[34px] font-semibold text-center ">
              Have a Question?{" "}
              <span className="text-[#5B1CD4]">Ask a Question Here!</span>
            </h2>
            <p className="mt-4 text-[#C0C0C0] text-[20px] text-center lg:text-start w-full">
              Ask Your Question here
            </p>
            <textarea
              placeholder="Enter your question"
              rows={5}
              className="w-full p-2 border border-[#646464] rounded-[6px] outline-none focus:ring-2 focus:ring-blue-500 bg-[#FFFFFF05]"
              style={{
                borderColor: "#646464",
              }}
            ></textarea>
            <button className="bg-[#5B1CD4] rounded-full px-4 lg:px-16 font-[Montserrat] text-[12px] font-medium py-[10px] mt-6">
              Send
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqsComponent;
