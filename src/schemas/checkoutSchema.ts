import {z} from "zod";

export const checkoutSchema = z.object({

    firstName: z.string().min(3, 'Minimum 3 characters required'),
    lastName: z.string().min(3, 'Minimum 3 characters required'),
    company: z.string().optional(),
    zipCode: z.string()
    .min(8, 'ZIP code must have exactly 8 characters')
    .regex(/^\d+$/, 'ZIP code must contain only numbers'),
    region: z.string().min(10, 'Minimum 10 characters required'),
    streetAddress: z.string().min(10, 'Minimum 10 characters required'),
    city: z.string().min(2, 'Minimum 2 characters required'),
    state: z.string()
    .length(2, 'State must have exactly 2 characters')
    .regex(/^[A-Z]{2}$/, 'State must be two uppercase letters'),
    addOnAddress: z.string().min(3, 'Minimum 3 characters required'),
    email: z.string().min(1, 'Required field').email('Invalid email'),
    phone: z.string().min(11, 'Minimum 11 characters required'),
    country: z.string().min(2, 'Minimum 2 characters required'),
    paymentMethod: z.string().min(1, 'Please select a payment method'),
})

export type CheckoutSchema = z.infer<typeof checkoutSchema>;