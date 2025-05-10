import { Box, Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { useOutletContext } from "react-router";
import type { OutletContext, Price } from "~/lib/types";

export interface AddOnProps {
    caption: string;
    description: string;
    price: Price;
}

export default function AddOn(props: AddOnProps) {
    const inputValue = props.caption
        .split(" ")
        .join("-")
        .toLowerCase();
    const { formState } = useOutletContext<OutletContext>();
    const {
        plan: { billingPeriod }
    } = formState;

    return (
        <FormControlLabel name="add-on" value={inputValue} sx={{
            paddingY: 2, borderRadius: 1, border: 1, borderColor: "lightgrey",
            '&:hover': {
                border: 2,
                bgcolor: "whitesmoke",
            },
        }} label={
            <Stack direction="row" spacing={0}>
                <Box>
                    <Typography fontWeight="500">
                        {props.caption}
                    </Typography>
                    <Typography variant="body2" color="grey">
                        {props.description}
                    </Typography>
                </Box>
                <Box m="auto" marginRight={2} color="grey" typography="body2">
                    {`+$${props.price[billingPeriod]}/${billingPeriod}`}
                </Box>
            </Stack>
        }
            control={<Checkbox defaultChecked={formState.extras[inputValue]} />}
        />
    );
} 
