import { Typography, useTheme } from "@mui/material";
import FilledCircle from "../assets/images/dashboardCircle.png";

import { RiskCard, SizeTable } from "./DashboardComponents";

const Dashboard = () => {
  const theme = useTheme();

  return (
    <div className="mx-4 md:mx-6 lg:mx-10 text-center">
      <Typography
        sx={
          theme.palette.mode === "light"
            ? {
                fontSize: 50,
                fontFamily: "Raleway",
                color: "black",
                mt: 4,
              }
            : {
                fontSize: 50,
                fontFamily: "Raleway",
                color: "#ffffff",
                mt: 4,
              }
        }
      >
        Choose your Package
      </Typography>
      <div className="mb-8 flex justify-between items-center text-center">
        <Typography
          sx={
            theme.palette.mode === "light"
              ? {
                  fontSize: 19,
                  fontFamily: "Inter",
                  color: "black",
                  fontWeight: 500,
                }
              : {
                  fontSize: 19,
                  fontFamily: "Inter",
                  color: "#646464",
                  fontWeight: 500,
                }
          }
        >
          Before we allow you to trade with us, we need to be sure that you can
          manage risk. For this reason, we developed Trading Objectives.
        </Typography>
      </div>

      <div className="flex w-full justify-between items-start">
        <div className="flex flex-col items-start">
          <Typography
            sx={{
              textAlign: "center",
              fontSize: 30,
              fontWeight: 500,
              ml: "26px",
              color: theme.palette.mode === "light" ? "black" : "#ffffff",
            }}
          >
            Fully Management Funded:
          </Typography>
          <div className="flex flex-col items-center text-start">
            <img
              src={FilledCircle}
              width={22}
              height={22}
              alt="complete"
              className="my-2"
            />
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 500,
                fontFamily: "Rubik",
                color: theme.palette.mode === "light" ? "black" : "#ffffff",
              }}
            >
              FULLY FUNDED
            </Typography>
          </div>
        </div>
        <RiskCard />
      </div>

      <div className="w-full">
        <SizeTable />
      </div>
    </div>
  );
};

export default Dashboard;
