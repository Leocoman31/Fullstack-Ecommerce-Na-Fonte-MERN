
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { updateStatusShop } from '../services/apifeatures'
import toast from 'react-hot-toast';

export function useUpdateShopStatus() {
  const queryClient = useQueryClient();

    const {mutate:data,isLoading, error} =useMutation({
        mutationFn:(id) =>updateStatusShop(id),
        onSuccess:()=>{
          
          toast.success("Estado da loja foi atualizado")
          queryClient.invalidateQueries({queryKey:["shops"]})
          

        },
        onError:()=>{
          toast.error("Algo deu errado, tentar novamente")
        }

    })

    
  return {isLoading, data,error}
}

