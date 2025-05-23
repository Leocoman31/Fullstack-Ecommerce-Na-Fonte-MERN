import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { udpdatInfoUser } from '../services/apiFeatures'
import toast from 'react-hot-toast';

export function UseUpdateMyInfo() {
 
    const queryClient = useQueryClient();
    const{mutate:updateInfo, isLoading, error}=useMutation({
        mutationFn:(name,email)=>udpdatInfoUser(name,email),
        onSuccess:() =>{
            queryClient.invalidateQueries({queryKey:["user"]});
            toast.success("dados do usuário atualizados com sucesso")
        },

        onError:()=>{
            toast.error("Ocorreu um erro ao atualizar os dados do usuário, tente novamente")
        }
    })


    return {isLoading, updateInfo, error}
}
