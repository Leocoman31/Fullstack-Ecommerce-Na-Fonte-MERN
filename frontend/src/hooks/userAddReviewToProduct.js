import { useMutation, useQueryClient } from '@tanstack/react-query'

import { addReviewToProduct } from '../services/apifeatures'
import toast from 'react-hot-toast';

export function userAddReviewToProduct() {

    const queryClient = useQueryClient();
    const {mutate:data, isLoading}= useMutation({
        mutationFn:(review,rating, product,user,imagesReviews)=>addReviewToProduct(review,rating, product,user,imagesReviews),
        onSuccess:()=>{
            toast.success("Comentário adicionado com sucesso");
            queryClient.invalidateQueries({queryKey:['products']})

        },

        onError:()=>{
            toast.error("Algo correu mal, tente mais tarde")
        }
    }

    )
    
  return {data, isLoading}
}

