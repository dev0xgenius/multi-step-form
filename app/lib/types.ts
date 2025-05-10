import type { ActionDispatch } from "react";
import { z } from "zod";

export interface FormStateAction {
    type: string;
    data: unknown;
    next?: FormStateAction;
};

export const ContactFormSchema = z.object({
    name: z.string().min(2, { message: "minimum 2 characters" }),
    email: z.string().email(),
    phone: z.string().regex(/^\d{11}$/)
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

export type BillingPeriod = "mo" | "yr";

export type AppFormState = {
    contact: z.infer<typeof ContactFormSchema>;
    plan: {
        category: "arcade" | "pro" | "advanced";
        billingPeriod: BillingPeriod;
    };
    extras: {
        "online-service": boolean;
        "larger-storage": boolean;
        "customizable-profile": boolean;
        [key: string]: boolean;
    };
    [key: string]: unknown;
};

export type OutletContext = {
    formState: AppFormState,
    dispatch: ActionDispatch<[action: FormStateAction]>
};

export type Price = {
    "mo": number;
    "yr": number;
    [key: string]: number;
};

export type BillingInfo = {
    name: string;
    price: Price;
}

export type AddOnType = {
    caption: string;
    description: string;
    price: Price;
}
