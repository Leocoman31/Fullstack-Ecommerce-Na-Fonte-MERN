import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteProduct } from '../services/apifeatures';
import toast from 'react-hot-toast';

export function useDeleteProduct() {

    const queryClient = useQueryClient();
    const {mutate:data, isLoading}=useMutation({
        mutationFn:(id)=> deleteProduct(id),
        onSuccess:()=>{
          toast.success("Producto eliminado com sucesso"),
          queryClient.invalidateQueries({queryKey:["products"]})
        },
        onError:()=>{
          toast.error("Algo deu errado, tentar novamente")
        }
    })
  return {data, isLoading}
}

