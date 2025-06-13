import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProductsShop } from '../services/apiFeatures'


export function useGetAllProductsShop({shop}) {

    const {isLoading, data, error} = useQuery({
        queryKey:['products',shop],
        queryFn:()=> getAllProductsShop(shop)
    })
  return {isLoading, data, error}
}

