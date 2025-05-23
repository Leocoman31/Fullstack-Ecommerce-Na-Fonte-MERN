import React from 'react'
import OrderCard from '../Order/OrderCard'

function OrderList({listOrder}) {



  return (
    <div>

      {listOrder.orders.length > 1 ?  <p className='text-lg'> {listOrder.orders.length} encomendas encontradas</p> :
       <p className='text-lg'> {listOrder.orders.length} encomenda encontrada</p> }
    
 


<div className='grid grid-cols-5 gap-x-4 space-y-4 '>
{

listOrder.orders.map(order => <OrderCard key={order._id} order = {order}/>)
}

</div>
       

    </div>
  )
}

export default OrderList