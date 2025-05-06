import type { Route } from "./+types/billing";

import { FormControl, RadioGroup, Switch, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import { useFetcher } from "react-router";
import BillingCard from "~/components/BillingCard";
import CustomCard from "~/components/CustomCard";

import type { FormEvent } from "react";

// const advancedSvg = "/assets/images/icon-dvanced.svg";
// const arcadeSvg = "/assets/images/icon-arcade.svg";
// const proSvg = "/assets/images/icon-pro.svg";

export async function clientAction({ request }: Route.ClientActionArgs) {
    const result = await request.formData();
    alert(result.get("plan"));

    return {};
};

export default function Component({ }: Route.ComponentProps) {
    const fetcher = useFetcher();

    const submit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        fetcher.submit(evt.currentTarget, { method: "post" });
    }

    return (
        <CustomCard
            title="Select your plan"
            description="You have the option of monthly and yearly billing"
        >
            <Container disableGutters={true}>
                <form id="currentForm" onSubmit={submit}>
                    <FormControl sx={{ width: "100%" }}>
                        <RadioGroup name="plan" defaultValue={"arcade"}>
                            <Stack width="100%">
                                <BillingCard
                                    src="/images/icon-arcade.svg"
                                    price={2}
                                    title="Arcade"
                                    billingPeriod={"mo"}
                                />
                                <BillingCard
                                    src="/images/icon-pro.svg"
                                    price={2}
                                    title="Pro"
                                    billingPeriod={"mo"}
                                />
                                <BillingCard
                                    src="/images/icon-advanced.svg"
                                    price={2}
                                    title="Advanced"
                                    billingPeriod={"mo"}
                                />
                            </Stack>
                        </RadioGroup>
                    </FormControl>
                </form>
                <Stack direction="row" alignItems="center" spacing={1} sx={{
                    borderRadius: 1,
                    border: 1,
                    justifyContent: "center",
                    p: 1, mt: 3,
                    borderColor: "lightgrey"
                }}>
                    <Typography>Monthly</Typography>
                    <Switch size="medium" classes={{
                        root: "height: 2rem"
                    }} />
                    <Typography>Yearly</Typography>
                </Stack>
            </Container>
        </CustomCard >
    );
};
