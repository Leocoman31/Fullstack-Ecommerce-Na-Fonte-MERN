
import { useQuery } from '@tanstack/react-query'
import { getMyShops } from '../services/apifeatures';


export function useGetMyShops() {
    const {isLoading,data,error} =useQuery({
        queryKey:['my-shops'],
        queryFn: getMyShops

    })

    
  return {isLoading, data,error}
}

