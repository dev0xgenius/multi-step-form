import { Card, CardContent, CardMedia, Container, Stack, Typography } from "@mui/material";

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
        borderRadius: 4,
        bgcolor: "whitesmoke"
      }
    }}>
      <CardContent>
        <Stack direction="row" sx={{ alignItems: "center" }}>
          <CardMedia sx={{ width: 50, mt: 1.1 }}>
            <img src={src} width="100%" height="auto" />
          </CardMedia>
          <Stack spacing={0}>
            <Typography variant="caption" sx={{ fontSize: "1.236rem", fontWeight: "500" }}>
              {title}
            </Typography>
            <Typography color="textSecondary">{`$${price}/${billingPeriod}`}</Typography>
          </Stack>
        </Stack>
      </CardContent>
    </Card >
  );
};

