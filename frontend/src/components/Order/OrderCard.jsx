import React from 'react'

function OrderCard({order}) {

  return (
    <div className=' bg-gray-50/90 p-4 rounded-lg shadow-lg hover:shadow-2xl  hover:bg-white'>
        <div className='flex  flex-col gap-x-2 m-2 h-[50%] overflow-y-auto ' >
        {
            order.orderItems.map(item =><div key={item.productId} className='grid grid-cols-2 my-4 justify-center items-center gap-4'>

<div id='card-img'>
        <img src={item.images[0].url}/>

    </div>
    <div id='description'>
        <p className='text-gray-800 text-sm'>
            {item.name} 
        </p>

        <p className='text-gray-800 text-sm'>{item.quantity} unidades </p>
        <p className=' text-sky-600 text-sm'>{item.price} Kwanzas </p>

      

    </div>


            </div>)

        }

     
   
    </div>
    
    {
            (order.orderStatus !== "Entregue" &&   order.orderStatus !== "Processando")  && <p className='text-sm text-gray-500'>rastrear encomenda</p>

        }
    <p className='text-sm'>Encomenda feita no dia : {order.orderCreateAt}</p>
    
    <p className='text-sm font-semibold'>Total : {order.totalAmount} Kwanzas</p>
    <p  className='text-green-700 text-sm'>
         {
order.orderStatus}
        </p>
        {
            (order.orderStatus ==="Processando" ||   order.orderStatus ==="Confirmado"  ) && <button className='  hover:bg-sky-600 bg-gray-950 px-4 py-1.5 text-sm text-gray-100'>Cancelar</button>
        }

{
            (order.orderStatus ==="Entregue"  ) && <div><button className='bg-gray-950 px-4 py-1.5 text-sm text-gray-100'>Comprar</button> </div>
        }
    </div>
    
  )
}

export default OrderCard