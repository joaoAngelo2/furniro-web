import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {type FormSchema, checkoutSchema} from "../schemas/checkoutSchema";
import { contactSchema, type ContactSchema } from "../schemas/contactSchema";

export const useCheckoutForms = () => {
    const {
        watch,
        register,
        handleSubmit, 
        setValue,
        formState: {errors}
    } = useForm<FormSchema>({
        resolver: zodResolver(checkoutSchema)
    })

    return {register, handleSubmit, errors, setValue, watch};
};

export const useContactForm = () => {
    const {
        watch,
        register,
        handleSubmit, 
        setValue,
        formState: {errors}
    } = useForm<ContactSchema>({
        resolver: zodResolver(contactSchema)
    })

    return {register, handleSubmit, errors, setValue, watch};
};

export const useForms = useCheckoutForms;