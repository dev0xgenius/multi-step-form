export const InputProps = {
  notched: false,
  color: "primary",
  size: "small",
  sx: {
    "&.Mui-error": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "custom.strawberryRed.main",
      },
    },
    "&:hover": {
      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "secondary.dark",
      },
    },
    color: "primary.main",
    fontWeight: 500,
    p: 0.5,
    borderRadius: { xs: 0.35, md: 0.85 },
  },
} as const;

export const InputLabelProps = {
  size: "small",
  shrink: true,
  disableAnimation: true,
  sx: {
    position: "static",
    transform: "none",
    color: "primary.main",
  },
};

export const HelperTextProps = {
  sx: { position: "absolute", right: 0, fontWeight: 500, fontSize: 14 },
} as const;

export const TextFieldDefaultProps = {
  margin: "dense",
  slotProps: {
    root: { sx: { gap: 0.5 } },
    htmlInput: {
      sx: {
        "&::placeholder": {
          opacity: "1",
          color: "neutral.coolGray",
          fontWeight: "500",
        },
      },
    },
    inputLabel: { ...InputLabelProps },
    input: { ...InputProps },
    formHelperText: { ...HelperTextProps },
  },
} as const;
