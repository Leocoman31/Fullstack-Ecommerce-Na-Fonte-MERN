import { useQuery } from '@tanstack/react-query'
import { getAllNotificactionsUSer } from '../services/apifeatures'



export function useGetAllNotificationsUser() {

    const {isLoading, data, error} = useQuery({
        queryKey:['notifications'],
        queryFn:getAllNotificactionsUSer
    })
  return {isLoading, data, error}
}

