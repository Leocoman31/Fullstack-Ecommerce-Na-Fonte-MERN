import React, { useState } from 'react'
import Spinner from '../../components/UI/Spinner';
import ListShops from '../../components/Shop/ListShops';
import { useGetMyShops } from '../../hooks/useGetMyShops';
import { IoSearchOutline } from "react-icons/io5";

function Shops() {


      const[filterShopStatus, setFilterShpoStatus]= useState("");
      const[filterShop, setFilterShop]= useState("");
      const[filterShopSeller,setFilterShopSeller] = useState("")
    
  
   const{isLoading,data:shops}=useGetMyShops();


   

   if(isLoading){
    return <Spinner/>
   }
  return (
    <div className='m-16 space-y-4'> 
    <div className='flex gap-x-4 justify-center'>
    
            {<div >
              { (filterShopStatus.length>0  || filterShop.length>0) &&  <div className='px-4 py-2  relative rounded-lg text-gray-500 border border-sky-500 bg-white'><span className='absolute bottom-6 right-0 rounded-[50%] bg-sky-500 text-white text-[10px] px-2 py-1'>1</span>
              <button  onClick={handleRemoveFilter} className='text-sm '>Remover todos filtros</button>
              </div>}
            </div>}
                 <div className="flex w-[40%]  ">
                            <div className="relative w-full">
                              
                            <input type="text" onChange={(e)=>setFilterShop(e.target.value)} className=" rounded-lg bg-white  border border-sky-500 block w-full px-4 py-3 text-sm " placeholder="Olá, o que você procura?"/>
                            
                           
                            <button  className=" text-black absolute  end-2.5 bottom-2.5" ><IoSearchOutline size={22}/></button>
                
                       
                           
                            </div>
                
                            
                          </div>
    
           
                    <select onChange={(e)=>setFilterShpoStatus(e.target.value)} className='bg-white border border-sky-500 rounded-lg p-2 text-sm'>
                        <option>Todas lojas</option>
                        <option>Processando</option>
                        <option>Confirmado</option>
                        <option>Verificado</option>
                    </select>

                    <select onChange={(e)=>setFilterShopSeller(e.target.value)} className='bg-white border border-sky-500 rounded-lg p-2 text-sm'>
                      <option value="">Todas as lojas</option>
                       {
                        shops.shop.map((shop) => <option key={shop._id} value={shop.name} >{shop.name}</option>)
                       }
                    </select>
    
                 
              
    
                    
    
            </div>
      <h1 className='text-[1rem]'>{shops.results} lojas encontradas </h1>
      <ListShops shops={shops}/>
    </div>
  )
}

export default Shops