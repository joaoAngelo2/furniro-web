import {z} from "zod";

export const contactSchema = z.object({
    name: z.string().min(3,'Minimum 3 characters required'),
    email: z.string().min(1, 'Required field').email('Invalid email'),
    subject: z.string().min(5,'Minimum 5 characters required').optional(),
    message: z.string().min(5, 'Minimum 5 characters required').max(500, 'Maximum 500 characters allowed').optional(),
})

export type ContactSchema = z.infer<typeof contactSchema>;