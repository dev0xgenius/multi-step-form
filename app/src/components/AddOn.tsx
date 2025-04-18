import { Box, Card, Checkbox, FormControl, Stack, Typography } from "@mui/material";

export interface AddOnProps {
  caption: string;
  description: string;
  priceInfo: [number, string];
};

export default function AddOn(props: AddOnProps) {
  const [price, billingPeriod] = props.priceInfo;

  return (
    <FormControl sx={{
      paddingY: 2, borderRadius: 2, border: 1, borderColor: "grey",
      '&:hover': {
        border: 2,
        bgcolor: "whitesmoke",
        borderColor: "secondary.main",
      }
    }}>
      <Stack direction="row" spacing={1}>
        <Checkbox name="add-on" />
        <Box>
          <Typography fontWeight="500">{props.caption}</Typography>
          <Typography variant="body2" color="grey">
            {props.description}
          </Typography>
        </Box>
        <Box sx={{
          m: "auto", marginRight: 2, color: "grey"
        }}>
          {`$${price}/${billingPeriod}`}
        </Box>
      </Stack>
    </FormControl>
  );
} 
