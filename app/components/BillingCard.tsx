import {
    Card,
    CardContent,
    CardMedia,
    Container,
    FormControlLabel,
    Radio,
    Stack,
    Typography,
    useRadioGroup
} from "@mui/material";
import { useOutletContext } from "react-router";

import type {
    BillingInfo,
    BillingPeriod,
    OutletContext
} from "~/lib/types";

import { capitalize } from "~/lib/utils";

export interface BillingCardProps extends BillingInfo {
    src: string;
};

const mediaStyling = {
    width: 40,
    display: "flex",
    alignItems: "center"
} as const;

const stylesOnSelected = {
    border: 2,
    borderColor: "primary.main",
    bgcolor: "whitesmoke",
} as const;

function BillingCardLabel(props:
    BillingCardProps & { billingPeriod: BillingPeriod }
) {
    const context = useRadioGroup();

    const priceTag = `$${props.price[props.billingPeriod]}/${props.billingPeriod}`;
    const isSelected = props.name === context?.value;
    const title = capitalize(props.name);

    return (
        <Card
            component={Container}
            disableGutters={true}
            variant="outlined" sx={{
                '&:hover': { ...stylesOnSelected },
                '&': isSelected && { ...stylesOnSelected } || {}
            }}>
            <CardContent sx={{ position: "relative" }}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <CardMedia sx={mediaStyling}>
                        <img src={props.src} width="100%" height="auto" />
                    </CardMedia>
                    <Stack spacing={0}>
                        <Typography fontWeight="500">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {priceTag}
                        </Typography>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    );
}

const labelStyle = {
    p: 0, m: 0,
    '& > span': {
        display: "block",
        width: "100%"
    }
} as const;

export default function BillingCard(props: BillingCardProps) {
    const { formState: { plan } } = useOutletContext<OutletContext>();

    return (
        <FormControlLabel sx={labelStyle}
            value={props.name}
            label={
                <BillingCardLabel
                    billingPeriod={plan.billingPeriod}
                    {...props}
                />
            }
            control={
                <Radio
                    sx={theme => ({
                        ...theme.mixins.coverParentAbsolutely,
                        visibility: "hidden"
                    })}
                />
            }
        />
    );
};
