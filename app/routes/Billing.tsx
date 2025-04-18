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

import BillingCard from "~/src/components/BillingCard";

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
