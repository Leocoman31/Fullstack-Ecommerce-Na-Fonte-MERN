import React from 'react'
import CardProduct from './products/cardProduct'

function ListProductsShop({listProducts}) {

  return (
    <div className='grid grid-cols-4 gap-2'>
        {
            listProducts.products.map((product) => <CardProduct key={product._id} product={product}/>)
        }

    </div>
  )
}

export default ListProductsShop