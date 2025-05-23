import { useMutation, useQueryClient } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import { createEvent } from '../services/apifeatures';

export function useCreateEvent() {
    const queryClient = useQueryClient();
    const {mutate:addEvent, isLoading, error}=useMutation({
        mutationFn:(event)=>createEvent(event),
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['events']});
            toast.success("Evento promocional criado com sucesso")
        
        },

        onError:()=>{
            toast.error("Ocorreu um erro, tetnta de novo")
        }


    })
  return {addEvent,isLoading,error}
  
}

