import React, { useState } from 'react'

import { useGetAllProductsShop } from '../../hooks/useGetAllProductsShop'
import Spinner from '../../components/UI/Spinner'
import ListProductsShop from '../../components/Shop/ListProductsShop'
import { useGetAllProductsSeller } from '../../hooks/useGetAllProductsSeller'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContextModal } from '../../context/contextModel'
import ModalProduct from '../../components/UI/ModalProduct'
import { useGetMyShops } from '../../hooks/useGetMyShops'
import { IoSearchOutline } from "react-icons/io5";

function Products() {
 //const {isLoading,data,error} =useGetAllProductsShop()
  const{isLoading:isGetingMyShops,data:shops}=useGetMyShops();

  const {isLoading,data,error} = useGetAllProductsSeller();
  const{openModalProduct,handleModalNewProduct,} =useContextModal();
  const[shop,setShop]= useState("");


  if(isLoading ||isGetingMyShops){
    return <Spinner/>
  }





 


  return (

    
    <div>
  

      <div className='flex gap-4  justify-center items-center text-gray-500  mb-8 '>
      <div>
 <button onClick={()=>handleModalNewProduct()}><AiOutlinePlusCircle className='inline mr-2' size={20}/>Novo Producto</button>
   {openModalProduct && <ModalProduct/>} 
  </div>

  <div>

  <div className='flex justify-center items-center text-gray-500'>
  <select name="shop"  className="   p-2 w-full" id="shop-select" onChange={(e)=>setShop(e.target.value)}>
             <option defaultValue="">Filtrar por loja</option> 
             {shops.shop.map((shopItem => 
             <option key={shopItem._id} value={shopItem._id}>{shopItem.name} </option> ))}
             
             
             </select>
             <button className=" text-gray-300  px-4  " ><IoSearchOutline color='gray' size={24}/></button>

  </div>

  </div>

  <div>
     <div className='flex w-full '>
                  
                <input type="text" className=" block px-4 w-full py-2 " placeholder=" buscar producto ... "/>
                
               
                <button className=" text-gray-300  px-4  " ><IoSearchOutline color='gray' size={24}/></button>
    
           
               
                </div>
  </div>
        
      </div>

<div>
  
{//<ListProductsShop listProducts={data}/>
}

</div>
  
    </div>
  )
}

export default Products