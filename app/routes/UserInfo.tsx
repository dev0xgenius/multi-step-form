import type { Route } from "./+types/UserInfo";

import { FormControl, FormLabel, Stack } from "@mui/material";
import OutlinedInput, { type OutlinedInputProps } from "@mui/material/OutlinedInput";
import FormStep from "~/src/components/FormStep";

export default function UserInfo({ }: Route.ComponentProps) {
  const fields: OutlinedInputProps[] = [
    { name: "name", placeholder: "e.g Stephen King", required: true, label: "Name" },
    {
      name: "email", placeholder: "e.g stephenking@lorem.com",
      required: true, type: "email", label: "Email Address"
    },
    {
      name: "phone", placeholder: "e.g +234 9075733857", type: "tel",
      label: "Phone Number"
    },
  ];

  return (
    <FormStep
      title="Personal Info"
      description="Please fill in your name, email address and phone number"
    >
      <Stack direction='column' spacing={2}>
        {fields.map(
          (fieldProps: OutlinedInputProps, index) => (
            <FormControl>
              <FormLabel sx={{ typography: "body2" }}>{fieldProps?.label}</FormLabel>
              <OutlinedInput
                key={index} {...fieldProps}
                label={undefined}
                size="small"
                sx={{ borderRadius: 1 / 4 }}
              />
            </FormControl>
          )
        )}
      </Stack>
    </FormStep>
  )
}
