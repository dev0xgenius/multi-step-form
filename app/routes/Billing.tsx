import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  CircularProgress,
  FormGroup,
  Stack,
  Switch,
  Typography
} from "@mui/material";
import type { Route } from "./+types/Billing";

import advancedSvg from "../src/assets/images/icon-advanced.svg";
import arcadeSvg from "../src/assets/images/icon-arcade.svg";
import proSvg from "../src/assets/images/icon-pro.svg";
import { Suspense } from "react";
import { Await } from "react-router";

export interface BillingCardProps {
  src: string;
  price: string;
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

export async function loader({ params }: Route.LoaderArgs) {
  let billing = { "Arcade": 9, "Advanced": 12, "Pro": 15 }
  let billingInfo = new Promise(resolve =>
    setTimeout(() => resolve(billing), 2000));

  return { billingInfo }
};

export default function Billing({ loaderData }: Route.ComponentProps) {
  let { billingInfo } = loaderData;

  return (
    <Card>
      <CardHeader
        title="Select your plan"
        subheader="You have the option of monthly and yearly billing"
      />
      <CardContent>
        <Suspense fallback={<CircularProgress />}>
          <Await resolve={billingInfo} errorElement={<div>It failed Wolvely</div>}>
            {resolvedBillingInfo => (
              <Stack useFlexGap={true} spacing="1rem" direction="column">
                {
                  Object.keys(resolvedBillingInfo).map((data, index) => (
                    <BillingCard
                      key={index}
                      src={data == "Arcade" ? arcadeSvg :
                        data == "Advanced" ? advancedSvg :
                          data == "Pro" ? proSvg : ""
                      }
                      price={resolvedBillingInfo[data]}
                      title={data}
                      billingPeriod="mo"
                    />
                  ))
                }
              </Stack>
            )}
          </Await>
        </Suspense>
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
