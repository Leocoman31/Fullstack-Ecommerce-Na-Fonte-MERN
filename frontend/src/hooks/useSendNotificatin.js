import { useMutation, useQueryClient } from '@tanstack/react-query'
import React from 'react'
import toast from 'react-hot-toast';
import { sendNotificaction } from '../services/apifeatures';

export function useSendNotificatin() {
    const queryClient = useQueryClient();
    const{mutate:data, isLoading}=useMutation({
        mutationFn:(message,type,id)=>sendNotificaction(message,type, id),
        onSuccess:()=>{
            toast.success("notificação enviada com sucesso"),
            queryClient.invalidateQueries({queryKey:["notifications"]});

        },
        onError:()=>{
            toast.error("Algo deu errado, tentar novamente")
        }
    })
  return {data, isLoading}
}

