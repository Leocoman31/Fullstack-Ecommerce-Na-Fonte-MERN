import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteShop } from '../services/apifeatures';
import toast from 'react-hot-toast';

export function useDeleteShop() {

    const queryClient = useQueryClient();
    const {mutate:data, isLoading}=useMutation({
        mutationFn:(id)=> deleteShop(id),
        onSuccess:()=>{
          toast.success("loja elimida com sucesso"),
          queryClient.invalidateQueries({queryKey:["shops"]})
        },
        onError:()=>{
          toast.error("Algo deu errado, tentar novamente")
        }
    })
  return {data, isLoading}
}

