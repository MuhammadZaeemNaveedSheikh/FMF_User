import TopUp from "/Icons/top-up.svg";
import Separator from "/Icons/separator.svg";
import Transfer from "/Icons/transfer.svg";
import Withdraw from "/Icons/withdraw.svg";

const PayoutsTabs = () => {
  return (
    <section className="mt-8 flex flex-wrap justify-center items-center">
      <div
        id="main-info-card"
        className="max-w-[330px] rounded-2xl p-6 justify-center items-center text-center"
        style={{
          background:
            "linear-gradient(229.57deg, #5033A4 -0.79%, rgba(51, 16, 152, 0.65) 73%)",
        }}
      >
        <p className="font-[Montserrat] text-[12px] text-[#B2A1E4]">
          Main balance
        </p>
        <span className="flex justify-center items-center">
          <h2 className="font-[Montserrat] text-[36px] font-semibold">
            $13,235
            <span className="font-[Montserrat] text-[18px] font-normal">
              .45
            </span>
          </h2>
        </span>
        <div className="mt-6 flex justify-center gap-6">
          <img className="cursor-pointer" src={TopUp} alt="action" />
          <img src={Separator} alt="separator" />
          <img className="cursor-pointer" src={Withdraw} alt="action" />
          <img src={Separator} alt="separator" />
          <img className="cursor-pointer" src={Transfer} alt="action" />
        </div>
      </div>
      <div className="w-full px-20 mt-6 flex gap-4 justify-center">
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-3 bg-[#151322]">
          <h3 className="font-[Montserrat] text-[16px]">Total Earnings</h3>
          <h2 className="font-[Montserrat] text-[22px] font-medium text-[#0EAD69]">
            $430.00
          </h2>
          <p className="font-[Montserrat] text-[10px]">
            as of 01-December 2023
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-start rounded-2xl cursor-pointer p-1 lg:p-3 bg-[#151322]">
          <h3 className="font-[Montserrat] text-[16px]">Total</h3>
          <h2 className="font-[Montserrat] text-[22px] font-medium text-[#0EAD69]">
            $430.00
          </h2>
          <p className="font-[Montserrat] text-[10px]">
            as of 01-December 2023
          </p>
        </div>
      </div>
      <div className="mt-6">
        <button className="bg-[#5B1CD4] rounded-[6px] px-4 lg:px-16 font-[Montserrat] text-[12px] font-medium py-[10px]">
          Show Details
        </button>
      </div>
    </section>
  );
};

export default PayoutsTabs;
