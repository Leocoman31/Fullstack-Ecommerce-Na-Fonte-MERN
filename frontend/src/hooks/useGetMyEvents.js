
import { useQuery } from '@tanstack/react-query'
import { getAllEventsSeller } from '../services/apifeatures'

export function useGetMyEvents() {
    const {isLoading,data,error} =useQuery({
        queryKey:['events'],
        queryFn: getAllEventsSeller

    })

    
  return {isLoading, data,error}
}

