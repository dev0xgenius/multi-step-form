import { Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { useState, type ChangeEventHandler } from "react";

export interface AddOnProps {
  caption: string;
  description: string;
  priceInfo: (string | number)[];
  handleChange: ChangeEventHandler;
}

export default function AddOn(props: AddOnProps) {
  const inputValue = props.caption.split(" ").join("-");
  const [price, billingPeriod] = props.priceInfo;

  return (
    <FormControlLabel sx={{
      paddingY: 2, borderRadius: 1, border: 1, borderColor: "lightgrey",
      '&:hover': {
        border: 2,
        bgcolor: "whitesmoke",
      },
    }} label={
      <Stack direction="row" spacing={0}>
        <Box>
          <Typography fontWeight="500">{props.caption}</Typography>
          <Typography variant="body2" color="grey">
            {props.description}
          </Typography>
        </Box>
        <Box sx={{ m: "auto", marginRight: 2, color: "grey", typography: "body2" }}>
          {`$${price}/${billingPeriod}`}
        </Box>
      </Stack>
    }
      control={
        <Checkbox
          onChange={props.handleChange}
          value={inputValue.toLowerCase()}
        />
      }
    />
  );
} 
