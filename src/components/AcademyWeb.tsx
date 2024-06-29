import { Typography, useTheme } from "@mui/material";

import FinancialJourney from "./FinancialJourney";
import AcademySection from "./AcademySection";

const financialLessons = [
  {
    title: "01. Financial Markets",
    subtitle: "Introduction to Financial Markets",
  },
  {
    title: "02. Financial Markets",
    subtitle: "Instruments traded in the Financial Markets",
  },
  { title: "03. Financial Markets", subtitle: "Trading Terminology" },
  {
    title: "04. Financial Markets",
    subtitle: "CFD - Contracts For Difference",
  },
];

const forexLessons = [
  {
    title: "01. Forex",
    subtitle: "What is Forex and how it differs from other markets",
  },
  { title: "02. Forex", subtitle: "Forex Market Structure and Participants" },
  {
    title: "03. Forex",
    subtitle: "What is traded in Forex? Currencies and Correlations",
  },
  { title: "04. Forex", subtitle: "Forex Trading Hours and Sessions" },
  {
    title: "05. Forex",
    subtitle:
      "Technical, Fundamental, Sentiment and Statistical Analysis. Which one is best?",
  },
  { title: "06. Forex", subtitle: "Margin Trading" },
];

const technicleLessons = [
  { title: "01. Technical Analysis", subtitle: "Japanese Candlesticks" },
  { title: "02. Technical Analysis", subtitle: "Types of Trading Charts" },
  {
    title: "03. Technical Analysis",
    subtitle: "Market Environment – Ranges vs Trends",
  },
  { title: "04. Technical Analysis", subtitle: "Support and Resistance" },
  { title: "05. Technical Analysis", subtitle: "Supply and Demand Trading" },
  { title: "06. Technical Analysis", subtitle: "Chart Patterns Trading" },
  { title: "07. Technical Analysis", subtitle: "Fibonacci Trading" },
  { title: "08. Technical Analysis", subtitle: "Technical Indicators" },
  { title: "09. Technical Analysis", subtitle: "Divergence Trading" },
  {
    title: "10. Technical Analysis",
    subtitle: "How to spot breakouts and fakeouts",
  },
  { title: "11. Technical Analysis", subtitle: "Multiple Timeframe Analysis" },
];

const statisticLessons = [
  {
    title: "01. Statistical Analysis",
    subtitle: "Backtesting a trading strategy",
  },
  { title: "02. Statistical Analysis", subtitle: "Statistical Application" },
];

const fundamentalLessons = [
  {
    title: "01. Fundamental Analysis",
    subtitle: "Fundamental Indicators",
  },
  { title: "02. Fundamental Analysis", subtitle: "Economic Calendar" },
  {
    title: "03. Fundamental Analysis",
    subtitle: "Risk-on VS Risk-off",
  },
  { title: "04. Fundamental Analysis", subtitle: "Market Correlations" },
];

const sentimentalLessons = [
  {
    title: "01. Sentimental Analysis",
    subtitle: "How to read COT",
  },
];

const overallLessons = [
  {
    title: "01. Putting it all together",
    subtitle: "How to build a robust trading strategy",
  },
  {
    title: "02. Putting it all together",
    subtitle: "Risk management",
  },
  {
    title: "03. Putting it all together",
    subtitle: "Trading Plan",
  },
];

const platformLessons = [
  {
    title: "01. Trading Platforms",
    subtitle: "MetaTrader 4 Guide",
  },
  {
    title: "02. Trading Platforms",
    subtitle: "MetaTrader 5 Guide",
  },
  {
    title: "03. Trading Platforms",
    subtitle: "cTrader Guide",
  },
];

const evaluationLessons = [
  {
    title: "01. FMF Evaluation Process",
    subtitle: "Minimum Trading Days",
  },
  {
    title: "02. FMF Evaluation Process",
    subtitle: "Maximum Daily Loss",
  },
  {
    title: "03. FMF Evaluation Process",
    subtitle: "Maximum Loss",
  },
  {
    title: "04. FMF Evaluation Process",
    subtitle: "Profit Target",
  },
];

