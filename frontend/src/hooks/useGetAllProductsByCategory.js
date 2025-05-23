import { useQuery } from '@tanstack/react-query'
import { getAllProductsByCategory } from '../services/apiFeatures'


export function useGetAllProductsByCategory({category}) {
    const {isLoading,data} = useQuery({
        queryKey:['Products-category',category],
        queryFn:() =>getAllProductsByCategory(category)
    })
  return {isLoading, data}
}

