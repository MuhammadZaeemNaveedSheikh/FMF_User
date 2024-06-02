export const stylesMui = {
  generalText: {
    display: "flex",
    alignSelf: "stretch",
    mb: "1rem",
    fontFamily: "Montserrat",
    fontSize: "0.625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "187.117%",
  },
  redirectText: {
    mt: "0.62rem",
    textAlign: "center",
    fontFamily: "Raleway",
    fontSize: "0.875rem",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "1.5rem",
  },
  inputField: {
    "& .MuiOutlinedInput-root": {
      "& > fieldset": {
        borderRadius: "0.375rem",
      },
    },
    "& .Mui-error": {
      fontSize: "14px",
    },
  },
  inputLabel: {
    mb: "0.5rem",
    fontFamily: "Montserrat",
    fontSize: { xs: "0.9rem", md: "1rem" },
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "normal",
  },
  checkboxText: {
    fontFamily: "Montserrat",
    fontSize: "0.625rem",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "normal",
  },
  buttonAuth: {
    height: "2.75rem",
    color: "var(--2, #FFF)",
    display: "flex",
    padding: "0.75rem 0rem",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.625rem",
    alignSelf: "stretch",
    fontWeight: 600,
    borderRadius: "0.375rem",
    background: "var(--3, #986AEB) !important",
    textTransform: "capitalize",
  },
  buttonText: {
    color: "var(--2, #FFF)",
    fontFamily: "Montserrat",
    fontSize: "1rem",
    fontWeight: 600,
    lineHeight: "normal",
  },
};