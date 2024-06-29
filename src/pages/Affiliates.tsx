// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import AffiliatePortalWeb from "../components/AffiliatePortalWeb";

import { stylesMui } from "./styles";

const Affiliates = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem]">
          <Typography sx={stylesMui.pageTitle}>
            Become an <span className="text-[#5B1CD4]">Affiliate</span>{" "}
            Two-level
            <span className="text-[#5B1CD4]">
              <pre></pre>Program
            </span>
          </Typography>
          <Typography sx={stylesMui.subHeroText}>
            Refer a friend and enjoy passive income rewards!
          </Typography>
          <div>
            <AffiliatePortalWeb />
          </div>
        </section>
      </ThemeLayoutWrapper>
    </>
  );
};

export default Affiliates;
