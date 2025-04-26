import type { Route } from "./+types/UserInfo";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack } from "@mui/system";
import { useCallback } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";
import { z, ZodType } from "zod";

import { redirect, useFetcher } from "react-router";
import CustomCard from "~/src/components/CustomCard";

export type FormData = {
  name: string;
  email: string;
  phone: string;
}

const formSchema: ZodType<FormData> = z.object({
  name: z.string().min(2, { message: "minimum 2 characters" }),
  email: z.string().email(),
  phone: z.string().min(10, { message: "minimum of 10 digits" })
}).required();

export async function clientAction({ request }: Route.ClientActionArgs) {
  let userInfo = await request.formData();
  return redirect("/billing");
};

export default function UserInfo({ }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const handleSubmitData = useCallback<SubmitHandler<FormData>>(
    (data) => {
      fetcher.submit(data, { method: "POST", action: "/" })
    }, []);

  return (
    <CustomCard
      title="Personal Info"
      description="Please fill in your name, email address and phone number"
    >
      <form id="currentForm" onSubmit={handleSubmit(handleSubmitData)}>
        <Stack direction='column' spacing={2}>
          <Controller name={"name"} control={control} render={({ field }) => (
            <FormControl error={!!errors.name}>
              <FormHelperText>
                {errors.name && errors.name.message}
              </FormHelperText>
              <FormLabel>Name</FormLabel>
              <OutlinedInput {...field}
                placeholder="Stephen King"
                size="small"
              />
            </FormControl>
          )} />
          <Controller name="email" control={control} render={({ field }) => (
            <FormControl error={!!errors.email}>
              <FormHelperText>
                {errors.email && errors.email.message}
              </FormHelperText>
              <OutlinedInput {...field}
                size="small"
                placeholder="stephenking123@gmail.com"
              />
            </FormControl>
          )} />
          <Controller name="phone" control={control} render={({ field }) => (
            <FormControl error={!!errors.phone}>
              <FormHelperText>
                {errors.phone && errors.phone.message}
              </FormHelperText>
              <FormLabel>Phone Number</FormLabel>
              <OutlinedInput {...field}
                size="small"
                placeholder="+234 0123456789"
              />
            </FormControl>
          )} />
        </Stack>
      </form>
    </CustomCard>
  )
};
