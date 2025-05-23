import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllProductsSeller } from '../services/apifeatures'


export function useGetAllProductsSeller() {

    const {isLoading, data, error} = useQuery({
        queryKey:['products-seller'],
        queryFn: getAllProductsSeller
    })
  return {isLoading, data, error}
}

