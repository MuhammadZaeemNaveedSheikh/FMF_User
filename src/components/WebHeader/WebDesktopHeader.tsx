import { NavLink, useLocation } from "react-router-dom";

import { Typography, useTheme } from "@mui/material";

import HeaderEllipse from "../../assets/images/HeaderEllipse.png";
import HeaderStarsLeft from "../../assets/images/HeaderStarsLeft.svg";
import HeaderStarsRight from "../../assets/images/HeaderStarsRight.svg";

import RegisterButton from "./RegisterButton";
import LogoHeaderWeb from "../../assets/icons/LogoHeaderWeb";
import { webHeaderMenuItems } from "../../constants/webHeaderMenuItems";

import LoginButton from "./LoginButton";

const WebDesktopHeader = () => {
  const theme = useTheme();
  const location = useLocation();

  const isNavLinkActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <div
        className="mt-[3.12rem] md:px-8 2xl:px-12 w-full flex justify-between items-center"
        id="toolbar"
      >
        <div
          className="flex justify-center items-center w-[229px] h-[34px]"
          id="logo"
        >
          <NavLink to="/web/" className="logo-link z-10">
            <LogoHeaderWeb />
          </NavLink>
        </div>

        <div
          className="relative flex justify-center items-center rounded-full"
          id="navbar"
        >
          <div className="absolute -top-16">
            <img src={HeaderEllipse} height="100%" />
          </div>
          {theme.palette.mode === "dark" ? (
            <>
              <div className="absolute -top-14 -left-46 xl:-left-96 z-0">
                <img src={HeaderStarsLeft} height="100%" />
              </div>
              <div className="absolute -top-0 -right-46 xl:-right-96 z-0">
                <img src={HeaderStarsRight} height="100%" />
              </div>
            </>
          ) : null}
          {webHeaderMenuItems?.map((item) => (
            <div className="md:px-1 2xl:px-3 z-10" key={item?.id}>
              <NavLink
                to={item.path}
                className={`font-[Montserrat] font-medium text-lg text-white ${
                  isNavLinkActive(item.path)
                    ? "flex items-center bg-white bg-opacity-5 rounded-full m-1 h-10 px-2"
                    : ""
                }`}
              >
                <div className="md:px-1 2xl:px-4 md:py-1 2xl:py-4 flex gap-4 items-center">
                  <div className="link_text text-white">
                    <Typography
                      sx={{
                        color:
                          theme.palette.mode === "light" ? "black" : "#C0C0C0",
                        fontSize: 16,
                        fontWeight: 400,
                      }}
                      variant="body1"
                    >
                      {item.name}
                    </Typography>
                  </div>
                </div>
              </NavLink>
            </div>
          ))}
        </div>

        <div
          className="flex justify-center items-center gap-2 md:gap-3 lg:gap-4"
          id="register-mode"
        >
          <div className="hidden xl:flex gap-2">
            <RegisterButton />
            <LoginButton />
          </div>
          {/* <Tooltip title={`Activate ${activateName} Mode`}>
            <div className="flex items-center">
              <Switch
                checked={theme.palette.mode === "dark"}
                onChange={switchColorMode}
                color="default"
                icon={<LightModeIcon style={{ fill: "#FFD700" }} />}
                checkedIcon={<DarkModeIcon style={{ fill: "#fff" }} />}
                sx={{
                  height: "43px",
                  width: "61px",
                  borderRadius: "100px",
                  padding: "0px",
                  backgroundColor: isLight ? "#79D7ED" : "#39598A",
                }}
              />
            </div>
          </Tooltip> */}
        </div>
      </div>
      <div className="flex justify-end xl:hidden gap-6 mt-4 mx-9">
        <RegisterButton />
        <LoginButton />
      </div>
    </>
  );
};

export default WebDesktopHeader;
