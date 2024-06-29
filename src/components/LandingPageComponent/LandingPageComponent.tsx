import { useEffect, useState } from "react";
import { Tab, Tabs } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

import TraditionalPage from "./TraditionalPage";
import FullyFundedPage from "./FullyFundedPage";

const LandingPageComponent = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    console.log("🚀 ~ handleTabChange ~ event:", event);
    setSelectedTab(newValue);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="w-full flex flex-col">
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        sx={{ color: "red !important" }}
        indicatorColor="secondary"
      >
        <Tab label="Traditional" sx={{ color: "#5B1CD4 !important" }} />
        <Tab label="Fully Funded" sx={{ color: "#5B1CD4 !important" }} />
      </Tabs>
      {selectedTab === 0 ? <TraditionalPage /> : <FullyFundedPage />}
    </section>
  );
};

export default LandingPageComponent;
