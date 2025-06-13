import React from 'react'
import CardProduct from './products/cardProduct'
import Product from './Product'

function ListProductsShop({listProducts}) {
 


  return (
    <div>
        {
            listProducts.products.map((product) => <Product key={product._id} product={product}/>)
        }

    </div>
  )
}

export default ListProductsShop