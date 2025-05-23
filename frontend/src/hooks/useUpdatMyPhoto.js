import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { updatePhoto } from '../services/apiFeatures'
import toast from 'react-hot-toast';

export function UseUpdatMyPhoto() {
 
    const queryClient = useQueryClient();
    const{mutate:updateMyPhoto, isLoading, error}=useMutation({
        mutationFn:(photo)=>updatePhoto(photo),
        onSuccess:() =>{
            queryClient.invalidateQueries({queryKey:["users"]});
            toast.success("Foto de perfil atualizada com sucesso")
        },

        onError:()=>{
            toast.error("Ocorreu um erro ao atualizar a foto de perfil, tente novamente")
        }
    })


    return {isLoading, updateMyPhoto, error}
}

