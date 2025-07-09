import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {type FormSchema, checkoutSchema} from "../schemas/checkoutSchema";



export const useForms = () =>{
    const {
        watch,
        register,
        handleSubmit, 
        setValue,
        formState: {errors}
    }
    = useForm<FormSchema>({
        resolver: zodResolver(checkoutSchema),
    })

    return {register, handleSubmit, errors, setValue, watch};
};