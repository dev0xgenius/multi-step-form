import {
  Stack
} from "@mui/material";
import AddOn from "~/src/components/AddOn";
import CustomCard from "~/src/components/CustomCard";
import type { Route } from "./+types/AddOns";

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
    <CustomCard
      title="Pick add-ons"
      description="Add-ons help enhance your gaming experience">
      {
        <Stack>
          {data.map((addOn, index) => (
            <AddOn
              caption={addOn.caption}
              description={addOn.description}
              priceInfo={addOn.priceInfo}
              key={index}
            />))}
        </Stack>
      }
    </CustomCard>
  );
};
