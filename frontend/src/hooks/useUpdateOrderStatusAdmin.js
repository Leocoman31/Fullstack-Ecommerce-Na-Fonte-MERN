
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { updateOrderStatusAdmin } from '../services/apifeatures'
import toast from 'react-hot-toast';

export function useUpdateOrderStatusOrder() {
  const queryClient = useQueryClient();

    const {mutate:data,isLoading, error} =useMutation({
        mutationFn:(id) =>updateOrderStatusAdmin(id),
        onSuccess:()=>{
          
          toast.success("Estado da encomenda foi atualizado")
          queryClient.invalidateQueries({queryKey:["orders"]})
          

        },
        onError:()=>{
          toast.error("Algo deu errado, tentar novamente")
        }

    })

    
  return {isLoading, data,error}
}

