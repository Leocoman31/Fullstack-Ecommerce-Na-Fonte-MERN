import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/apiFeatures'


export function useGetAllProducts() {
    const {isLoading,data} = useQuery({
        queryKey:['Products'],
        queryFn:getAllProducts
    })
  return {isLoading, data}
}

