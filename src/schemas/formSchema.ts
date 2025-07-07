import {z} from "zod";


export const formSchema = z.object({
    firstName: z.string().min(3, 'Minimum 3 characters required'),
    lastName: z.string().min(3, 'Minimum 3 characters required'),
    email: z.string().min(1, 'Required field').email('Invalid email'),
    phone: z.string().min(11, 'Minimum 11 characters required'),
    address: z.string().min(3, 'Minimum 3 characters required'),
    zipCode: z.string().min(8, 'ZIP code must have 8 characters'),
    city: z.string().min(2, 'Minimum 2 characters required'),
    country: z.string().min(2, 'Minimum 2 characters required'),
    paymentMethod: z.string().min(1, 'Please select a payment method')
})

export type FormSchema = z.infer<typeof formSchema>;