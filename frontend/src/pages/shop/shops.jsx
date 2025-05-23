import React from 'react'
import Spinner from '../../components/UI/Spinner';
import ListShops from '../../components/Shop/ListShops';
import { useGetMyShops } from '../../hooks/useGetMyShops';

function Shops() {

   const{isLoading,data:shops}=useGetMyShops();

   if(isLoading){
    return <Spinner/>
   }
  return (
    <div className='mt-8 '> 
      <h1 className='text-center text-xl mb-8'>Todas as suas lojas </h1>
      <ListShops shops={shops}/>
    </div>
  )
}

export default Shops