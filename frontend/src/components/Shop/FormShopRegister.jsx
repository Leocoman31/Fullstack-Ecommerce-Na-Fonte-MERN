import React from 'react'
import { useForm } from 'react-hook-form'
import { useCreateShop } from '../../hooks/useCreateShop';
import { useContextModal } from '../../context/contextModel';

function FormShopRegister() {
    const{handleSubmit, register,reset,formState}= useForm();
    const {isLoading, shop, error} = useCreateShop();
    const{ showModelShop,handleModelShop} =useContextModal();
    const {errors} =formState;


    function onSubmitForm (data){
       
        shop({...data},{onSuccess:()=>{
            reset();
            handleModelShop();

        }})

    }


    function onError(error)
    {
        console.log("coman")
    }

  return (
    <div>
        <h1 className='text-gray-900 font-semibold text-lg text-center' >Bem-vindo a pagina de cadastro de uma Loja </h1>
    <form onSubmit={handleSubmit(onSubmitForm,onError)}>

<div className='grid w-full my-3'>
  <label className='text-gray-700 '>Nome da loja</label>
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
  <label className='text-gray-700 '>Endereço</label>
  <input  type="text" id="address" {...register("address",{required:"Campo obrigátorio*"})} placeholder='Digite o endereço'
   className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
  {errors?.address?.message && <span className='text-red-500 text-sm'>{errors?.address.message}</span>}
  
</div>
<div className='grid w-full my-3'>
  <label className='text-gray-700 '>Número de telefone</label>
  <input  type="tel" id="phoneNumber" {...register("phoneNumber",{required:"Campo obrigátorio*"})} placeholder='Digite o número de telefone'
   className='px-3 py-2 w-[430px] rounded-lg border border-sky-500  text-gray-700'/>
  {errors?.phoneNumber?.message && <span className='text-red-500 text-sm'>{errors?.phoneNumber.message}</span>}
  
</div>

<div className='grid w-full my-3'>
  <label className='text-gray-700 '>Descrição da Loja</label>
  <textarea  id="description" {...register("description",{required:"Campo obrigátorio*"})} rows={5}  placeholder='Digite a descrição da loja'
   className='px-3 py-2  rounded-lg border border-sky-500  text-gray-700 w-[100%]'>
    </textarea>

  {errors?.phoneNumber?.message && <span className='text-red-500 text-sm'>{errors?.phoneNumber.message}</span>}
  
</div>



<div className='flex justify-end'>
<button  type="submit" className='bg-gray-950   text-white hover:bg-sky-600  border px-8 py-1.5 '>Cadastrar Loja</button>

</div>

</form>

    </div>
  )
}

export default FormShopRegister