import HeroSection from "./HeroSection";
import RevolutionizeSectionTraditional from "./RevolutionizeSectionTraditional";
import AboutCardsTraditional from "./AboutCardsTraditional";
import TestSection from "./TestSection";

import RevolutionizeEllipse from "../../assets/images/landing/revolutionizeEllipse.svg";
import RevolutionizeBottomEllipse from "../../assets/images/landing/revolutionizeBottomEllipse.svg";
import TradingStrategies from "./TradingStrategies";
import AccountPackagesTraditional from "./AccountPackagesTraditional";
import WithdrawalMethodsTraditional from "./WithdrawalMethodsTraditional";
import GetStarted from "./GetStarted";
import ReferralTraditional from "./ReferralTraditional";
import GetAppTraditional from "./GetAppTraditional";

const TraditionalPage = () => (
  <>
    <div
      className="mt-[3.25rem] md:mt-[5.25rem] xl:mt-[6.25rem] w-full flex flex-col z-10"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <HeroSection isTraditional={true} />
    </div>
    <div
      className="relative pt-[1.75rem] md:pt-[2.25rem] xl:pt-[3.76rem] w-full flex flex-col bg-white bg-opacity-[0.02]"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div className="absolute top-0 right-0 overflow-hidden">
        <img src={RevolutionizeEllipse} width="100%" height="100" />
      </div>
      <RevolutionizeSectionTraditional />
      <div className="absolute bottom-0 overflow-hidden">
        <img src={RevolutionizeBottomEllipse} width="100%" height="100%" />
      </div>
    </div>
    <div
      className="mt-[3rem] md:mt-[7rem] xl:mt-[10rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <AboutCardsTraditional />
    </div>
    <div
      className="w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <TestSection isTraditional={true} />
    </div>
    <div
      className="mt-[3rem] md:mt-[7rem] xl:mt-[10rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <TradingStrategies />
    </div>
    <div
      className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <AccountPackagesTraditional />
    </div>
    <div
      className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <WithdrawalMethodsTraditional />
    </div>
    <div
      className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <GetStarted />
    </div>
    <div
      className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <ReferralTraditional />
    </div>
    <div
      className="my-12 md:my-20 xl:my-[7.25rem] w-full flex flex-col"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <GetAppTraditional />
    </div>
  </>
);

export default TraditionalPage;
