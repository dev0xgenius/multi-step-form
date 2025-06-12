import {
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControlLabel,
  Radio,
  Stack,
  Typography,
  useRadioGroup,
} from "@mui/material";
import { useOutletContext } from "react-router";

import type { BillingInfo, BillingPeriod, OutletContext } from "~/lib/types";

import { capitalize } from "~/lib/utils";

export interface BillingCardProps extends BillingInfo {
  src: string;
}

const mediaStyling = {
  width: 40,
  display: "flex",
  alignItems: "center",
} as const;

const stylesOnSelected = {
  borderColor: "secondary.dark",
  bgcolor: "neutral.alabaster",
} as const;

export function BillingCardLabel(
  props: BillingCardProps & { billingPeriod: BillingPeriod },
) {
  const context = useRadioGroup();

  const priceTag = `$${props.price[props.billingPeriod]}/${props.billingPeriod}`;
  const isSelected = props.name === JSON.parse(context?.value).name;
  const title = capitalize(props.name);

  return (
    <Card
      component={Container}
      disableGutters={true}
      variant="outlined"
      sx={{
        "&:hover": { ...stylesOnSelected },
        "&": (isSelected && { ...stylesOnSelected }) || {},
      }}
    >
      <CardContent sx={{ position: "relative" }}>
        <Stack
          direction={{ xs: "row", md: "column" }}
          spacing={{ xs: 2, md: 4 }}
          sx={(theme) => ({
            width: "max-content",
            height: "100%",
            alignItems: "start",
            p: 0,
            [`${theme.breakpoints.up("md")}`]: {
              ...{ my: -1, mt: 1 },
            },
          })}
        >
          <CardMedia sx={mediaStyling}>
            <img src={props.src} width="100%" height="auto" />
          </CardMedia>
          <Stack spacing={0}>
            <Typography fontWeight="500" color="primary">
              {title}
            </Typography>
            <Typography variant="body2" color="neutral.coolGray">
              {priceTag}
            </Typography>
            {props.billingPeriod == "yr" ? (
              <Typography variant="body2" mt={1} color="primary">
                2 months free
              </Typography>
            ) : (
              <></>
            )}
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}

const labelStyle = {
  width: "100%",
  p: 0,
  m: 0,
  "& > span": {
    display: "block",
    width: "100%",
  },
} as const;

export default function BillingCard(props: BillingCardProps) {
  const {
    formState: { plan },
  } = useOutletContext<OutletContext>();
  const radioContext = useRadioGroup();
  const billingInfo = {
    price: props.price,
    name: props.name,
  };

  return (
    <FormControlLabel
      sx={labelStyle}
      value={JSON.stringify(billingInfo)}
      label={<BillingCardLabel billingPeriod={plan.billingPeriod} {...props} />}
      name={radioContext?.name}
      control={
        <Radio
          sx={(theme) => ({
            ...theme.mixins.coverParentAbsolutely,
            visibility: "hidden",
          })}
        />
      }
    />
  );
}
