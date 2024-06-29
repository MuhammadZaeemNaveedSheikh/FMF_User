import StatisticsWebChart from "../StatisticWebChart";
import CustomersList from "./OverviewComponents/CustomersList";
import Header from "./OverviewComponents/Header";
import InfoCards from "./OverviewComponents/InfoCards";
import RightPanel from "./OverviewComponents/RightPanel";

const OverviewTab = () => {
  return (
    <>
      <section className="flex flex-wrap justify-center lg:flex-nowrap lg:justify-between">
        <div id="left-side" className="w-full lg:w-[70%]">
          <Header />
          <div className="mt-6">
            <InfoCards />
          </div>
          <div className="mt-6">
            <StatisticsWebChart />
          </div>
          <div className="my-6">
            <CustomersList />
          </div>
        </div>
        <div
          id="right-side"
          className="w-full mt-6 lg:mt-0 lg:w-[25%] xl:w-[28%]"
        >
          <RightPanel />
        </div>
      </section>
    </>
  );
};

export default OverviewTab;
