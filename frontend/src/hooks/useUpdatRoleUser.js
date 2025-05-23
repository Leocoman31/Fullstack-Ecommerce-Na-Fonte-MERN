import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast';
import { updateRoleUser } from '../services/apifeatures';

export function UseUpdatRoleUser() {
 
    const queryClient = useQueryClient();
    const{mutate:upRoleUser, isLoading, error}=useMutation({
        mutationFn:(id)=>updateRoleUser(id),
        onSuccess:() =>{
            queryClient.invalidateQueries({queryKey:["users"]});
            toast.success("Tipo de usuário atualizado com sucesso")
        },

        onError:()=>{
            toast.error("Ocorreu um erro, tente novamente")
        }
    })


    return {isLoading, upRoleUser, error}
}

