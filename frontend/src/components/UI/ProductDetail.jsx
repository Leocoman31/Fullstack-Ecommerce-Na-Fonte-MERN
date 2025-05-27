import React, { useState } from 'react'

function ProductDetail({product}) {
     const [selectImage, setSelectImage] = useState(0);
    
  return (
    <div>
    <div className='space-y-4'> 
    {   <div className='grid grid-cols-3   gap-4'>
                <div className='space-y-4  border-gray-500' >
                {product.images.map((imagem, index)=> <div key={imagem.public_id} className='flex justify-center items-center'>
                    <img src={imagem.url}  className={`${
                          selectImage === index ? "border-2" : "null"
                        } cursor-pointer rounded-lg w-full h-[100px] object-contain overflow-hidden`} 
                     onClick={() => setSelectImage(index)}/>
                    
                
                </div>)}
                </div>


                <div className='col-span-2 mx-auto'>
                <img src={product.images[selectImage].url} className=' rounded-xl h-[450px]' />
                </div>
            </div>
    }

    <div>
    <p > <span className='font-semibold'>Id: </span> {product.id} </p>
    <p > <span className='font-semibold'>Nome: </span> {product.name} </p>
    <p > <span className='font-semibold'>Categoria: </span> {product.category} </p>
    <p > <span className='font-semibold'>Preço: </span> {product.originalPrice} </p>
    {product.discountPrice>0  && <p > <span className='font-semibold'>Preço Promorcional: </span> {product.discountPrice} </p>}
    <p > <span className='font-semibold'>Stock: </span> {product.stock} </p>
    <p > <span className='font-semibold'>Raking de avaliação:</span> {product.ratings} </p>
    <p > <span className='font-semibold'>Descrição: </span> {product.description} </p>
    <p > <span className='font-semibold'>Vendedor: </span> {product.shop.name} </p>


   
   
   
    </div>
    
    </div>
    </div>
  )
}

export default ProductDetail