import toast from 'react-hot-toast'

import { useQuery } from '@tanstack/react-query'
import { getAllWitdraw } from '../services/apifeatures'

export function useGetAllWitdraw(){
 
    const{data,isLoading,error} =useQuery({

       queryKey:["witdraw"],
       queryFn:getAllWitdraw
    })
  return {data,isLoading,error}
}

