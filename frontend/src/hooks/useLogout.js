import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { logout } from '../services/apifeatures'

export function useLogout() {
    const {isLoading, data, error} = useQuery({
        queryKey:['users'],
        queryFn:logout
    })
  return 
  {isLoading, data, error}
  
}

