// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";
import ContactComponent from "../components/ContactComponent";
import Map from "../assets/images/worldMap.png";

import { stylesMui } from "./styles";

const Contact = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.headingPage}>Contact Us!</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Any question or remarks? Just write us a message!
          </Typography>
          <div className="w-[80%] mt-14 md:mt-[5.25rem] z-10">
            <ContactComponent />
          </div>

          <div className="my-10 flex flex-col justify-center items-center text-center">
            <Typography
              sx={{
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "white",
                fontSize: 36,
              }}
            >
              People Are using <br />{" "}
              <span className="text-[#5B1CD4]">
                Fully Managed Funding Around The Globe
              </span>
            </Typography>
            <div className="px-20 lg:px-52">
              <Typography
                sx={{ fontWeight: 400, color: "#646464", fontSize: 20 }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                id assumenda dolor consequatur sequi, quia laudantium ducimus
                error in enim ut animi, laborum magnam nisi dolores neque libero
                voluptas quasi!
              </Typography>
            </div>
          </div>
          <img src={Map} alt="world map" className="w-[80%]" />
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Contact;
