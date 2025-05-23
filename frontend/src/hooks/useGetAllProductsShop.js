import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProductsShop } from '../services/apiFeatures'


export function useGetAllProductsShop() {

    const {isLoading, data, error} = useQuery({
        queryKey:['products-shop'],
        queryFn: getAllProductsShop
    })
  return {isLoading, data, error}
}

