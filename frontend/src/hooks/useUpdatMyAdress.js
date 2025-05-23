import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast';
import { updateAdress } from '../services/apifeatures';

export function UseUpdatMyAdress() {
 
    const queryClient = useQueryClient();
    const{mutate:updateMyAdress, isLoading, error}=useMutation({
        mutationFn:(city,adress1,adress2)=>updateAdress(city,adress1,adress2),
        onSuccess:() =>{
            queryClient.invalidateQueries({queryKey:["users"]});
            toast.success("Endereço atualizada com sucesso")
        },

        onError:()=>{
            toast.error("Ocorreu um erro ao atualizar o seu endereço, tente novamente")
        }
    })


    return {isLoading, updateMyAdress, error}
}

