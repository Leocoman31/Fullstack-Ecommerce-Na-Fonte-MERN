import React from 'react'
import MyShop from './MyShop'

function ListShops({shops}) {
  return (
    <div>
        {shops.shop.map((shop) => <MyShop key={shop._id} shop={shop} />)}
    </div>
  )
}

export default ListShops