import toast from 'react-hot-toast'

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { createOrder } from '../services/apifeatures'

export function useAddOrder(){
    const queryClient = useQueryClient()
 
    const{mutate:addOrder,isLoading,error} =useMutation({
        mutationFn:(order)=>createOrder(order),
       
    })
  return {addOrder,isLoading,error}
}

