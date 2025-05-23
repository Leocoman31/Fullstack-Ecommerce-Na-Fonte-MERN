import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getRelateProduct } from '../services/apifeatures'

export function useGetRelateproducts({id}) {
  const {isLoading, data} =useQuery({
    queryKey:['product-relate',id],
    queryFn:() =>getRelateProduct(id)
  });


  return {isLoading,data}
}

 
