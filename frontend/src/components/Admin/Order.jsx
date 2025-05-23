import React, { useState } from 'react'
import { useGetUser } from '../../hooks/useGetUser'
import Spinner from '../UI/Spinner';
import { IoSettingsOutline } from "react-icons/io5";
import { useUpdateOrderStatusOrder } from '../../hooks/useUpdateOrderStatusAdmin';
import { useSendNotificatin } from '../../hooks/useSendNotificatin';
import { useContextModal } from '../../context/contextModel';
import OrderDetailModel from '../UI/OrderDetailModel';

function Order({orders}) {
const[showSetting, setShowSetting] = useState(false);
const {handleModelOrderDetails,
    openModelOrderDetail} = useContextModal();

const{_id:idOrder,
user:id} = orders
const{isLoading:isUpdating, data:updadeStatus} = useUpdateOrderStatusOrder()
const{data, isLoading} = useGetUser({id});
const {data:sendNotification, isLoading:isSendingNotification} =useSendNotificatin();
const message =`A sua encomenda foi confirmada ${idOrder}, rastreie até chegar a tua porta`;

 function  handleUpdateStatusOrder(){
     updadeStatus({idOrder})
     handleSendNoticatin();

}


function handleSendNoticatin(){
    sendNotification({message,id})

}

if(isLoading){
    return <Spinner/>
}


  return (
    <>
    {
        openModelOrderDetail && <OrderDetailModel order={orders}/>

    }
    <div className='grid grid-cols-8 gap-x-1 text-gray-800 text-sm justify-center items-center hover:bg-gray-100 '>
    <p className='col-span-2 '><span className='font-semibold'> ID da encomenda: </span>{orders._id}</p>

    <p> <span className='font-semibold'>Total pago: </span> {orders.totalAmount} kwanzas</p>
    <p className='col-span-2'>Comprador: {data.user.name}</p>
    <p> <span className='font-semibold'>Estado: </span>{orders.orderStatus}</p>
    <p>  <span className='font-semibold'>Feita: </span> {orders.orderCreateAt}</p>
    <div className='relative'>
    <button onClick={()=> setShowSetting(!showSetting)}><IoSettingsOutline className='hover:text-sky-500' size={26}/></button>

    {showSetting && <div className='absolute z-10 top-6 bg-white'>
        <ul className='text-sm'>
            <li className='p-2 py-1 hover:bg-sky-500'>
                <button onClick={handleModelOrderDetails}>Sobre a encomenda</button>
            </li>

            <li className='p-2 py-1 hover:bg-sky-500'>
                <button onClick={handleUpdateStatusOrder}>Mudar estado</button>
            </li>

          
        </ul>

    </div>
}
    </div>
   

    </div>
    </>
  )
}

export default Order