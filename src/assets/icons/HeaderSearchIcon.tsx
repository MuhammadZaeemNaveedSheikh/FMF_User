import { useTheme } from "@mui/material";

const HeaderSearchIcon = () => {
  const theme = useTheme();
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          d="M17.4993 18.0003L13.761 14.2553L17.4993 18.0003ZM15.8327 9.25033C15.8327 11.1289 15.0864 12.9306 13.758 14.259C12.4296 15.5874 10.628 16.3337 8.74935 16.3337C6.87073 16.3337 5.06906 15.5874 3.74068 14.259C2.41229 12.9306 1.66602 11.1289 1.66602 9.25033C1.66602 7.37171 2.41229 5.57004 3.74068 4.24165C5.06906 2.91327 6.87073 2.16699 8.74935 2.16699C10.628 2.16699 12.4296 2.91327 13.758 4.24165C15.0864 5.57004 15.8327 7.37171 15.8327 9.25033V9.25033Z"
          stroke={theme.palette.mode === "light" ? "black" : "#DEDEDE"}
          strokeWidth="1.66667"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};

export default HeaderSearchIcon;
