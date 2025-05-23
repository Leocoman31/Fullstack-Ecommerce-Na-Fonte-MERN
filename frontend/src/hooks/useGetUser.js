
import { useQuery } from '@tanstack/react-query'
import { getMe, getUser } from '../services/apifeatures'


export function useGetUser({id}) {
    const {isLoading,data,error} =useQuery({
        queryKey:['user',id],
        queryFn:()=> getUser(id)

    })

    
  return {isLoading, data,error}
}

