import { Typography, useTheme } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import StatisticsWebChart from "../StatisticWebChart";
import EditIcon from "../../assets/images/editStats.png";
import IncomeIcon from "../../assets/icons/IncomeIcon";
import ExpenseIcon from "../../assets/icons/ExpenseIcon";

interface ChallengeData {
  iconSrc: string;
  title: string;
  value: number;
  percentage: number;
}

const OverviewTab = () => {
  const theme = useTheme();
  const data: ChallengeData[] = [
    {
      iconSrc: "/Icons/failedChallengeIcon.svg",
      title: "Failed Challenges",
      value: 27132,
      percentage: +12,
    },
    {
      iconSrc: "/Icons/fundedTraderIcon.svg",
      title: "Funded Traders",
      value: 27132,
      percentage: +12,
    },
    {
      iconSrc: "/Icons/withDrawIcon.svg",
      title: "Withdrawn this month",
      value: 27132,
      percentage: -2,
    },
  ];
  return (
    <>
      <div className="mx-4 md:mx-6 xl:mx-12 mt-12 z-10">
        <div className="flex flex-wrap md:flex-nowrap justify-center md:gap-4 lg:gap-10 mt-6">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full lg:w-[350px] lg:h-[280px] xl:w-[430px] rounded-2xl ${
                theme.palette.mode === "light" ? "bg-gray-700" : "bg-white"
              } bg-opacity-5 p-3 md:p-6`}
            >
              <div className="flex flex-col gap-10">
                <div className="flex justify-between items-center">
                  <img src={item.iconSrc} alt={`Icon for ${item.title}`} />
                  <Typography
                    sx={{
                      fontWeight: 400,
                      color: theme.palette.mode === "light" ? "black" : "white",
                      fontSize: 21,
                    }}
                  >
                    {item.title}
                  </Typography>
                </div>
                <Typography
                  sx={{
                    fontWeight: 500,
                    color: theme.palette.mode === "light" ? "black" : "white",
                    fontSize: 40,
                  }}
                >
                  {item.value}
                </Typography>
                <div className="flex justify-between items-center">
                  <div className="flex flex-row items-center gap-2">
                    {item.percentage < 0 ? (
                      <>
                        <ArrowDownwardIcon sx={{ color: "#E74545" }} />
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#E74545",
                            fontSize: 19,
                          }}
                        >
                          {item.percentage}%
                        </Typography>
                      </>
                    ) : (
                      <>
                        <NorthIcon sx={{ color: "#23C581" }} />
                        <Typography
                          sx={{
                            fontWeight: 600,
                            color: "#23C581",
                            fontSize: 19,
                          }}
                        >
                          +{item.percentage}%
                        </Typography>
                      </>
                    )}
                    <Typography
                      sx={{ fontWeight: 400, color: "#707B81", fontSize: 19 }}
                    >
                      on this week
                    </Typography>
                  </div>
                  <img
                    src={EditIcon}
                    alt="Edit Icon"
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-white bg-opacity-5 p-6 mt-16 rounded-2xl">
          <div className="flex justify-between">
            <Typography
              sx={{
                fontWeight: 400,
                fontFamily: "Poppins",
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 20, md: 28, lg: 40 },
                ml: 2,
              }}
            >
              Reports
            </Typography>
            <div className="flex gap-12 items-center">
              <IncomeIcon />
              <p className="font-[Poppins] font-semibold text-[22px]">Income</p>
              <ExpenseIcon />
              <p className="font-[Poppins] font-semibold text-[22px]">
                Expense
              </p>
            </div>
          </div>
          <StatisticsWebChart />
        </div>
      </div>
    </>
  );
};

export default OverviewTab;
