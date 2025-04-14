import type { Route } from "./+types/UserInfo";

import { Form } from "react-router";
import { Card, CardHeader, CardContent } from "@mui/material";
import { Stack, Skeleton } from "@mui/material";
import TextField, { type BaseTextFieldProps } from "@mui/material/TextField";

export function HydrateFallback() {
  return (
    <>
      <Skeleton variant="text" width="2.5rem" height="1rem" />
      <Skeleton variant="text" width="1rem" height="1rem" />
      <Skeleton variant="rectangular" width="100%" height="50vh" />
    </>
  )
}

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
        <Form>
          <Stack spacing="1rem" direction='column' useFlexGap={true}>
            {fields.map(
              (fieldProps: BaseTextFieldProps, index) =>
                <TextField key={index} {...fieldProps} />
            )}
          </Stack>
        </Form>
      </CardContent>
    </Card>
  )
}
