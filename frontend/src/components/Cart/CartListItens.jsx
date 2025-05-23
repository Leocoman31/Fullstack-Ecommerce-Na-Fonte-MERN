import React from 'react'
import CartItens from './CartItens'

function CartListItens({list}) {
  return (
    <div>
       { list.map((item,index)=> <CartItens key={index} item={item}/>)}
    </div>
  )
}

export default CartListItens