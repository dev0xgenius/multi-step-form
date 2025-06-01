import {
  Box,
  capitalize,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useOutletContext } from "react-router";
import CustomCard from "~/components/CustomCard";
import type { OutletContext } from "~/lib/types";
import type { Route } from "./+types/summary";

const styling = {
  bgcolor: "neutral.alabaster",
  py: 1.5,
  borderRadius: 1,
  mb: 2,
} as const;

export default function Component({}: Route.ComponentProps) {
  const {
    formState: { plan },
  } = useOutletContext<OutletContext>();

  const billingPeriodText = plan.billingPeriod == "mo" ? "Monthly" : "Yearly";
  const billing = capitalize(`${plan.name} (${billingPeriodText})`);

  return (
    <CustomCard
      description="Double check everything looks OK before confirming"
      title="Finishing Up"
    >
      <Container sx={styling}>
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box>
            <Typography color="primary" fontWeight="bold">
              {billing}
            </Typography>
            <Typography color="primary">
              <Link to="/billing" style={{ color: "gray", opacity: "0.8" }}>
                Change
              </Link>
            </Typography>
          </Box>
          <Typography color="primary" component="span" fontWeight={"bold"}>
            {`$${plan.price[plan.billingPeriod]}/${plan.billingPeriod}`}
          </Typography>
        </Stack>
        <Divider sx={{ marginY: 2 }} />
        <List
          sx={{
            "& .MuiListItem-root": {
              p: 0,
              justifyContent: "space-between",
              "& .MuiListItemText-root": {
                color: "gray",
                "&:last-child": { textAlign: "right" },
              },
            },
          }}
        >
          <ListItem disableGutters>
            <ListItemText primary="Online Service" />
            <ListItemText primary="+$1/mo" />
          </ListItem>
          <ListItem disableGutters>
            <ListItemText primary="Larger Storage" />
            <ListItemText primary="+2/mo" />
          </ListItem>
        </List>
      </Container>
      <Stack direction="row" p={1.5} justifyContent="space-between">
        <Typography color="gray">Total (per year)</Typography>
        <Typography fontWeight={"bold"} color="secondary" variant="h6">
          {`+$12/${plan.billingPeriod}`}
        </Typography>
      </Stack>
    </CustomCard>
  );
}
