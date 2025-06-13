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
  const[shop,setShop]= useState("");
 const {isLoading:isGettingAllProducts,data:listproducts} =useGetAllProductsShop({shop})
  const{isLoading:isGetingMyShops,data:shops}=useGetMyShops();

  const {isLoading,data,error} = useGetAllProductsSeller();
  const{openModalProduct,handleModalNewProduct,} =useContextModal();
  


  if(isLoading ||isGetingMyShops || isGettingAllProducts){
    return <Spinner/>
  }





 


  return (

    
    <div className='m-16'>
  
  {openModalProduct && <ModalProduct/>} 
      <div className='flex gap-4  justify-center items-center text-gray-500  mb-8 '>
      <div className='bg-white border border-sky-500 rounded-lg px-2 py-1'>
 <button onClick={()=>handleModalNewProduct()}><AiOutlinePlusCircle className='inline mr-2' size={20}/>Novo Producto</button>

  </div>

  <div>

  <div className=' bg-white border border-sky-500 px-2 py-1 rounded-lg text-gray-500'>
  <select name="shop"  className="  w-full" id="shop-select" onChange={(e)=>setShop(e.target.value)}>
             <option defaultValue="">Filtrar por loja</option> 
             {shops.shop.map((shopItem => 
             <option key={shopItem._id} value={shopItem._id}>{shopItem.name} </option> ))}
             
             
             </select>
          

  </div>

  </div>


     <div className='flex  border border-sky-500 rounded-lg bg-white   '>
                  
                <input type="text" className=" block w-[70%] px-4 py-1 " placeholder=" buscar producto ... "/>
                
               
                <button className=" text-gray-300  px-4  " ><IoSearchOutline color='gray' size={24}/></button>
    
           
               
                </div>
  
        
      </div>

<div>
  
{//<ListProductsShop listProducts={data}/>
}
{
  shop.length > 0 && <ListProductsShop listProducts={listproducts}/>
}

</div>
  
    </div>
  )
}

export default Products