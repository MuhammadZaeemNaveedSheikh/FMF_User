import { useState } from "react";
import { Tab, Tabs, Typography, useTheme } from "@mui/material";

import { stylesMui } from "./styles";
import InactiveCard from "./InactiveCard";

const SpecialOffersPageComponent = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <section className="w-full">
      <div className="mt-8 md:mt-14 xl:mt-[5.38rem]" id="in-active">
        <div className="ml-4 md:ml-[4rem] xl:ml-[7rem]" id="challenges">
          <Typography sx={stylesMui.challenges}>Special Offers</Typography>
          <Typography sx={stylesMui.challengesSubtext}>
            Set up the profit targets & draw-down limits.
          </Typography>
        </div>
        <div className="lg:ml-20 p-4 md:p-0 mt-4 md:mt-8 xl:mt-[2.12rem] flex flex-wrap justify-start lg:justify-between">
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
              label="Special Offers"
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Tutorials"
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Leaderboard"
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Contests"
            />
            <Tab
              sx={{
                fontWeight: 500,
                fontSize: { xs: 14, sm: 16 },
                color: "#646464",
                fontFamily: "Montserrat",
                textTransform: "capitalize",
              }}
              label="Network"
            />
          </Tabs>
        </div>
        <div
          className="p-4 md:p-0 mt-4 md:mt-8 xl:mt-[2.12rem] w-full flex flex-wrap gap-4 justify-center"
          id="challenges-grid"
        >
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
          <div
            className={`w-full md:w-[45%] rounded-lg ${
              theme.palette.mode === "light" ? "bg-gray-700" : ""
            } bg-opacity-5`}
          >
            <InactiveCard
              challengeTitle="Flowers"
              challengeDescription="Nisi nulla minim deserunt adipisicing est consectetur sint Nisi labore commodo tempor tempor nisi. Deserunt tempor nisi laboris aute labore."
              contestantsCount="100"
              enrolledCount="28"
              winner="Okkaynym"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffersPageComponent;
