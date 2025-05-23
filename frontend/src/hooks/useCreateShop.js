import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { createShop } from '../services/apiFeatures'
import toast from 'react-hot-toast'

export function useCreateShop() {

    const queryClient = useQueryClient()
    const{isLoading,mutate:shop,error}=useMutation({
        mutationFn:(data)=>createShop(data),
        onSuccess:() =>{

            toast.success("Loja cadastrada com sucesso")
            queryClient.invalidateQueries({queryKey:['shops']})

        },

        onError:()=>{
            toast.error("Nao foi possivel cadastrar a loja. Tenta mais tarde")
        }

    })

  return {isLoading,shop,error}
}

