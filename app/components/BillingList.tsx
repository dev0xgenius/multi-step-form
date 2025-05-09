import BillingCard from "./BillingCard.tsx";
import { FormControl, RadioGroup } from "@mui/material";
import { useOutletContext } from "react-router";

import type { BillingInfo, OutletContext } from "~/lib/types";

export interface BillingListProps {
    billings: BillingInfo[];
    imgs: string[];
}

export default function BillingList({ billings, imgs }: BillingListProps) {
    const { formState: { plan } } = useOutletContext<OutletContext>();

    return (
        <FormControl sx={{ width: "100%" }}>
            <RadioGroup sx={{ gap: 1 }} name="plan" defaultValue={plan.category}>
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
        </FormControl>
    );
}
