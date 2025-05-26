import { FormGroup, List, Stack } from "@mui/material";
import type { AddOnInfo } from "~/lib/types";
import AddOn from "./AddOn";

export interface AddOnsProps {
    addOns: AddOnInfo[];
}

export default function AddOns({ addOns }: AddOnsProps) {
    return (
        <FormGroup>
            <Stack spacing={2}>
                {addOns.map((addOn, index) => (
                    <AddOn
                        caption={addOn.name}
                        description={addOn.description}
                        price={addOn.price}
                        key={index}
                    />
                ))}
            </Stack>
        </FormGroup>
    );
}
