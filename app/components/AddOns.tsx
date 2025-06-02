import { FormGroup, List, Stack, Typography } from "@mui/material";
import type { AddOnInfo } from "~/lib/types";
import AddOn from "./AddOn";
import { Link } from "react-router";

export interface AddOnsProps {
  addOns: AddOnInfo[] | undefined;
  readOnly?: boolean;
}

export default function AddOns({ addOns, readOnly }: AddOnsProps) {
  return addOns && addOns.length != 0 ? (
    <FormGroup>
      <Stack spacing={1}>
        {addOns.map((addOn, index) => (
          <AddOn
            caption={addOn.name}
            description={addOn.description}
            price={addOn.price}
            key={index}
            readOnly={readOnly}
          />
        ))}
      </Stack>
    </FormGroup>
  ) : (
    <Typography color="grey" textAlign="center">
      <Link to="/extras">Add cool features</Link>
    </Typography>
  );
}
