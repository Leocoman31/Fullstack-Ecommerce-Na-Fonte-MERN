import { useQuery } from '@tanstack/react-query'
import { getAllEvents } from '../services/apifeatures'

export function useGetAllEvents() {
    const {isLoading,data} = useQuery({
        queryKey:['events'],
        queryFn:getAllEvents
    })
  return {isLoading, data}
}

