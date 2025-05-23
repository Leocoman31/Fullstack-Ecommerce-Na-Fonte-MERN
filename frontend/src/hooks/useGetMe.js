
import { useQuery } from '@tanstack/react-query'
import { getMe } from '../services/apifeatures'


export function useGetMe() {
    const {isLoading,data,error} =useQuery({
        queryKey:['my-data'],
        queryFn: getMe

    })

    
  return {isLoading, data,error}
}

