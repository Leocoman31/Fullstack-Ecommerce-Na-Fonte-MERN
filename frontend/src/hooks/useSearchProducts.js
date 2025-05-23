import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { searchProducts } from '../services/apifeatures'


export function useSearchProducts({keywo}) {

    const {isLoading,data,error} = useQuery({
        queryKey:['search-products',keywo],
        queryFn:() =>searchProducts(keywo)
    })
    


  return {isLoading,data,error}
}

