import type { Route } from "./+types/UserInfo";

import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import TextField, { type BaseTextFieldProps } from "@mui/material/TextField";

export default function UserInfo({ }: Route.ComponentProps) {
  const fields: BaseTextFieldProps[] = [
    { name: "name", placeholder: "e.g Stephen King", label: "Name", required: true },
    {
      name: "email", placeholder: "e.g stephenking@lorem.com",
      label: "Email Address", required: true, type: "email"
    },
    {
      name: "phone", placeholder: "e.g +234 9075733857", label: "Phone Number",
      type: "tel"
    },
  ];

  return (
    <Card>
      <CardHeader
        title="Personal Info"
        subheader="Please fill in your name, email address and phone number"
      />
      <CardContent>
        <Stack direction='column'>
          {fields.map(
            (fieldProps: BaseTextFieldProps, index) =>
              <TextField key={index} {...fieldProps} />
          )}
        </Stack>
      </CardContent>
    </Card>
  )
}
