import React from 'react'

function OrderDetail({order}) {
    console.log(order)
  return (
    <div>{order.totalAmount}</div>
  )
}

export default OrderDetail