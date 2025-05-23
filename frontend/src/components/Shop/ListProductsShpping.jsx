import React from 'react'
import CardProductAll from '../UI/CardProductAll'

function ListProductsShpping({listProducts}) {
    return (
        <div className='grid grid-cols-5 gap-2'>
            {
                listProducts.data.map((product) => <CardProductAll key={product._id} product={product}/>)
            }
    
        </div>
      )
}

export default ListProductsShpping