
import { useQuery } from '@tanstack/react-query'
import { getProduct } from '../services/apifeatures'

export function useGetproduct({id}) {
    const {isLoading,data,error} =useQuery({
        queryKey:['products',id],
        queryFn:() =>getProduct(id)

    })

    
  return {isLoading, data,error}
}

