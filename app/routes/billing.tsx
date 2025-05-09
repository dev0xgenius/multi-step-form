import type { Route } from "./+types/billing";

import { Container } from "@mui/system";
import { useNavigate, useOutletContext } from "react-router";
import CustomCard from "~/components/CustomCard";
import SwitchSelect from "~/components/SwitchSelect";

import { useEffect, type FormEvent } from "react";
import BillingList from "~/components/BillingList";
import { type BillingInfo, type OutletContext } from "~/lib/types";

const billings: BillingInfo[] = [
    { price: { "mo": 1, "yr": 12 }, name: "arcade" },
    { price: { "mo": 2, "yr": 24 }, name: "pro" },
    { price: { "mo": 3, "yr": 36 }, name: "advanced" }
];

export default function Component({ }: Route.ComponentProps) {
    const { formState: { plan }, dispatch } = useOutletContext<OutletContext>();
    const { billingPeriod } = plan;
    const navigate = useNavigate();

    const handleSwitchSelect = (checked: boolean) => {
        const switchBillingPeriod = (bool: boolean) => (
            !bool ? "mo" : "yr"
        );

        dispatch({
            type: "UPDATE_BILLING",
            data: { billingPeriod: switchBillingPeriod(checked) }
        });
    };

    const submit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        let formData = new FormData(evt.currentTarget);

        dispatch({
            type: "UPDATE_BILLING",
            data: {
                category: formData.get("plan"),
                billingPeriod: formData.get("billingPeriod")
            }
        });
        navigate("/add-ons", { viewTransition: true });
    }

    useEffect(() => {
        const form = document.querySelector<HTMLFormElement>("#currentForm");

        return () => {
            let formData = new FormData(form ?? undefined);
            dispatch({
                type: "UPDATE_BILLING",
                data: {
                    category: formData.get("plan"),
                    billingPeriod: formData.get("billingPeriod")
                }
            })
        }
    }, []);

    return (
        <CustomCard
            title="Select your plan"
            description="You have the option of monthly and yearly billing"
        >
            <Container disableGutters={true}>
                <form id="currentForm" onSubmit={submit}>
                    <BillingList
                        billings={billings}
                        imgs={["/images/icon-arcade.svg",
                            "/images/icon-pro.svg",
                            "/images/icon-advanced.svg"
                        ]}
                    />
                    <SwitchSelect
                        optionLabels={["Monthly", "Yearly"]}
                        name="billingPeriod"
                        value={billingPeriod}
                        checked={billingPeriod == "mo" ? false : true}
                        onSwitchSelect={handleSwitchSelect}
                    />
                </form>
            </Container>
        </CustomCard >
    );
};
