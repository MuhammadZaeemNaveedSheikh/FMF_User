import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography, useTheme } from "@mui/material";

import FinancialJourney from "./FinancialJourney";
import SizeTableWeb from "./DashboardComponents/SizeTableWeb";

const BillingWeb = () => {
  const theme = useTheme();

  return (
    <>
      <div className="mx-5 md:mx-12 xl:mx-32 mt-12 lg:mt-24 z-10">
        <div className="mb-10 flex flex-col justify-center items-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: "white",
              fontSize: 36,
            }}
          >
            Test Your <span className="text-[#5B1CD4]">Skill-Set</span>
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#646464", fontSize: 20 }}>
            Prop trading brought to you by professional traders.
          </Typography>
        </div>

        <div className="w-full">
          <SizeTableWeb />
        </div>

        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 30, md: 48 },
              mt: 8,
            }}
          >
            Frequently asked questions
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#646464",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            Can’t find the anwser you’re looking for ? Reach out to customer
            support team.
          </Typography>
        </div>
        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mt-12">
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon
              sx={{ color: theme.palette.mode === "light" ? "black" : "white" }}
            />
          </div>
          <div className="w-full flex justify-between p-4 md:w-1/2 bg-white bg-opacity-5 rounded-xl">
            <Typography
              sx={{
                fontWeight: 400,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: { xs: 14, md: 18 },
              }}
            >
              Nulla voluptate ullamco ipsum anim ?
            </Typography>
            <ExpandMoreIcon />
          </div>
        </div>

        <div className="flex justify-between mx-6 md:mx-12 items-center p-4 flex-wrap mt-8 bg-white bg-opacity-5 rounded-xl">
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: { xs: 16, md: 18 },
            }}
          >
            EA Trading: YES
          </Typography>
        </div>
      </div>
      <FinancialJourney />
    </>
  );
};

export default BillingWeb;
