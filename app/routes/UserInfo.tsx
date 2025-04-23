import type { Route } from "./+types/UserInfo";

import { FormControl, FormLabel, Stack } from "@mui/material";
import OutlinedInput, { type OutlinedInputProps } from "@mui/material/OutlinedInput";
import CustomCard from "~/src/components/CustomCard";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const data = await request.formData();
  let name = data.get("name");

  return { ok: true, name, age: data.get("age") };
};

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
    <CustomCard
      title="Personal Info"
      description="Please fill in your name, email address and phone number"
    >
      <Stack direction='column' spacing={2}>
        {fields.map(
          (fieldProps: OutlinedInputProps, index) => (
            <FormControl>
              <FormLabel sx={{ typography: "body2" }}>{fieldProps?.label}</FormLabel>
              <OutlinedInput
                {...fieldProps}
                key={index}
                size="small"
                label={undefined}
                sx={{ borderRadius: 1 / 3 }}
              />
            </FormControl>
          )
        )}
      </Stack>
    </CustomCard>
  )
}
