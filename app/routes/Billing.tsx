import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Stack,
  Switch,
  Typography
} from "@mui/material";
import type { Route } from "./+types/Billing";

import advancedSvg from "../src/assets/images/icon-advanced.svg";
import arcadeSvg from "../src/assets/images/icon-arcade.svg";
import proSvg from "../src/assets/images/icon-pro.svg";

export interface BillingCardProps {
  src: string;
  price: number;
  title: string;
  billingPeriod?: "mo" | "yr";
};


export function BillingCard({ src, price, billingPeriod, title }: BillingCardProps) {
  return (
    <Card>
      <CardContent style={{
        display: "flex", flexDirection: "row", gap: "1rem",
        alignItems: "center"
      }}>
        <CardMedia component="div">
          <img src={src} />
        </CardMedia>
        <Stack spacing={0}>
          <Typography variant="body2" style={{ fontWeight: "bold" }}>{title}</Typography>
          <Typography>{`$${price}/${billingPeriod}`}</Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default function Billing({ }: Route.ComponentProps) {
  return (
    <Card>
      <CardHeader
        title="Select your plan"
        subheader="You have the option of monthly and yearly billing"
      />
      <CardContent>
        <Stack useFlexGap={true} spacing="1rem">
          {[["Arcade", 2], ["Pro", 1], ["Advanced", 1]].map(([tag, price], index) => (
            <BillingCard
              title={typeof tag == "string" && tag || ""}
              price={typeof price == "number" && price || 0}
              billingPeriod="mo"
              src={
                (tag == "Arcade" && arcadeSvg) ||
                (tag == "Pro" && proSvg) ||
                (tag == "Advanced" && advancedSvg) || ""
              }
              key={index}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions>
        <Stack useFlexGap={true} spacing="1rem" direction="row" style={{ alignItems: "center" }}>
          <Typography>Monthly</Typography>
          <Switch />
          <Typography>Yearly</Typography>
        </Stack>
      </CardActions>
    </Card>
  );
};
