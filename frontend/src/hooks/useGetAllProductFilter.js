import { useQuery } from '@tanstack/react-query'
import {  getFilterProduct } from '../services/apiFeatures'


export function useGetAllProductFilter({filterSearch}) {
    const {isLoading,data} = useQuery({
        queryKey:['Products-SearchFilter',filterSearch],
        queryFn:() =>getFilterProduct(filterSearch)
    })
  return {isLoading, data}
}

