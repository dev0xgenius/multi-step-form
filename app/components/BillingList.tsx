import { FormControl, RadioGroup } from "@mui/material";
import { useOutletContext } from "react-router";
import BillingCard from "./BillingCard.tsx";

import type { BillingInfo, OutletContext } from "~/lib/types";
import { useState, type ChangeEvent } from "react";

export interface BillingListProps {
    billings: BillingInfo[];
    imgs: string[];
}

export default function BillingList({ billings, imgs }: BillingListProps) {
    const { formState: { plan } } = useOutletContext<OutletContext>();

    const findBillingWithName = (name: string) => {
        return billings.find(billing => billing.name == name);
    };

    const [currentBilling, setCurrentBilling] = useState(
        findBillingWithName(plan.name) ?? billings[0]
    );

    const handleChange = (_: ChangeEvent<HTMLInputElement>, value: string) => {
        let billing = findBillingWithName(value);
        setCurrentBilling(prevState => {
            return billing ?? prevState;
        });
    };

    return (
        <FormControl sx={{ width: "100%" }}>
            <RadioGroup sx={{ gap: 1 }}
                defaultValue={plan.name}
                onChange={handleChange}
            >
                {
                    billings.map((billingInfo, index) => (
                        <BillingCard
                            key={index}
                            src={imgs[index]}
                            {...billingInfo}
                        />
                    ))
                }
            </RadioGroup>
            <input
                type="hidden"
                name="plan"
                defaultValue={JSON.stringify(currentBilling)}
            />
        </FormControl>
    );
}
