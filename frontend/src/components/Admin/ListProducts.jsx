import React from 'react'
import Product from './Product'

function ListProducts({listProducts}) {


  return (
    <div>
        {
            listProducts.map((product) => <Product key={product._id} product={product}/>)
        }

    </div>
  )
}

export default ListProducts