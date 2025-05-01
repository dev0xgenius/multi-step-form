import {
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControlLabel,
  Radio,
  Stack,
  Typography
} from "@mui/material";


export interface BillingCardProps {
  src: string;
  price: number;
  title: string;
  billingPeriod?: "mo" | "yr";
};

export default function BillingCard({
  src, title, price, billingPeriod
}: BillingCardProps) {
  return (
    <FormControlLabel sx={{
      p: 0, m: 0,
      '& > span': {
        display: "block",
        width: "100%"
      }
    }} value={title.toLowerCase()} label={
      <Card component={Container} disableGutters={true} variant="outlined" sx={{
        '&:hover, &.selected': {
          border: 2,
          borderColor: "primary.main",
          bgcolor: "whitesmoke",
        }
      }} >
        <CardContent sx={{ position: "relative" }}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <CardMedia sx={{ width: 40, display: "flex", alignItems: "center" }}>
              <img src={src} width="100%" height="auto" />
            </CardMedia>
            <Stack spacing={0}>
              <Typography fontWeight="500">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {`$${price}/${billingPeriod}`}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </ Card>
    }

      control={
        <Radio sx={theme => ({
          ...theme.mixins.coverParentAbsolutely,
          visibility: "hidden"
        })}
        />
      }
    />
  );
};
