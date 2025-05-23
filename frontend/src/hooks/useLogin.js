import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginApi } from "../services/apiFeatures";
import toast from "react-hot-toast";




export const useLogin = () =>{
const queryClient  =useQueryClient();
const {mutate:login, isLoading } = useMutation({
    mutationFn:(data)=> loginApi(data),
    onSuccess:()=>{
    toast.success("Login feito com sucesso")
    queryClient.invalidateQueries({queryKey:["users"]})

    },

    onError:(err)=>{
        toast.error(err.message);

    }
 

});


return {login,isLoading}
}