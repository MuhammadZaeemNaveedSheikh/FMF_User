import { Button, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginButton = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the "/sign-up" route
    navigate("/web/login");
  };

  return (
    <Button
      color="inherit"
      onClick={handleClick} // Handle the click event
      sx={{
        py: { md: "0.25rem", xl: "0.75rem" },
        px: { md: "0.5rem", xl: "1.75rem" },
        borderRadius: "6px",
        backgroundColor: "#5B1CD4 !important",
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 400,
          fontSize: 16,
          textTransform: "capitalize",
          color: theme.palette.mode === "light" ? "black" : "white",
        }}
      >
        Log In
      </Typography>
    </Button>
  );
};

export default LoginButton;
