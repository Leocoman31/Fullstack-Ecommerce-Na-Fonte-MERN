import { useQuery } from '@tanstack/react-query'
import { getSpeciaisOfersProducts } from '../services/apifeatures'



export function useGetSpecialProducts() {

    const {isLoading, data:specialProducts, error} = useQuery({
        queryKey:['products-speciais'],
        queryFn:getSpeciaisOfersProducts,
    })
  return {isLoading, specialProducts, error}
}

