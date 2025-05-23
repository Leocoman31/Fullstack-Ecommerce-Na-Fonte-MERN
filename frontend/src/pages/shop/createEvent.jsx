import React, { useState } from 'react'
import { useCreateEvent } from '../../hooks/useCreateEvent'
import { useForm } from 'react-hook-form';
import Spinner from '../../components/UI/Spinner';
import { useGetMyShops } from '../../hooks/useGetMyShops';
import { useIsAuthenticadUser } from '../../hooks/useIsAuthenticadUser';

import { AiOutlinePlusCircle } from "react-icons/ai";
function CreateEvent() {
  const {isLoading:isCreatingEvent, addEvent, error} = useCreateEvent();
  const{register, handleSubmit,reset} = useForm();
  const{isLoading,data:shops}=useGetMyShops();
   const{isLoading:isVerifyUser, data:dataUser} = useIsAuthenticadUser();
   const [shop , setShop]= useState("")
   const[img,setImg] = useState("")

  
   const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
  
    setImg([]);
  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImg((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };


  function handleEvent(data){

    const event={
      name:data.name,
      start_Date:data.start_Date,
      finish_Date:data.finish_Date,
      discount:data.discount,
      user:dataUser.user._id,
      description:data.description,
      shop,
      imageCover:img



    }

    console.log(event)

    addEvent(event,{
      onSuccess:()=>{
        reset();

        
      }
    })

  }

  if(isLoading || isVerifyUser){
    return <Spinner/>

  }



  return (
    <div className='text-gray-800'>

<div id='controllerShop' className='w-full'>
        
       
        <select name="category"  className="  border border-sky-500  rounded-md p-2 w-full" id="category-select" onChange={(e)=>setShop(e.target.value)}>
        <option >Escolhe a loja </option> 
        {shops.shop.map((shopItem => 
        <option key={shopItem._id} value={shopItem._id}>{shopItem.name} </option> ))}
        
        
        </select>
        </div>

         <div>
               
                <div>
                <label className="pb-2">
                    Selecione entre 1 imagem para a capa da promoção <span className="text-red-500">(Máximo 1MB)*</span>
                  </label>
                    <input type='file'  
                    className="hidden"   id='upload' multiple name="images" onChange={handleImageChange} />
                </div>
        
                <div className="w-full flex items-center flex-wrap">
                    <label htmlFor="upload">
                      <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                    </label>
                    {img &&
                      img.map((i) => (
                        <img
                          src={i}
                          key={i}
                          alt=""
                          className="h-[120px] w-[120px] object-cover m-2"
                        />
                      ))}
                  </div>
        
                </div>
   
    <form onSubmit={handleSubmit(handleEvent)} className='space-y-8'>

      
    

    
      <div id='name_event'>
        <label>Nome do Evento</label>
        <input type='text'  className=' border border-sky-500  rounded-md p-2 w-full' placeholder='Digite o nome da promoção' name='name' {...register("name", {required:"Campo obrigatório*"})}/>

      </div>
      <div className='flex gap-4'>
      <div id='start'>
        <label>Inicio do evento</label>
        <input type='date'  className=' border border-sky-500  rounded-md p-2 w-full'  name='start_Date' {...register("start_Date", {required:"Campo obrigatório*"})}/>

      </div>

      <div id='end'>
        <label>Fim do evento</label>
        <input type='date'  className=' border border-sky-500  rounded-md p-2 w-full'  name='finish_Date' {...register("finish_Date", {required:"Campo obrigatório*"})}/>

      </div>

      <div id='promo'>
        <label>Promoção(%)</label>
        <input type='text'  className=' border border-sky-500  rounded-md p-2 w-full'  name='discount' {...register("discount", {required:"Campo obrigatório*"})}/>

      </div>

    

      </div>

      <div id='controllerDescription  ' className='flex  justify-center'>

<textarea id="description" className=' border border-sky-500  rounded-md  p-4' name="description" rows="10" cols="80"{...register("description", {required:"Campo obrigatório*"})}>
  Descrição do produto...
</textarea>

      </div>


      <button type='submit'>Criar evento</button>

    </form>

    </div>
  )
}

export default CreateEvent