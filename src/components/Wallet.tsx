import MainTitleComponent from "./MainTitleComponent";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import AffiliateTab from "./WalletTabs/AffiliateTab";
import TradingTab from "./WalletTabs/TradingTab";
import WithdrawalTab from "./WalletTabs/WithdrawalTab";
import { useTheme } from "@mui/material";

const Wallet = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="mx-4 sm:mx-6 xl:mx-10 mt-12">
        {" "}
        <div className="flex flex-col md:flex-row justify-between gap-y-4">
          <MainTitleComponent Image="/Icons/dollarIcon.svg" title="Wallet" />
        </div>
        <div className="flex flex-wrap justify-start md:justify-center">
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            sx={{
              fontFamily: "Montserrat",
              "& button:focus": {
                color: theme.palette.mode === "light" ? "black" : "white",
              },

              "& .MuiTab-root.Mui-selected": {
                color: theme.palette.mode === "light" ? "black" : "white",
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                fontFamily: "Montserrat",
              },
            }}
            TabIndicatorProps={{
              sx: {
                bgcolor: theme.palette.mode === "light" ? "black" : "white",
              },
            }}
          >
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Affiliate Commissions"
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Trading Gains"
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Withdrawal In Process"
            />
          </Tabs>
        </div>
        {value === 0 && <AffiliateTab />}
        {value === 1 && <TradingTab />}
        {value === 2 && <WithdrawalTab />}
      </div>
    </>
  );
};

export default Wallet;
