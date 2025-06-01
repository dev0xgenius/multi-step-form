import {
    Box,
    Checkbox,
    FormControlLabel,
    Stack,
    Typography,
    type CSSProperties
} from "@mui/material";
import { useTheme } from "@mui/material";
import { useOutletContext } from "react-router";
import { useState } from 'react';
import type { OutletContext, Price } from "~/lib/types";

export interface AddOnProps {
    caption: string;
    description: string;
    price: Price;
};


export default function AddOn(props: AddOnProps) {
    const inputValue = props.caption
        .split(" ")
        .join("-")
        .toLowerCase();
    const { formState } = useOutletContext<OutletContext>();
    const {
        plan: { billingPeriod }
    } = formState;

    const [isChecked, setIsChecked] = useState(formState.extras[inputValue]);

    let labelStyling: CSSProperties = {
        display: "flex", gap: 1,
        m: 0, p: 1, py: 2,
        borderRadius: 1,
        border: isChecked ? 2 : 1,
        bgcolor: isChecked && "neutral.alabaster" || undefined,
        borderColor: isChecked && "secondary.main" || "neutral.lightGray",

        '&:hover': { bgcolor: "neutral.alabaster" },
        '& .MuiTypography-root': { width: "100%" },
        '& .MuiCheckbox-root': {
            '&.Mui-checked': {
                '& .MuiSvgIcon-root': {
                    color: 'secondary.main'
                }
            },
            '& .MuiSvgIcon-root': {
                color: 'neutral.lightGray',
            }
        }
    };

    return (
        <FormControlLabel name="add-on" value={inputValue}
            sx={labelStyling}
            label={<Stack direction="row">
                <Box>
                    <Typography fontWeight="500" color="primary">
                        {props.caption}
                    </Typography>
                    <Typography variant="body2" color="grey">
                        {props.description}
                    </Typography>
                </Box>
                <Box sx={{
                    m: "auto", mr: 2,
                    alignSelf: "center",
                    color: "grey", typography: "caption"
                }}>
                    {`+$${props.price[billingPeriod]}/${billingPeriod}`}
                </Box>
            </Stack>}
            control={
                <Checkbox
                    size="small"
                    checked={isChecked}
                    onChange={(e, checked) => setIsChecked(checked)}
                    color="secondary"
                />
            }
        />
    );
} 
