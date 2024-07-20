import { Typography, useTheme } from "@mui/material";

interface ChallengeData {
  iconSrc: string;
  title: string;
  value: string;
}

const InfoCards = () => {
  const theme = useTheme();
  const data: ChallengeData[] = [
    {
      iconSrc: "/Images/total-customers.png",
      title: "Total Customers",
      value: "1132",
    },
    {
      iconSrc: "/Images/packages-sold.png",
      title: "Packages Sold",
      value: "2713",
    },
    {
      iconSrc: "/Images/total-revenue.png",
      title: "Total Revenue",
      value: "$14,500",
    },
    {
      iconSrc: "/Images/monthly-revenue.png",
      title: "Monthly Revenue",
      value: "$8,500",
    },
  ];
  return (
    <div
      id="info-cards"
      className="mt-6 flex flex-wrap lg:flex-nowrap gap-2 lg:gap-6 justify-center lg:justify-between"
    >
      {data.map((item, index) => (
        <div
          key={index}
          className={`w-1/3 lg:w-full rounded-2xl cursor-pointer ${
            theme.palette.mode === "light" ? "bg-gray-100" : "bg-[#151322]"
          } p-1 md-p-3 lg:p-6`}
        >
          <div className="flex justify-between items-center">
            <img src={item.iconSrc} alt={`Icon for ${item.title}`} />
            <div className="flex flex-col justify-center items-start">
              <Typography
                sx={{
                  fontWeight: 400,
                  color: "#606573",
                  fontSize: 12.5,
                  fontFamily: "Inter",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  color: theme.palette.mode === "light" ? "black" : "white",
                  fontSize: 21,
                  fontFamily: "Inter",
                }}
              >
                {item.value}
              </Typography>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InfoCards;
