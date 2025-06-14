import type { ActionDispatch } from "react";
import { z } from "zod";

export interface FormStateAction {
  type: string;
  data: unknown;
  next?: FormStateAction;
}

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(5, { message: "minimum 5 characters" })
    .regex(/((\w+)\s(\w+))/, { message: "space out your names" }),
  email: z.string().email(),
  phone: z
    .string()
    .regex(/^\d{11}$/, { message: "should be atleast 11 digits" }),
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

export type BillingPeriod = "mo" | "yr";

export type AppFormState = {
  contact: z.infer<typeof ContactFormSchema>;
  plan: {
    name: "arcade" | "pro" | "advanced";
    price: Price;
    billingPeriod: BillingPeriod;
  };
  extras: {
    "online-service": AddOnInfo | false;
    "larger-storage": AddOnInfo | false;
    "customizable-profile": AddOnInfo | false;
    [key: string]: AddOnInfo | false;
  };

  [key: string]: unknown;
};

export type OutletContext = {
  formState: AppFormState;
  dispatch: ActionDispatch<[action: FormStateAction]>;
};

export type Price = {
  mo: number;
  yr: number;
  [key: string]: number;
};

export type BillingInfo = {
  name: string;
  price: Price;
};

export interface AddOnInfo extends BillingInfo {
  description: string;
}
