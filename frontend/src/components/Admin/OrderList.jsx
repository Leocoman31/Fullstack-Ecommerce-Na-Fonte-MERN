import React from 'react'
import Order from './Order'

function OrderList({orderList}) {
  return (
    <div>
        {
            orderList.orders.map(order => <Order key={order._id} orders={order}/>)
        }
    </div>
  )
}

export default OrderList