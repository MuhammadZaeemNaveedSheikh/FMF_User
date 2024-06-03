import Star from "../../assets/images/riskStar.png";

const RiskCardWeb = () => {
  return (
    <div className="w-[309px] md:w-[360px] xl:w-[480px] py-2 px-4 bg-[#131119] rounded-[14px] text-white border border-[#252525]">
      <h2 className="font-[Rubik] font-medium text-[24px] text-start">
        Risk Disclaimer
      </h2>
      <img
        src={Star}
        alt="start"
        width={12}
        height={12}
        className="relative top-4 right-2"
      />
      <p className="pl-2 font-[Rubik] font-normal text-[16px] text-start text-[#93A1A6]">
        CFDs are complex instruments and come with a high risk of losing money.
        71% of retail investor lose when trading CFDs with Fully Managed
        Funding, LTD.
      </p>
      <div>
        <button className="bg-[#5B1CD4] rounded-lg w-[223px] h-[36px] font-[Rubik] font-semibold text-[16px] text-center mt-5">
          Read More
        </button>
      </div>
    </div>
  );
};

export default RiskCardWeb;
