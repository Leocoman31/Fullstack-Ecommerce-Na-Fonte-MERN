
import { useQuery } from '@tanstack/react-query'
import { getEvent } from '../services/apifeatures'

export function useGetEvent({shop}) {
    const {isLoading,data,error} =useQuery({
        queryKey:['event',shop],
        queryFn:()=> getEvent(shop)

    })

    
  return {isLoading, data,error}
}

