import { useTheme } from "@mui/material";

const Header = () => {
  const theme = useTheme();
  return (
    <div id="header-msg" className="font-[Inter] font-normal">
      <h1
        className={`text-[20px] ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-[#DFDFE0]"
        }`}
      >
        Good Morning, Trader!
      </h1>
      <p
        className={`text-[12.5px] ${
          theme.palette.mode === "light" ? "text-gray-700" : "text-[#565A67]"
        }`}
      >
        Here's what's happening with your account today.
      </p>
    </div>
  );
};

export default Header;
