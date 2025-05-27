import { useQuery } from '@tanstack/react-query'
import { getAllProducts } from '../services/apiFeatures'


export function useGetAllProducts({currentPage}) {
    const {isLoading,data} = useQuery({
        queryKey:['Products'],
        queryFn:()=>getAllProducts(currentPage)
    })
  return {isLoading, data}
}

