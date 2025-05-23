import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getProductsWithSameName } from '../services/apifeatures'

export function useGetProductsWithSameName(id) {
  const {isLoading, data} =useQuery({
    queryKey:['product-withSameName',id],
    queryFn:() =>getProductsWithSameName(id)
  });


  return {isLoading,data}
}

 
