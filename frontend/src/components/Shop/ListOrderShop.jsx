import React from 'react'
import OrderShop from './OrderShop'

function ListOrderShop({orderList}) {
   
  return (
    <div>
      {
        orderList.order(order =><OrderShop key={order._id} oroder ={order}/>)
      }
    </div>
  )
}

export default ListOrderShop