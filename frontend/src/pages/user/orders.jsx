import React from 'react'
import OrderList from '../../components/User/OrderList'
import { useGetMyOrders } from '../../hooks/useGetMyOrders'
import Spinner from '../../components/UI/Spinner'

function Orders() {
  const {data:listOrder, isLoading} =useGetMyOrders() 



  if(isLoading){
    return <Spinner/>
  }
  return (
    <div className='m-16 space-y-4'>

      <div className='flex justify-end gap-x-4'>
      <select className=' px-6 rounded-md py-2 bg-gray-200 text-sm'>
      <option>A Processar</option>
        <option>Confirmada</option>
        <option>A caminho</option>
        <option>Entregue</option>
      </select>


<div className=' px-6 rounded-md py-2 bg-gray-200 text-sm'>

<input type='date' className='px-4' />

</div>
     

      </div>
      
      <OrderList listOrder={listOrder}/>
    </div>
  )
}

export default Orders