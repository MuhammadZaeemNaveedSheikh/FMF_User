// project imports
import { Typography } from "@mui/material";
import ThemeLayoutWrapper from "../theme/ThemeLayoutWrapper";

import { stylesMui } from "./styles";
import SpecialOffersPageComponent from "../components/SpecialOffersPageComponent";
import FinancialJourney from "../components/FinancialJourney";

const SpecialOffers = () => {
  return (
    <>
      <ThemeLayoutWrapper>
        <section className="w-full flex flex-col items-center py-14 lg:pt-[6.25rem] lg:pb-[8.75rem] z-10">
          <Typography sx={stylesMui.headingPage}>Special Offers</Typography>
          <Typography sx={stylesMui.subHeroText}>
            Here you can see Past and Current Special Offers and the winners.
          </Typography>
          <div>
            <SpecialOffersPageComponent />
          </div>
        </section>
        <FinancialJourney />
      </ThemeLayoutWrapper>
    </>
  );
};

export default SpecialOffers;
