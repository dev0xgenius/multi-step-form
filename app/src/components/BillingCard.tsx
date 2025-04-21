import { Badge, Card, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";

export interface BillingCardProps {
  src: string;
  price: number;
  title: string;
  billingPeriod?: "mo" | "yr";
};

export default function BillingCard({ src, price, billingPeriod, title }: BillingCardProps) {
  return (
    <Card variant="outlined" sx={{
      '&:hover, &.selected': {
        border: 2,
        borderColor: "primary.main",
        bgcolor: "whitesmoke",
      }
    }}>
      <CardContent>
        <Stack direction="row" alignItems="center" spacing={2}>
          <CardMedia sx={{ width: 40, display: "flex", alignItems: "center" }}>
            <img src={src} width="100%" height="auto" />
          </CardMedia>
          <Stack spacing={0}>
            <Typography sx={{ fontWeight: "500" }}>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              {`$${price}/${billingPeriod}`}
            </Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card >
  );
};

