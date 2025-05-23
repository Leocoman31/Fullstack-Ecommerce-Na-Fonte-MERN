
import { useQuery } from '@tanstack/react-query'
import { getMyOrders } from '../services/apifeatures'


export function useGetMyOrders() {
    const {isLoading,data,error} =useQuery({
        queryKey:['myOrders'],
        queryFn: getMyOrders

    })

    
  return {isLoading, data,error}
}

