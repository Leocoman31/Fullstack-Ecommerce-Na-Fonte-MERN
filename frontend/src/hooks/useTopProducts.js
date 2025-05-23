import { useQuery } from '@tanstack/react-query'
import { topProducts } from '../services/apifeatures'



export function useTopProducts() {

    const {isLoading, data:productTop, error} = useQuery({
        queryKey:['products-top'],
        queryFn:topProducts
    })
  return {isLoading, productTop, error}
}

