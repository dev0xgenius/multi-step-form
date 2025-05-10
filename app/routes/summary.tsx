import { Box, capitalize, Container, Divider, List, ListItem, ListItemText, Stack, Typography } from "@mui/material";
import { Link, useOutletContext } from "react-router";
import CustomCard from "~/components/CustomCard";
import type { OutletContext } from "~/lib/types";
import type { Route } from "./+types/summary";

const styling = {
    bgcolor: "whitesmoke",
    paddingY: 2,
    borderRadius: 1,
    mb: 2
} as const;

export default function Component({ }: Route.ComponentProps) {
    const {
        formState: { plan, extras }
    } = useOutletContext<OutletContext>();

    const billingPeriodText = plan.billingPeriod == "mo" ? "Monthly" : "Yearly";
    const billing = capitalize(`${plan.name} (${billingPeriodText})`);

    return (
        <CustomCard
            description="Double check everything looks OK before confirming"
            title="Finishing Up"
        >
            <Container sx={styling}>
                <Stack direction="row" justifyContent="space-between">
                    <Box>
                        <Typography fontWeight="500">{billing}</Typography>
                        <Typography>
                            <Link to="/billing" viewTransition>Change</Link>
                        </Typography>
                    </Box>
                    <Typography component="span">
                        {`$${plan.price[plan.billingPeriod]}/${plan.billingPeriod}`}
                    </Typography>
                </Stack>
                <Divider sx={{ marginY: 2 }} />
                <List>
                    <ListItem>
                        <ListItemText primary="Online Service" />
                        <ListItemText primary="+$1/mo" />
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Larger Storage" />
                        <ListItemText primary="+2/mo" />
                    </ListItem>
                </List>
            </Container>
            <Stack direction="row" paddingX={2} justifyContent="space-between">
                <Typography>Total (per year)</Typography>
                <Typography>$12/yr</Typography>
            </Stack>
        </CustomCard>
    );
};
