import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useRegister } from '../../hooks/useRegister';
import { useLogin } from '../../hooks/useLogin';
import { useContextModal } from '../../context/contextModel'





function FormAuth() {
    const {register,handleSubmit,reset,getValues,formState} =useForm();
    const [modelType,SetmodelType]=useState("register");
     const {errors} =formState;
     const{signIn,isLoading:isSignIn} = useRegister();
     const{login,isLoading:isloging} = useLogin();
    const navigate = useNavigate();
    const{openAuth,handleAuthModel} = useContextModal();

  
  

    async function  onSubmitSignIn(data){

        
        signIn({...data},{onSuccess:()=>{
            reset();
            handleAuthModel();
            window.location.reload()
        
            },
        
            onError:(err)=>{
                toast.error(err.message);
        
            }});


        




    }

    async function  onSubmitLogin(data){
        
         login({...data},{ onSuccess:()=>{
            reset();
            handleAuthModel();
            window.location.reload()
        
            },
            
    onError:(err)=>{
        toast.error(err.message);

    }
 
        })

       

  


    }


    function onError(){
     console.log(errors)


    }




 
  return (
    <div>
    <div className='flex flex-col justify-center items-center gap-2'>
   
        {modelType === "register" ? (
            <>
            <h1 className='text-black font-semibold text-2xl'>Bem-vindo ao Cadastro</h1>
        <p className='text-black'>Já tem uma conta, faça o Login  <button onClick={()=>SetmodelType("login")} ><span className='underline'>aqui!</span></button></p>
        <form onSubmit={handleSubmit(onSubmitSignIn,onError)}>

            <div className='my-3'>
            <label className='text-gray-700 '>Tipo de usúario</label>

            <select name="role"  className="  border border-sky-500  rounded-md p-2 w-full" id="role-select"  {...register("role",{required:"Campo obrigátorio*"})} >
<option value="default">Escolha o tipo de usúario</option>
<option value="user">Comprador</option>
<option value="Seller">Vendedor</option>
</select>

 

            </div>
          <div className='grid w-full my-3'>
            <label className='text-gray-700 '>Nome</label>
            <input  type="text" id="name" {...register("name",{required:"Campo obrigátorio*"})} placeholder='Digite o seu nome'
             className='px-3 py-2 w-[430px] rounded-lg border border-sky-500 text-gray-700'/>
            {errors?.name?.message && <span className='text-red-500 text-sm'>{errors?.name.message}</span>}
            
        </div>

        <div className='grid w-full my-3'>
            <label className='text-gray-700 '>Email</label>
            <input  type="email" id="email" {...register("email",{required:"Campo obrigátorio*"})} placeholder='Digite o seu email'
             className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
            {errors?.email?.message && <span className='text-red-500 text-sm'>{errors?.email.message}</span>}
            
        </div>

        <div className='grid w-full my-3'>
            <label className='text-gray-700 '>Password</label>
            <input  type="password" id="password" {...register("password",{required:"Campo obrigátorio*"})} placeholder='Digite a sua password'
             className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
            {errors?.password?.message && <span className='text-red-500 text-sm'>{errors?.password.message}</span>}
            
        </div>
        <div className='grid w-full my-3'>
            <label className='text-gray-700 '>Confirmar Password</label>
            <input  type="password" id="passwordConfirm" {...register("passwordConfirm",{required:"Campo obrigátorio*"})} placeholder='Digite a sua password para confrmar'
             className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
            {errors?.passwordConfirm?.message && <span className='text-red-500 text-sm'>{errors?.passwordConfirm.message}</span>}
            
        </div>
        <div className='flex justify-end'>
        <button  type="submit" className='bg-sky-700 rounded-lg  text-white hover:bg-sky-900  border px-8 py-1.5 '>Cadastrar</button>
    
        </div>

    </form></>) 

    :(<> 
    <h1 className='text-black font-semibold text-2xl'>Bem-vindo ao Login</h1>
    <p className='text-black'>Não, tem ainda uma conta? clique  <button onClick={()=>SetmodelType("register")} ><span className='underline'>aqui!</span></button></p>
    <form onSubmit={handleSubmit(onSubmitLogin,onError)}>

    <div className='grid w-full my-3'>
        <label className='text-gray-700 '>Email</label>
        <input  type="email" id="email" {...register("email",{required:"Campo obrigátorio*"})} placeholder='Digite o seu email'
         className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
        {errors?.email?.message && <span className='text-red-500 text-sm'>{errors?.email.message}</span>}
        
    </div>

    <div className='grid w-full my-3'>
        <label className='text-gray-700 '>Password</label>
        <input  type="password" id="email" {...register("password",{required:"Campo obrigátorio*"})} placeholder='Digite a sua password'
         className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
        {errors?.password?.message && <span className='text-red-500 text-sm'>{errors?.password.message}</span>}
        
    </div>
    <div className='flex justify-end'>
   <button  className='bg-sky-700 rounded-lg   text-white hover:bg-sky-900  border px-10 py-1.5 '>Entrar</button>
    </div>
    <p className='text-gray-700 text-center'>Esqueceu a sua password? clique <Link to="#">aqui!</Link></p>

</form>
</>)
    
}





        
    </div>
    </div>
  )
}

export default FormAuth