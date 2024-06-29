import { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Button, Typography, useTheme } from "@mui/material";

import CtaRightIcon from "../../assets/icons/CtaRightIcon";
import VerticalSeparator from "../../assets/icons/VerticalSeparator";
import DiscordIcon from "../../assets/images/landing/discordJoinSocialsButton.png";
import TelegramIcon from "../../assets/images/landing/telegramJoinSocialsButton.png";
// import InstagramIcon from "../../assets/images/landing/instagramJoinSocialsButton.png";
// import XIcon from "../../assets/images/landing/twitterJoinSocialsButton.png";
// import HeroImage from "../../assets/images/landing/heroImage.png";

import { stylesMui } from "./styles";

interface HeroSectionProps {
  isTraditional: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isTraditional }) => {
  const theme = useTheme();
  const videoRef = useRef<HTMLDivElement>(null);

  const getBorderStyles = (theme) => ({
    border: `1px solid ${theme.palette.mode === "light" ? "black" : "white"}`,
  });

  // const videoUrl = isTraditional
  //   ? "https://youtu.be/93GiEpabCb4"
  //   : "https://youtu.be/P0ZiGz2k-bs";

  // const videoUrl = isTraditional
  //   ? "https://youtu.be/93GiEpabCb4?si=-uD-ZjmyVWn6fOZu"
  //   : "https://youtu.be/P0ZiGz2k-bs?si=DNpUwEQ4kQBDASMa";

  // const videoUrl = isTraditional
  //   ? "https://www.youtube.com/embed/93GiEpabCb4?si=rX-PkpBr36baeVok"
  //   : "https://www.youtube.com/embed/P0ZiGz2k-bs?si=xF6edEy6bcuRDeNp";

  const videoId = isTraditional ? "93GiEpabCb4" : "P0ZiGz2k-bs";

  useEffect(() => {
    AOS.init();

    // Load YouTube IFrame API
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName("script")[0];
    if (firstScriptTag?.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).onYouTubeIframeAPIReady = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      new (window as any).YT.Player(videoRef.current, {
        videoId: videoId,
        width: "150%",
        height: "540px",
        events: {
          onReady: (event) => {
            event.target.playVideo();
            event.target.mute();
          },
        },
        playerVars: {
          autoplay: 1,
          loop: 1,
          playlist: videoId,
          controls: 0,
          showinfo: 0,
          modestbranding: 1,
          rel: 0,
        },
      });
    };
  }, []);

  return (
    <section className="flex flex-col items-center justify-center">
      <div
        className="w-[65%] mb-7 md:mb-11 flex flex-col items-center"
        id="text-section"
      >
        <div className="w-full flex flex-col gap-4 items-center mb-[1.63rem]">
          <Typography sx={stylesMui.pageTitle}>
            {isTraditional ? "Get Fully Managed Funded" : "Revolutionize Your"}
          </Typography>
          <Typography sx={{ ...stylesMui.pageTitle, color: "#5B1CD4" }}>
            {isTraditional ? "& Earn Automated Passive Income" : "Trading Game"}
          </Typography>
          <Typography sx={stylesMui.subHeroText}>
            Institutional execution environment advanced <br />
            dashboard & analytics
          </Typography>
        </div>
        <div className="w-full flex flex-col md:flex-row  justify-center gap-6">
          <Button sx={stylesMui.ctaButton}>
            <Typography sx={stylesMui.ctaButtonText}>Get Funded</Typography>
            <CtaRightIcon />
          </Button>
          {!isTraditional && (
            <Button
              id="socials-button"
              sx={{ ...stylesMui.socialsButton, ...getBorderStyles(theme) }}
            >
              <div className="flex gap-2">
                <Typography sx={{ lineHeight: { xs: "1rem", md: "1.8rem" } }}>
                  Join our Socials
                </Typography>
                <img src={DiscordIcon} width="24px" height="24px" />
                <img src={TelegramIcon} width="24px" height="24px" />
              </div>
            </Button>
          )}
        </div>
        <div className="flex mt-4 gap-8 lg:gap-16">
          <div>
            <p
              className="text-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 42.71%, #636363 86.46%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Instant Payouts
            </p>
            <p className="flex text-[15.5px] justify-center">Available</p>
          </div>
          <div>
            <p
              className="text-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 42.71%, #636363 86.46%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              6%
            </p>
            <p className="flex text-[15.5px] justify-center">Profit Targets</p>
          </div>
          <div>
            <p
              className="text-center"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #FFFFFF 42.71%, #636363 86.46%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              1-5%
            </p>
            <p className="flex text-[15.5px] justify-center">Profit Targets</p>
          </div>
        </div>
      </div>

      <div
        className="w-full md:w-11/12 xl:w-[80%] mb-10 md:mb-16 flex-col items-center z-10 justify-center"
        id="hero-video"
        data-aos="fade-down"
        data-aos-duration="4000"
      >
        <div className="flex justify-center">
          {/* <video
            src={videoUrl}
            autoPlay
            loop
            muted
            className="w-full h-full z-[9999]"
            playsInline
          /> */}
          {/* <iframe
            width="100%"
            height="540px"
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          /> */}
          {/* <div ref={videoRef} className="w-full h-[540px]" /> */}
          <div ref={videoRef} className="" />
        </div>
      </div>

      <div
        className="w-11/12 flex justify-between px-6 md:px-10 xl:px-20 mb-12 md:mb-[5.48rem]"
        id="numbers"
      >
        {isTraditional ? (
          <div className="bg-[#131119] border border-solid border-[#CACACA] rounded-[6px] flex flex-wrap lg:flex-nowrap justify-around w-full 2xl:px-12">
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>5%</Typography>
              <Typography sx={stylesMui.subHeroText}>
                Monthly Returns
              </Typography>
            </div>
            <VerticalSeparator />
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>1M$</Typography>
              <Typography sx={stylesMui.subHeroText}>
                Trading Account
              </Typography>
            </div>
            <VerticalSeparator />
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>50K</Typography>
              <Typography sx={stylesMui.subHeroText}>Gross Profit</Typography>
            </div>
            <VerticalSeparator />
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>10X</Typography>
              <Typography sx={stylesMui.subHeroText}>Your ROI</Typography>
            </div>
          </div>
        ) : (
          <>
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>183+</Typography>
              <Typography sx={stylesMui.subHeroText}>Countries</Typography>
            </div>
            <VerticalSeparator />
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>10K+</Typography>
              <Typography sx={stylesMui.subHeroText}>Traders</Typography>
            </div>
            <VerticalSeparator />
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>2022</Typography>
              <Typography sx={stylesMui.subHeroText}>
                Funding Traders Since
              </Typography>
            </div>
            <VerticalSeparator />
            <div
              className="flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="6000"
            >
              <Typography sx={stylesMui.countNumbersPrimary}>
                4hr Avg
              </Typography>
              <Typography sx={stylesMui.subHeroText}>
                Performance fee disbursal
              </Typography>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
