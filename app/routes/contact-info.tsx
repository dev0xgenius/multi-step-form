import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, TextField } from "@mui/material";
import { useCallback, useEffect } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import { useBlocker, useNavigate, useOutletContext } from "react-router";
import {
  ContactFormSchema,
  type ContactForm,
  type OutletContext,
} from "~/lib/types";

import CustomCard from "~/components/CustomCard";

export default function Page() {
  const { formState, dispatch } = useOutletContext<OutletContext>();
  const { contact } = formState;
  const {
    control,
    getValues,
    formState: { isValid, errors },
    handleSubmit,
    trigger,
  } = useForm<ContactForm>({
    mode: "onChange",
    shouldFocusError: true,
    resolver: zodResolver(ContactFormSchema),
    defaultValues: { ...contact },
  });

  const navigate = useNavigate();
  const blocker = useBlocker(!isValid);

  const handleSubmitData = useCallback<SubmitHandler<ContactForm>>((data) => {
    dispatch({ type: "UPDATE_CONTACT", data });
    navigate("/billing");
  }, []);

  useEffect(() => {
    if (blocker.state == "blocked") trigger();
  }, [blocker]);

  useEffect(
    () => () => {
      dispatch({ type: "UPDATE_CONTACT", data: getValues() });
    },
    [],
  );

  return (
    <CustomCard
      title="Personal Info"
      description="Please provide your name, email address and phone number"
    >
      <form id="currentForm" onSubmit={handleSubmit(handleSubmitData)}>
        <Stack direction="column" spacing={0}>
          <Controller
            name={"name"}
            control={control}
            render={({ field }) => (
              <TextField
                error={!!errors.name}
                helperText={errors.name?.message}
                label="Name"
                placeholder="e.g Stephen King"
                {...field}
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                type="email"
                error={!!errors.email}
                label="Email"
                helperText={errors.email?.message}
                placeholder="e.g stephenking123@gmail.com"
                {...field}
              />
            )}
          />
          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <TextField
                type="phone"
                label="Phone Number"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                placeholder="e.g 234 6766636673"
                {...field}
              />
            )}
          />
        </Stack>
      </form>
    </CustomCard>
  );
}
