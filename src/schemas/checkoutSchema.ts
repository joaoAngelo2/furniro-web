import { z } from "zod";

export const checkoutSchema = z.object({
  firstName: z.string()
    .min(3, 'First name must be at least 3 characters long'),

  lastName: z.string()
    .min(3, 'Last name must be at least 3 characters long'),

  company: z.string().optional(),

  zipCode: z.string()
    .regex(/^\d{5}-?\d{3}$/, 'Invalid ZIP code (e.g., 12345-678)'),

  region: z.string()
    .min(3, 'Region must be at least 3 characters long'),

  streetAddress: z.string()
    .min(10, 'Street address must be at least 10 characters long'),

  city: z.string()
    .min(2, 'City must be at least 2 characters long'),

  state: z.string()
    .length(2, 'State must be exactly 2 uppercase letters')
    .regex(/^[A-Z]{2}$/, 'State must contain only uppercase letters (e.g., SP)'),

  addOnAddress: z.string()
    .min(3, 'Additional address info must be at least 3 characters long')
    .optional(),

  email: z.string()
    .min(1, 'Email is required')
    .email('Invalid email format'),

  phone: z.string()
    .regex(/^\d{10,11}$/, 'Phone number must be 10 or 11 digits (numbers only)'),

  country: z.string()
    .min(2, 'Country must be at least 2 characters long'),

  paymentMethod: z.string()
    .min(1, 'Please select a payment method'),
  additionalInformation: z.string()
    .min(2, 'Additional information must be at least 2 characters long')
    .max(200,'200 characteres is the maximum' )
});

export type CheckoutSchema = z.infer<typeof checkoutSchema>;
