// import { useMediaQuery } from "@mui/material";

export const InputProps = {
  notched: false,
  color: "primary",
  // size: "small",
  sx: {
    borderRadius: 0.35,
  },
} as const;

export const InputLabelProps = {
  size: "small",
  shrink: true,
  disableAnimation: true,
  sx: {
    position: "static",
    color: "primary.main",
    transform: "none",
  },
};

export const HelperTextProps = {
  sx: { position: "absolute", right: 0 },
} as const;

export const TextFieldDefaultProps = {
  margin: "dense",
  slotProps: {
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
