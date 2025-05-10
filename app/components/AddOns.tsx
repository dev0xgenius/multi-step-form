import { FormGroup, List, Stack } from "@mui/material";
import type { AddOnType } from "~/lib/types";
import AddOn from "./AddOn";

export interface AddOnsProps {
    addOns: AddOnType[];
}

export default function AddOns({ addOns }: AddOnsProps) {
    return (
        <FormGroup>
            <Stack>
                {addOns.map((addOn, index) => (
                    <AddOn
                        caption={addOn.caption}
                        description={addOn.description}
                        price={addOn.price}
                        key={index}
                    />
                ))}
            </Stack>
        </FormGroup>
    );
}
