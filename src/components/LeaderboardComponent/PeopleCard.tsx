import { Avatar, Box, Typography, useTheme } from "@mui/material";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

import { stylesMui } from "./styles";

interface PeopleCardProps {
  index: string;
  avatarImg: string;
  name: string;
  number: string;
  amount: string;
  isAffiliates?: boolean;
}

const PeopleCard: React.FC<PeopleCardProps> = ({
  index,
  avatarImg,
  name,
  number,
  amount,
  isAffiliates = false,
}) => {
  const theme = useTheme();
  return (
    <Box sx={stylesMui.personCard}>
      <div
        // className="w-[300px] md:w-[600px] xl:w-[650px] flex justify-between items-center"
        className={`${
          isAffiliates ? "w-auto" : "w-[300px] md:w-[600px] xl:w-[650px] "
        } flex justify-between items-center rounded-lg ${
          theme.palette.mode === "light"
            ? "bg-gray-700 p-4 bg-opacity-5"
            : "bg-white bg-opacity-[0.005]"
        } `}
        id="person"
      >
        <div className="flex justify-center items-center">
          <Typography sx={stylesMui.indexText}>{index}</Typography>
          <div className="mx-3">
            <Avatar src={avatarImg} sx={{ width: 40, height: 40 }} />
          </div>
          <div className="flex flex-col">
            <Typography sx={stylesMui.personName}>{name}</Typography>
            <Typography sx={stylesMui.traderText}>{number}</Typography>
          </div>
        </div>
        {isAffiliates ? (
          ""
        ) : (
          <div className="flex flex-col items-center">
            <Typography sx={stylesMui.amountText}>
              Trading Strategy # 1
            </Typography>
            <button className="bg-[#5B1CD4] text-white py-2 px-4 rounded text-[8px] font-semibold font-[Poppins]">
              Copy This Strategy <ArrowOutwardIcon fontSize="small" />
            </button>
          </div>
        )}
        {isAffiliates ? (
          ""
        ) : (
          <Typography sx={stylesMui.amountText}>{amount}</Typography>
        )}
      </div>
    </Box>
  );
};

export default PeopleCard;
