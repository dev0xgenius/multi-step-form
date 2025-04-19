import { Box, Checkbox, FormControl, Stack, Typography } from "@mui/material";

export interface AddOnProps {
  caption: string;
  description: string;
  priceInfo: (string | number)[];
};

export default function AddOn(props: AddOnProps) {
  const [price, billingPeriod] = props.priceInfo;

  return (
    <FormControl sx={{
      paddingY: 2, borderRadius: 4, border: 1, borderColor: "lightgrey",
      '&:hover': {
        border: 2,
        bgcolor: "whitesmoke",
      }
    }}>
      <Stack direction="row" spacing={0}>
        <Checkbox name="add-on" />
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
    </FormControl >
  );
} 
