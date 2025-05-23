import { useQuery } from '@tanstack/react-query'
import { getAllShopsAdmin } from '../services/apifeatures'

export function useGetAllShops() {
    const {isLoading,data} = useQuery({
        queryKey:['shops'],
        queryFn:getAllShopsAdmin
    })
  return {isLoading, data}
}

