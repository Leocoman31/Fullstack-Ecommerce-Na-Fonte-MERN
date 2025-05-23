import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getAllOrdersAdmin } from '../services/apifeatures'

export function useGetAllOrders() {
  const{isLoading, data,error} =useQuery({
    queryKey:['orders'],
    queryFn:getAllOrdersAdmin
  })
  return {isLoading, data, error}
}


