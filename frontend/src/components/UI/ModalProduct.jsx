import React, { useState } from 'react'
import FormProducts from '../Shop/products/formProducts'
import { useGetMyShops } from '../../hooks/useGetMyShops';
import { useIsAuthenticadUser } from '../../hooks/useIsAuthenticadUser';
import { FaCircleXmark } from "react-icons/fa6";
import { useContextModal } from '../../context/contextModel';
import Spinner from './Spinner';

function ModalProduct() {
    const{isLoading,data:shops}=useGetMyShops();
    const{isLoading:isVerifyUser, data:dataUser} = useIsAuthenticadUser();
    const[shop,setShop] = useState("");
    const{handleModalNewProduct}= useContextModal();
    
  
  
    if(isLoading || isVerifyUser){
      return <Spinner/>
    }
  
  return (
    <div className="fixed top-0  left-0 w-[100%] h-[100vh]
    backdrop-contrast-[90%] bg-black/50 z-10 transition-all duration-[0.5]   shadow-md">
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-100 px-[3.2rem] py-[4rem]
    transition-all duration-1000 h-screen overflow-auto ">

{shops.length===0 ? <h1>Não existe nenhuma loja criada!</h1>
      :(<div>
        <h1 className='text-gray-700  text-[1.5rem] mt-8 text-center'>Adicionar um novo producto</h1>

      <div id='controllerShop' className=' mx-16'>
             
            <label className='text-gray-700'>Escolhe a loja</label>
             <select name="shop"  className="  border border-sky-500  rounded-md p-2 w-full" id="shop-select" onChange={(e)=>setShop(e.target.value)}>
             <option defaultValue=""> </option> 
             {shops.shop.map((shopItem => 
             <option key={shopItem._id} value={shopItem._id}>{shopItem.name} </option> ))}
             
             
             </select>
             </div>
     
     
     <FormProducts shop={shop} user={dataUser.user._id}/>
     </div>
     
     )}
        </div>
         <button className='absolute top-5 right-10 text-3xl  p-2 text-sky-100 hover:text-yellow-100' onClick={()=>handleModalNewProduct()}><FaCircleXmark/></button>
    </div>
  )
}

export default ModalProduct