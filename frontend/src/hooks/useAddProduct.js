import toast from 'react-hot-toast'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { addProduct } from '../services/apifeatures'

export function useAddProduct() {
    const queryClient = useQueryClient()
 
    const{mutate:data,isLoading,error} =useMutation({
        mutationFn:(data)=>addProduct(data),
        onSuccess:()=>{
            toast.success("Producto adicionado com sucesso"),
            queryClient.invalidateQueries({queryKey:['products']})

        },

        onError:()=>{
            toast.error("Erro ao adicionar o produto, tente mais tarde");
        }

    })
  return {data,isLoading,error}
}

