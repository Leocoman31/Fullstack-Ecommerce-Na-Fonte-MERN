import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast';
import { editProduct } from '../services/apifeatures';

export function UseUpdateProduct() {
 
    const queryClient = useQueryClient();
    const{mutate:upProduct, isLoading, error}=useMutation({
        mutationFn:(id,data)=>editProduct(id,data),
        onSuccess:() =>{
            queryClient.invalidateQueries({queryKey:["products"]});
            toast.success("O producto foi atualizado com sucesso")
        },

        onError:()=>{
            toast.error("Ocorreu um erro, tente novamente")
        }
    })


    return {isLoading, upProduct, error}
}

