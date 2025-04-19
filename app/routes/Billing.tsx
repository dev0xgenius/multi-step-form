import {
  Stack
} from "@mui/material";
import type { Route } from "./+types/Billing";

import advancedSvg from "../src/assets/images/icon-advanced.svg";
import arcadeSvg from "../src/assets/images/icon-arcade.svg";
import proSvg from "../src/assets/images/icon-pro.svg";

import BillingCard from "~/src/components/BillingCard";
import FormStep from "~/src/components/FormStep";

export default function Billing({ }: Route.ComponentProps) {
  return (
    <FormStep
      title="Select your plan"
      description="You have the option of monthly and yearly billing"
    >
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
    </FormStep>
  );
};
