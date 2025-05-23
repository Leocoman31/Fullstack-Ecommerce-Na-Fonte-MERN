import React from 'react'
import Shop from './Shop'

function ShopsList({shops}) {
  return (
    <div className='h-screen overflow-auto'>
        {shops.map(shop => <Shop shop = {shop} key={shop._id}/>)}
    </div>
  )
}

export default ShopsList