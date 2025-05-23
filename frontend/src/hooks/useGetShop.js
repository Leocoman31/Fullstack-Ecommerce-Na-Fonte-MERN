
import { useQuery } from '@tanstack/react-query'
import { getShop } from '../services/apifeatures'


export function useGetShop({id}) {
    const {isLoading,data,error} =useQuery({
        queryKey:['shop',id],
        queryFn:()=> getShop(id)

    })

    
  return {isLoading, data,error}
}

