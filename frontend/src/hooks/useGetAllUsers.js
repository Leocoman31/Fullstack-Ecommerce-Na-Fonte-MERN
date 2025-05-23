
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../services/apifeatures'


export function useGetAllUsers() {
    const {isLoading,data,error} =useQuery({
        queryKey:['users'],
        queryFn:getAllUsers

    })

    
  return {isLoading, data,error}
}

