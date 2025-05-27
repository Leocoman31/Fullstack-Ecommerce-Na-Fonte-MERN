
import { useQuery } from '@tanstack/react-query'
import { getAllUsers } from '../services/apifeatures'


export function useGetAllUsers({currentPage}) {
    const {isLoading,data,error} =useQuery({
        queryKey:['users'],
        queryFn:()=>getAllUsers(currentPage)

    })

    
  return {isLoading, data,error}
}

