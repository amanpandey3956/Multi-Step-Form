import { z } from "zod";

// Personal Information schema
export const personalInfoSchema = z.object({
  firstName: z.string().min(3, "First Name is Required"),
  lastName: z.string().min(1, "Last Name is Required"),
  phone: z
    .string()
    .length(10, "Phone Number must be 10 digits")
    .regex(/^\d+$/, "Phone Number must contain only digits"),
  email: z.string().email("Invalid email address"),
});

// Address Details schema
export const addressDetailsSchema = z.object({
  street: z.string().min(5, "Street is required"),
  city: z.string().min(3, "City is required"),
  state: z.string().min(2, "State is required"),
  zipCode: z
    .string()
    .length(6, "Zip Code must be 6 digits")
    .regex(/^\d+$/, "Zip Code must contain only digits"),
});

// Preferences schema
export const preferencesSchema = z.object({
  newsletter: z.boolean().optional(),
  notifications: z.boolean().optional(),
});

// Form data schema
export const formDataSchema = z.object({
  personalInfo: personalInfoSchema,
  addressDetails: addressDetailsSchema,
  preferences: preferencesSchema,
});

// Types
export type PersonalInfo = z.infer<typeof personalInfoSchema>;
export type AddressDetails = z.infer<typeof addressDetailsSchema>;
export type Preferences = z.infer<typeof preferencesSchema>;
export type FormData = z.infer<typeof formDataSchema>;
