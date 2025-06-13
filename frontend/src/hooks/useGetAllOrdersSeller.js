import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllOrdersSeller } from '../services/apifeatures'

export function useGetAllOrdersSeller({id}) {
  const{isLoading, data,error} =useQuery({
    queryKey:['orders-seller',id],
    queryFn:getAllOrdersSeller(id)
  })
  return {isLoading, data, error}
}


