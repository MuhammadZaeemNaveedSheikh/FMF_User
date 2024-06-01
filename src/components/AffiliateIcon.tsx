import { useTheme } from "@mui/material";

const AffiliateIcon = () => {
  const theme = useTheme();
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill={theme.palette.mode === "light" ? "black" : "white"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.75 7.92944C3.75 7.6808 3.84877 7.44235 4.02459 7.26653C4.2004 7.09072 4.43886 6.99194 4.6875 6.99194C8.01625 6.99194 11.26 5.81319 14.4375 3.42944C14.5998 3.30774 14.7972 3.24194 15 3.24194C15.2028 3.24194 15.4002 3.30774 15.5625 3.42944C18.74 5.81319 21.9837 6.99194 25.3125 6.99194C25.5611 6.99194 25.7996 7.09072 25.9754 7.26653C26.1512 7.44235 26.25 7.6808 26.25 7.92944V14.4919C26.25 20.7432 22.5525 25.3369 15.3438 28.1769C15.1229 28.264 14.8771 28.264 14.6562 28.1769C7.4475 25.3369 3.75 20.7419 3.75 14.4919V7.92944ZM5.625 8.83944V14.4919C5.625 19.8119 8.69125 23.7157 15 26.2944C21.3088 23.7157 24.375 19.8119 24.375 14.4919V8.83944C21.1537 8.64944 18.025 7.47694 15 5.33944C11.975 7.47694 8.84625 8.64944 5.625 8.83944ZM16.25 20.7419C16.25 21.0735 16.1183 21.3914 15.8839 21.6258C15.6495 21.8602 15.3315 21.9919 15 21.9919C14.6685 21.9919 14.3505 21.8602 14.1161 21.6258C13.8817 21.3914 13.75 21.0735 13.75 20.7419C13.75 20.4104 13.8817 20.0925 14.1161 19.8581C14.3505 19.6236 14.6685 19.4919 15 19.4919C15.3315 19.4919 15.6495 19.6236 15.8839 19.8581C16.1183 20.0925 16.25 20.4104 16.25 20.7419ZM13.4375 12.9294C13.4375 12.515 13.6021 12.1176 13.8951 11.8246C14.1882 11.5316 14.5856 11.3669 15 11.3669C15.4144 11.3669 15.8118 11.5316 16.1049 11.8246C16.3979 12.1176 16.5625 12.515 16.5625 12.9294C16.5625 13.4882 16.2525 13.8507 15.5875 14.5144L15.5288 14.5732C14.9413 15.1582 14.0625 16.0319 14.0625 17.4294C14.0625 17.6781 14.1613 17.9165 14.3371 18.0924C14.5129 18.2682 14.7514 18.3669 15 18.3669C15.2486 18.3669 15.4871 18.2682 15.6629 18.0924C15.8387 17.9165 15.9375 17.6781 15.9375 17.4294C15.9375 16.8669 16.2487 16.5044 16.9125 15.8419L16.9738 15.7794C17.5613 15.1957 18.4375 14.3232 18.4375 12.9294C18.4375 12.0178 18.0753 11.1434 17.4307 10.4988C16.786 9.85411 15.9117 9.49194 15 9.49194C14.0883 9.49194 13.214 9.85411 12.5693 10.4988C11.9247 11.1434 11.5625 12.0178 11.5625 12.9294C11.5625 13.1781 11.6613 13.4165 11.8371 13.5924C12.0129 13.7682 12.2514 13.8669 12.5 13.8669C12.7486 13.8669 12.9871 13.7682 13.1629 13.5924C13.3387 13.4165 13.4375 13.1781 13.4375 12.9294Z"
        fill={theme.palette.mode === "light" ? "black" : "white"}
      />
    </svg>
  );
};

export default AffiliateIcon;
