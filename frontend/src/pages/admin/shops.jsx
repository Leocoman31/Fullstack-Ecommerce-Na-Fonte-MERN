import React, { useState } from 'react'
import { useGetAllShops } from '../../hooks/useGetAllShops'
import Spinner from '../../components/UI/Spinner'
import ListShops from '../../components/Shop/ListShops'
import ShopsList from '../../components/Admin/ShopsList'
import { IoSearchOutline } from "react-icons/io5";
import ModelShopDetail from '../../components/UI/ModelShopDetail'

function AllShops() {
    const{isLoading, data} =useGetAllShops();
    const[filterShopStatus, setFilterShpoStatus]= useState("");
    const[filterShop, setFilterShop]= useState("");



    function handleRemoveFilter (){
        setFilterShpoStatus("");
        setFilterShop("");

    }
    if(isLoading){
        return <Spinner/>
    }

  

  return (
    <div className='m-16 space-y-4'>


        
        <div className='flex gap-x-4 justify-center'>

        {<div >
          { (filterShopStatus.length>0  || filterShop.length>0) &&  <div className='px-4 py-2  relative rounded-lg text-gray-500 bg-white'><span className='absolute bottom-6 right-0 rounded-[50%] bg-sky-500 text-white text-[10px] px-2 py-1'>1</span>
          <button  onClick={handleRemoveFilter} className='text-sm '>Remover todos filtros</button>
          </div>}
        </div>}
             <div className="flex w-[40%]  ">
                        <div className="relative w-full">
                          
                        <input type="text" onChange={(e)=>setFilterShop(e.target.value)} className=" rounded-lg bg-white block w-full px-4 py-3 text-sm " placeholder="Olá, o que você procura?"/>
                        
                       
                        <button  className=" text-black absolute  end-2.5 bottom-2.5" ><IoSearchOutline size={22}/></button>
            
                   
                       
                        </div>
            
                        
                      </div>

       
                <select onChange={(e)=>setFilterShpoStatus(e.target.value)} className='bg-white p-2 text-sm'>
                    <option>Todas lojas</option>
                    <option>Processando</option>
                    <option>Confirmado</option>
                    <option>Verificado</option>
                </select>

             
          

                

        </div>
        <h1 className='text-[1rem'>{data.results} Lojas encontradas</h1>
        <ShopsList shops ={data.shops}/>
    </div>
  )
}

export default AllShops