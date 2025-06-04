import {
  Box,
  Checkbox,
  FormControlLabel,
  Stack,
  Typography,
  type CSSProperties,
} from "@mui/material";
import { useState } from "react";
import { useOutletContext } from "react-router";
import type { OutletContext, Price } from "~/lib/types";
import { capitalize } from "~/lib/utils";

export interface AddOnProps {
  caption: string;
  description: string;
  price: Price;
  readOnly?: boolean;
}

export default function AddOn(props: AddOnProps) {
  const inputValue = props.caption;
  const { formState } = useOutletContext<OutletContext>();
  const {
    plan: { billingPeriod },
  } = formState;

  const [isChecked, setIsChecked] = useState(!!formState.extras[inputValue]);

  let stylingControlled: CSSProperties = {
    display: "flex",
    gap: 1,
    m: 0,
    p: 1,
    py: 2,
    borderRadius: 1,
    border: isChecked ? 2 : 1,
    bgcolor: (isChecked && "neutral.alabaster") || undefined,
    borderColor: (isChecked && "secondary.dark") || "neutral.lightGray",

    "&:hover": { bgcolor: "neutral.alabaster" },
    "& .MuiTypography-root": { width: "100%" },
    "& .MuiCheckbox-root": {
      "&.Mui-checked": {
        "& .MuiSvgIcon-root": { color: "secondary.main" },
      },
      "& .MuiSvgIcon-root": { color: "neutral.lightGray" },
    },
  };

  const stylingReadOnly: CSSProperties = {
    display: "flex",
    width: "100%",
    m: 0,
    justifyContent: "space-between",

    "& .MuiTypography-root": {
      width: "100%",
      fontWeight: "normal",
      color: "neutral.coolGray",
    },
    "& .MuiCheckbox-root": { display: "none" },
    "& .desc": { display: "none" },
  };

  return (
    <FormControlLabel
      name="add-on"
      value={inputValue}
      disabled={props.readOnly}
      sx={props.readOnly ? stylingReadOnly : stylingControlled}
      label={
        <Stack direction="row">
          <Box>
            <Typography fontWeight="500" color="primary">
              {capitalize(props.caption.replace("-", " "))}
            </Typography>
            <Typography
              variant="body2"
              color="neutral.coolGray"
              className="desc"
            >
              {props.description}
            </Typography>
          </Box>
          <Box
            sx={{
              m: "auto",
              mr: 0.75,
              alignSelf: "center",
              color:
                (props.readOnly && "primary.main") ||
                (isChecked ? "secondary.dark" : "neutral.coolGray"),
              typography: "body2",
            }}
          >
            {`+$${props.price[billingPeriod]}/${billingPeriod}`}
          </Box>
        </Stack>
      }
      control={
        <Checkbox
          checked={isChecked}
          onChange={(e, checked) => setIsChecked(checked)}
          color="secondary"
        />
      }
    />
  );
}
