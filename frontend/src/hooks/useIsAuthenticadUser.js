import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { userAuthenticad } from '../services/apifeatures';


export function useIsAuthenticadUser() {
    const {isLoading,data,error} = useQuery({
        queryKey:['user-logged'],
        queryFn:userAuthenticad
    });

  return {isLoading,data}
}

 