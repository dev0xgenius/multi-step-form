import {
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  CircularProgress,
  FormControl,
  FormGroup,
  FormLabel,
  Skeleton,
  Stack,
  Typography
} from "@mui/material";
import type { Route } from "./+types/AddOns";
import { Suspense, useState, useEffect } from "react";
import { Await } from "react-router";

export interface AddOnProps {
  caption: string;
  description: string;
  priceInfo: [number, string];
};

export function AddOn(props: AddOnProps) {
  const [price, billingPeriod] = props.priceInfo;

  return (
    <FormGroup row={true}>
      <Checkbox name="add-on" />
      <Box>
        <Typography variant="caption">{props.caption}</Typography>
        <Typography variant="body2">{props.description}</Typography>
      </Box>
      <span style={{ margin: "auto", marginRight: "0" }}>{`$${price}/${billingPeriod}`}</span>
    </FormGroup>
  );
}

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  let data = new Promise((resolve: (value: AddOnProps[]) => void) => {
    setTimeout(() =>
      resolve([
        {
          caption: "Online Service",
          description: "Access to multiplayer games",
          priceInfo: [1, "mo"]
        },
        {
          caption: "Larger Storage",
          description: "Extra 1TB of cloud save",
          priceInfo: [2, "mo"]
        },
        {
          caption: "Customizable Profile",
          description: "Custom theme on your profile",
          priceInfo: [2, "mo"]
        }
      ]), 3000)
  });

  return { data };
};

export default function AddOns({ loaderData }: Route.ComponentProps) {
  let { data } = loaderData;

  return (
    <Card>
      <CardHeader
        title="Pick add-ons"
        subheader="Add-ons help enhance your gaming experience"
      />
      <CardContent>
        <Suspense fallback={<CircularProgress />}>
          <Await resolve={data}>
            {
              (value) => {
                return (
                  <Stack useFlexGap={true} spacing="1rem">
                    {value.map((data, index) => (
                      <AddOn
                        caption={data.caption}
                        description={data.description}
                        priceInfo={data.priceInfo}
                        key={index}
                      />))}
                  </Stack>
                )
              }
            }
          </Await>
        </Suspense>
      </CardContent>
    </Card>
  );
};
