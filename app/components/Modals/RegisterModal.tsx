'use client';

import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import {FcGoogle } from "react-icons/fc"
import { useCallback, useState } from "react";
import { 
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from "@/app/hooks/useRegisterModal";
import Modal from "./Modal";

const RegisterModel = () => {
    const registermModal = useRegisterModal();
    const [isLoading , setIsLoading] = useState(false)

    const {
        register,
        handleSubmit,
        formState:{
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues:{
            name:'',
            email:'',
            password:''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(()=>{
                registermModal.onClose();
            })
            .catch((error)=> {
                console.log(error);
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }


    return(
        <Modal 
         disabled={isLoading}
         isOpen={registermModal.isOpen}
         title="Register"
         actionLabel="Continue"
         onClose={registermModal.onClose}
         onSubmit={handleSubmit(onSubmit)}
        />

    )
}

export default RegisterModel