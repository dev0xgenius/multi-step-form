import type { Route } from "./+types/contact-info";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormHelperText, FormLabel } from "@mui/material";
import OutlinedInput from "@mui/material/OutlinedInput";
import { Stack } from "@mui/system";
import { useCallback } from "react";
import { Controller, useForm, type SubmitHandler } from "react-hook-form";

import { useNavigate, useOutletContext } from "react-router";
import { ContactFormSchema, type ContactForm, type OutletContext } from "~/lib/types";
import CustomCard from "~/src/components/CustomCard";

export default function Component({ }: Route.ComponentProps) {
    const { formState, dispatch } = useOutletContext<OutletContext>();
    const { contact } = formState;

    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm<ContactForm>({
        mode: "onChange",
        resolver: zodResolver(ContactFormSchema),
        defaultValues: { ...contact },
    });

    const handleSubmitData = (
        useCallback<SubmitHandler<ContactForm>>(
            (data) => {
                dispatch({ type: "UPDATE_CONTACT", data });
                navigate("/billing", { viewTransition: true });
            }, [])
    );

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
                                placeholder="Stephen King" size="small"
                            />
                        </FormControl>
                    )} />
                    <Controller name="email" control={control} render={({ field }) => (
                        <FormControl error={!!errors.email}>
                            <FormHelperText>
                                {errors.email && errors.email.message}
                            </FormHelperText>
                            <FormLabel>Email</FormLabel>
                            <OutlinedInput {...field} size="small"
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
                            <OutlinedInput {...field} size="small"
                                placeholder="+234 0123456789"
                            />
                        </FormControl>
                    )} />
                </Stack>
            </form>
        </CustomCard>
    )
};
