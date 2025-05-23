import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerApi } from "../services/apiFeatures";
import toast from 'react-hot-toast';



export const useRegister = () =>{
const queryClient  =useQueryClient();
const {mutate:signIn, isLoading } = useMutation({
    mutationFn:(data)=> registerApi(data),
    onSuccess:()=>{
    toast.success("Cadastro feito com sucesso")
    queryClient.invalidateQueries({queryKey:["users"]})

    },

    onError:(err)=>{
        toast.error(err.message);

    }
 

});




return {signIn,isLoading}
}