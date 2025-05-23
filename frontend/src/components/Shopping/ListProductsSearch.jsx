import React from 'react'
import CardProductAll from '../UI/CardProductAll'

function ListProductsSearch({products}) {


  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-2 p-8'>
    {
        products.data.map((product) => <CardProductAll key={product._id} product={product}/>)
    }
</div>
  )
}

export default ListProductsSearch