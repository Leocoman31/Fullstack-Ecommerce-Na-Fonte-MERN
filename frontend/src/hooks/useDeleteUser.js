import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import { deleteUser } from '../services/apifeatures';
import toast from 'react-hot-toast';

export function useDeleteUser() {

    const queryClient = useQueryClient();
    const {mutate:data, isLoading}=useMutation({
        mutationFn:(id)=> deleteUser(id),
        onSuccess:()=>{
          toast.success("Usuário eliminado com sucesso"),
          queryClient.invalidateQueries({queryKey:["users"]})
        },
        onError:()=>{
          toast.error("Algo deu errado, tentar novamente")
        }
    })
  return {data, isLoading}
}

