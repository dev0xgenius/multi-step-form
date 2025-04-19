import {
  Card,
  CardContent,
  CardHeader,
  CircularProgress,
  Stack
} from "@mui/material";
import { Suspense } from "react";
import { Await } from "react-router";
import AddOn from "~/src/components/AddOn";
import type { Route } from "./+types/AddOns";
import FormStep from "~/src/components/FormStep";

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  let data = [
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
  ];

  return { data };
};

export default function AddOns({ loaderData }: Route.ComponentProps) {
  let { data } = loaderData;

  return (
    <FormStep
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience">
      <Suspense fallback={<CircularProgress />}>
        <Await resolve={data}>
          {
            (value) => {

              return (
                <Stack>
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
    </FormStep>
  );
};
