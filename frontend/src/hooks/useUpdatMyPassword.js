import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { udpdatMyPassword } from '../services/apiFeatures'
import toast from 'react-hot-toast';

export function UseUpdatMyPassword() {
 
    const queryClient = useQueryClient();
    const{mutate:updatePassword, isLoading, error}=useMutation({
        mutationFn:(passwordCurrent,password,passwordConfirm)=>udpdatMyPassword(passwordCurrent,password,passwordConfirm),
        onSuccess:() =>{
            queryClient.invalidateQueries({queryKey:["users"]});
            toast.success("Password atualizada com sucesso")
        },

        onError:()=>{
            toast.error("Ocorreu um erro ao atualizar a sua password, tente novamente")
        }
    })


    return {isLoading, updatePassword, error}
}

