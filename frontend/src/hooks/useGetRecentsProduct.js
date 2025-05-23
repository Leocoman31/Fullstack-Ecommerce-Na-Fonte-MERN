import { useQuery } from '@tanstack/react-query'
import { recentsProducts } from '../services/apifeatures'



export function useGetRecentsProducts() {

    const {isLoading, data:reProducts, error} = useQuery({
        queryKey:['products-recents'],
        queryFn:recentsProducts
    })
  return {isLoading, reProducts, error}
}

