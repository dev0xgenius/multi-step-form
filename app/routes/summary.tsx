import {
  Box,
  capitalize,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useOutletContext } from "react-router";
import AddOns from "~/components/AddOns";
import CustomCard from "~/components/CustomCard";
import type { OutletContext } from "~/lib/types";

const styling = {
  bgcolor: "neutral.alabaster",
  py: 1.5,
  borderRadius: 1,
  mb: 2,
} as const;

export default function SummaryPage() {
  const {
    formState: { plan, extras },
  } = useOutletContext<OutletContext>();

  const billingPeriodText = plan.billingPeriod == "mo" ? "Monthly" : "Yearly";
  const billing = capitalize(`${plan.name} (${billingPeriodText})`);

  const formId = 234324;
  const navigate = useNavigate();

  const validExtras = Object.values(extras).filter((value) => !!value);
  let totalFee = 0;

  validExtras.forEach((validExtra) => {
    totalFee += validExtra.price[plan.billingPeriod];
  });
  totalFee += plan.price[plan.billingPeriod];

  return (
    <CustomCard
      description="Double check everything looks OK before confirming"
      title="Finishing Up"
    >
      <Container
        sx={styling}
        component={"form"}
        action="/summary/confirmed"
        method="get"
        id="currentForm"
        onSubmit={(e) => {
          e.preventDefault();
          navigate("confirmed?id=123");
        }}
      >
        <input type="hidden" name="id" value={formId} />
        <Stack
          direction="row"
          alignItems={"center"}
          justifyContent="space-between"
        >
          <Box>
            <Typography color="primary" fontWeight={500}>
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
        <Stack>
          <AddOns addOns={validExtras || undefined} readOnly />
        </Stack>
      </Container>
      <Stack direction="row" p={1.5} justifyContent="space-between">
        <Typography color="neutral.coolGray">
          {`Total (per ${plan.billingPeriod == "mo" ? "month" : "year"})`}
        </Typography>
        <Typography fontWeight="bold" color="secondary" variant="h6">
          {`+$${totalFee}/${plan.billingPeriod}`}
        </Typography>
      </Stack>
    </CustomCard>
  );
}
