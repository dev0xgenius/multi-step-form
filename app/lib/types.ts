import type { ActionDispatch } from "react";
import { z } from "zod";

export interface FormStateAction {
  type: string;
  data: unknown;
};

export const ContactFormSchema = z.object({
  name: z.string().min(2, { message: "minimum 2 characters" }),
  email: z.string().email(),
  phone: z.string().regex(/^\d{11}$/)
});

export type ContactForm = z.infer<typeof ContactFormSchema>;

export type AppFormState = {
  contact: z.infer<typeof ContactFormSchema>;
  plan: {
    category: "arcade" | "pro" | "advanced";
    price: number;
    billingPeriod: "monthly" | "yearly";
  },
  extras: {
    "online-service": boolean;
    "larger-storage": boolean;
    "customizable-profile": boolean;
  }
};

export type OutletContext = {
  formState: AppFormState,
  dispatch: ActionDispatch<[action: FormStateAction]>
};
