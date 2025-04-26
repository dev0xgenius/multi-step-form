import {
  Stack,
  Switch,
  Typography
} from "@mui/material";
import type { Route } from "./+types/Billing";

import advancedSvg from "../src/assets/images/icon-advanced.svg";
import arcadeSvg from "../src/assets/images/icon-arcade.svg";
import proSvg from "../src/assets/images/icon-pro.svg";

import { Container } from "@mui/system";
import BillingCard from "~/src/components/BillingCard";
import CustomCard from "~/src/components/CustomCard";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const plan = await request.formData();
  return { ok: false, name: "hola" };
}

export default function Billing({ }: Route.ComponentProps) {
  return (
    <CustomCard
      title="Select your plan"
      description="You have the option of monthly and yearly billing"
    >
      <Container disableGutters={true}>
        <form id="currentForm" onSubmit={() => alert("Active")}>
          <Stack useFlexGap={true} spacing={1}>
            {[["Arcade", 2], ["Pro", 1], ["Advanced", 1]]
              .map(([tag, price], index) => (
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
        </form>
        <Stack direction="row" alignItems="center" spacing={1} sx={{
          borderRadius: 1,
          border: 1,
          justifyContent: "center",
          p: 1, mt: 3,
          borderColor: "lightgrey"
        }}>
          <Typography>Monthly</Typography>
          <Switch size="medium" />
          <Typography>Yearly</Typography>
        </Stack>
      </Container>
    </CustomCard>
  );
};