const AcademyWeb = () => {
  const theme = useTheme();

  const handleVisitLink = () => {
    window.open("https://www.napolixtrading.com/", "_blank");
  };

  return (
    <>
      <div className="mx-5 md:mx-12 xl:mx-32 mt-12 z-10">
        <div className="text-center">
          <Typography
            sx={{
              fontWeight: 600,
              fontFamily: "Poppins",
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: 64,
            }}
          >
            FMF Academy
          </Typography>
          <Typography sx={{ fontWeight: 400, color: "#646464", fontSize: 20 }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            quia, dolores blanditiis eius hic iste vero assumenda voluptatum
            ducimus.
          </Typography>
          <div className="text-start">
            <Typography
              sx={{
                fontWeight: 600,
                color: theme.palette.mode === "light" ? "black" : "white",
                fontSize: 36,
                mt: 9,
              }}
            >
              Want to learn how to become a profitable trader?
            </Typography>
            <Typography
              sx={{ fontWeight: 400, color: "#646464", fontSize: 20, mt: 2 }}
            >
              Join our head of trading and partners by becoming part of the
              Napolix community. <br />
              <br /> Napolix is an educational platform/community that connects
              like-minded people seeking freedom and work/life independence.
              Napolix isn’t a signal group, on the contrary, it educates,
              teaches, and mentors individuals in the community to become
              profitable traders! <br />
              <br /> By joining the community, you will gain instant access to
              the Napolix Trader’s journey blue print: <br />
              <br /> Services include weekly strategy sessions, specific
              tier-one data strategy previews, live trading sessions, weekly
              institutional flow classes, and weekly market wrap-ups! <br />
              <br /> It offers daily content such as; technical analysis,
              macro/fundamental analysis, and trade set-ups
            </Typography>
          </div>
        </div>
      </div>
      <hr className="bg-[#C6C6C6] my-16" />
      <div className="mx-5 md:mx-12 xl:mx-32 mt-12 z-10">
        {" "}
        <div className="text-start">
          <Typography
            sx={{
              fontWeight: 600,
              color: theme.palette.mode === "light" ? "black" : "white",
              fontSize: 36,
              mt: 9,
            }}
          >
            FMF Academy for free!
          </Typography>
          <Typography
            sx={{
              fontWeight: 400,
              color: "#5B1CD4 !important",
              fontSize: 20,
              mt: 2,
            }}
          >
            Kickstart your trading career, and learn everything about Trading
          </Typography>
          <Typography
            sx={{ fontWeight: 400, color: "#646464", fontSize: 20, mt: 2 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed,
            aperiam, inventore consectetur ab labore mollitia quo distinctio
            nobis nisi quibusdam voluptatum. Quasi ea blanditiis porro itaque
            quas temporibus quisquam accusamus.
          </Typography>
          <div className="mt-6">
            <button className="bg-[#5B1CD4] rounded-[6px] px-4 lg:px-16 font-[Montserrat] text-[12px] font-medium py-[10px]">
              Register
            </button>
          </div>
        </div>
        <video
          className="mt-6 w-full"
          controls
          poster="/Images/academy-video-image.png"
        >
          <source src="" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={handleVisitLink}
          className="bg-[#5B1CD4] rounded-[6px] px-4 lg:px-16 font-[Montserrat] text-[12px] font-medium py-[10px] mt-6"
        >
          Visit Community
        </button>
        {/* <h3 className="font-[Poppins] font-semibold text-[30px] mt-4">
          Quick access:
        </h3>
        <p className="font-[Poppins] font-semibold text-[16px] text-[#5B1CD4]">
          Lessons
        </p>
        <hr className="bg-[#C6C6C6] my-8" />
        <div className="flex flex-wrap justify-between gap-2 lg:gap-0">
          <div>
            <p className="font-[Poppins] font-semibold text-[14px]">
              Basics (Part 1):
            </p>
            <select className="pl-4 lg:pl-10 pr-2 lg:pr-4  py-2 rounded-lg bg-[#151322] font-Inter text-[13.5px] text-[#606573]">
              <option value="">Select category</option>
              <option value="option1">Category 1</option>
              <option value="option2">Category 2</option>
            </select>
          </div>
          <div>
            <p className="font-[Poppins] font-semibold text-[14px]">
              Trading Analysis (Part 2):
            </p>
            <select className="pl-4 lg:pl-10 pr-2 lg:pr-4  py-2 rounded-lg bg-[#151322] font-Inter text-[13.5px] text-[#606573]">
              <option value="">Select category</option>
              <option value="option1">Category 1</option>
              <option value="option2">Category 2</option>
            </select>
          </div>
          <div>
            <p className="font-[Poppins] font-semibold text-[14px]">
              Advanced (Part 3):
            </p>
            <select className="pl-4 lg:pl-10 pr-2 lg:pr-4  py-2 rounded-lg bg-[#151322] font-Inter text-[13.5px] text-[#606573]">
              <option value="">Select category</option>
              <option value="option1">Category 1</option>
              <option value="option2">Category 2</option>
            </select>
          </div>
          <div>
            <p className="font-[Poppins] font-semibold text-[14px]">
              FMF Evaluation Process (Part 4):
            </p>
            <select className="pl-4 lg:pl-10 pr-2 lg:pr-4  py-2 rounded-lg bg-[#151322] font-Inter text-[13.5px] text-[#606573]">
              <option value="">Select category</option>
              <option value="option1">Category 1</option>
              <option value="option2">Category 2</option>
            </select>
          </div>
        </div> */}
        <AcademySection
          lessons={financialLessons}
          buttonColor="#5B1CD4"
          sectionTitle="Financial Markets"
        />
        <AcademySection
          lessons={forexLessons}
          buttonColor="green"
          sectionTitle="Forex"
        />
        <AcademySection
          lessons={technicleLessons}
          buttonColor="orange"
          sectionTitle="Technical Analysis"
        />
        <AcademySection
          lessons={statisticLessons}
          buttonColor="pink"
          sectionTitle="Statistical Analysis"
        />
        <AcademySection
          lessons={fundamentalLessons}
          buttonColor="#6972EA"
          sectionTitle="Fundamental Analysis"
        />
        <AcademySection
          lessons={sentimentalLessons}
          buttonColor="blue"
          sectionTitle="Sentimental Analysis"
        />
        <AcademySection
          lessons={overallLessons}
          buttonColor="#3078A0"
          sectionTitle="Putting it all together"
        />
        <AcademySection
          lessons={platformLessons}
          buttonColor="red"
          sectionTitle="Trading Platforms"
        />
        <AcademySection
          lessons={evaluationLessons}
          buttonColor="grey"
          sectionTitle="FMF Evaluation Process"
        />
      </div>
      <FinancialJourney />
    </>
  );
};

export default AcademyWeb;
