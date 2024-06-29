import PolicyNav from "./PolicyNav";
import { Typography } from "@mui/material";

import { stylesMui } from "./styles";

const ReturnPageComponent = () => {
  return (
    <section className="w-full flex flex-col justify-center items-start md:flex-row">
      <div
        className="w-full flex justify-between px-8 md:px-14 xl:px-20 mt-8 md:mt-14 xl:mt-[6.25rem]"
        id="content-nav"
      >
        <div className="w-full md:w-[70%]" id="content">
          <Typography sx={{ ...stylesMui.policyHeadings, mb: "1rem" }}>
            Refunds
          </Typography>
          <Typography sx={stylesMui.policyText}>
            All sales are final and no refund will be issued.
          </Typography>
        </div>
        <div className="w-[27%] hidden md:block" id="nav">
          <PolicyNav />
        </div>
      </div>
    </section>
  );
};

export default ReturnPageComponent;
