
import { useQuery } from '@tanstack/react-query'
import { getEventAdmin } from '../services/apifeatures'

export function useGetEventAdmin({id}) {
    const {isLoading,data,error} =useQuery({
        queryKey:['eventDetail',id],
        queryFn:()=> getEventAdmin(id)

    })

    
  return {isLoading, data,error}
}

