import { useQuery } from '@tanstack/react-query'
import { getAllProductsFilter } from '../services/apiFeatures'



export function useGetAllProductsFilter({filterPriceUp,filterPriceLower,category }) {
    const {isLoading,data} = useQuery({
        queryKey:['Products-price',filterPriceUp,filterPriceLower,category],
        queryFn:() =>getAllProductsFilter(filterPriceUp,filterPriceLower, category)
    })
  return {isLoading, data}
}

