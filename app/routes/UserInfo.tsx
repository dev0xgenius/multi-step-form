import type { Route } from "./+types/UserInfo";

import { Stack } from "@mui/material";
import TextField, { type BaseTextFieldProps } from "@mui/material/TextField";
import FormStep from "~/src/components/FormStep";

export default function UserInfo({ }: Route.ComponentProps) {
  const fields: BaseTextFieldProps[] = [
    { name: "name", placeholder: "e.g Stephen King", required: true },
    {
      name: "email", placeholder: "e.g stephenking@lorem.com", required: true, type: "email"
    },
    {
      name: "phone", placeholder: "e.g +234 9075733857", type: "tel"
    },
  ];

  return (
    <FormStep
      title="Personal Info"
      description="Please fill in your name, email address and phone number"
    >
      <Stack direction='column'>
        {fields.map(
          (fieldProps: BaseTextFieldProps, index) =>
            <TextField key={index} {...fieldProps} />
        )}
      </Stack>
    </FormStep>
  )
}
