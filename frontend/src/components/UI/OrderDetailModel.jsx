import React from 'react'
import { useContextModal } from '../../context/contextModel'
import OrderDetail from '../Order/OrderDetail';

function OrderDetailModel({order}) {
    const {handleModelOrderDetails,
    openModelOrderDetail} = useContextModal();
  return (
    <div className="fixed  w-[100%] h-[100vh]
    backdrop-contrast-[90%] bg-black/50 z-[1000] transition-all duration-[0.5] ">
        <div className="fixed bg-white ">
       <div className='absolute top-4 '>
       <button onClick={handleModelOrderDetails}> x </button>
       </div>

            <OrderDetail order ={order}/>



        </div>
        </div>
  )
}

export default OrderDetailModel