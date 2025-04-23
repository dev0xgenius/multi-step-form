import type { Route } from "./+types/UserInfo";

import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import OutlinedInput, { type OutlinedInputProps } from "@mui/material/OutlinedInput";
import { Stack } from "@mui/system";
import { useFetcher } from "react-router";
import { useForm } from "react-hook-form";

import CustomCard from "~/src/components/CustomCard";

export async function clientAction({ request }: Route.ClientActionArgs) {
  const data = await request.formData();
  let name = data.get("name");

  return { ok: false, name, age: data.get("age") };
};

export default function UserInfo({ }: Route.ComponentProps) {
  const fetcher = useFetcher();

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
      <fetcher.Form method="post">
        <Stack direction='column' spacing={2}>
          {fields.map(
            (fieldProps: OutlinedInputProps, index) => (
              <FormControl error={fetcher.data && !fetcher.data?.ok}>
                <FormHelperText id="my-helper-text" sx={{ position: "absolute", right: 0 }}>
                  Active
                </FormHelperText>
                <FormLabel sx={{ typography: "body2" }}>{fieldProps?.label}</FormLabel>
                <OutlinedInput
                  {...fieldProps}
                  key={index}
                  id={index.toString()}
                  size="small"
                  label={undefined}
                  sx={{ borderRadius: 1 / 3 }}
                />
              </FormControl>
            )
          )}
        </Stack>
      </fetcher.Form>
    </CustomCard>
  )
}
