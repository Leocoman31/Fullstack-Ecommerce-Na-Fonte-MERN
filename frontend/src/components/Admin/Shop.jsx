import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useDeleteShop } from '../../hooks/useDeleteShop';
import { useUpdateShopStatus } from '../../hooks/useUpdateShopStatusAdmin';
import { useContextModal } from '../../context/contextModel';
import ModelShopDetail from '../UI/ModelShopDetail';
import {useNavigate } from 'react-router-dom';
import { MdVerified } from "react-icons/md";
import ModelConfirmDeleteShop from '../UI/ModelConfirmDeleteShop';
import { useSendNotificatin } from '../../hooks/useSendNotificatin';

function Shop({shop}) {
    const[showSetting, setShowSetting] = useState(false); 
    const{data:updateStatusShop,isLoading:isUpdating}= useUpdateShopStatus()
    const{data:sendNotification, isLoading:issending} =useSendNotificatin()
    const{ handleModelShopDetails,
        openModelShopDetail, handleDeleteConfirm,
        deleteShow} = useContextModal()
    const navigate = useNavigate();
    const message=`Caro vendendor a sua loja:${shop.name} foi verificada com sucesso`
    const type ="Verificação de loja"


    function handleUpdateStatusShop (){
        setShowSetting(false)
        updateStatusShop(shop._id)
        sendNotification({message, type, id:shop.userId})

    }



    function handleShopDetails(){
        setShowSetting(false)
        handleModelShopDetails()
        navigate(`shopDetail/${shop._id}`)
    }


    function handleDeleteShop(){
        setShowSetting(false)
        handleDeleteConfirm()
      

    }



  return (
    <div>

        {
            
            openModelShopDetail &&  <ModelShopDetail shop ={shop}/>
          
            

        }
        {
              deleteShow &&  <ModelConfirmDeleteShop id ={shop._id}/>
        }

        
         <div className='grid grid-cols-11 gap-x-1 text-gray-800 text-sm justify-center items-center hover:bg-gray-100 '>
            <p className='col-span-2 '><span className='font-semibold'> ID: </span>{shop._id}</p>
        
         
            <p className='col-span-2'> <span className='font-semibold'>Nome: </span> {shop.name} </p>
            <p className='col-span-2'> <span className='font-semibold'>Email: </span>{shop.email}</p>
            <p className='col-span-2'>  <span className='font-semibold'>Proprietário: </span> {shop.name}</p>
            <p  className='col-span-2 '>  <span className='font-semibold'>Estado: </span> <span className='text-green-800'> {shop.status }</span></p>
             <div className='relative'>
            <button onClick={()=> setShowSetting(!showSetting)}><IoSettingsOutline className='hover:text-sky-500' size={26}/></button>
        
            {showSetting && <div className='absolute z-10 top-6 bg-white'>
                <ul className='text-sm'>
                    <li className='p-2 py-1 hover:bg-sky-500'>
                        <button onClick={handleShopDetails}>Sobre a loja</button>
                    </li>
        
                    <li className='p-2 py-1 hover:bg-sky-500'>
                        <button onClick={handleUpdateStatusShop}>Mudar estado</button>
                    </li>

                    <li className='p-2 py-1 hover:bg-sky-500'>
                        <button onClick={handleDeleteShop}>Eliminar Loja</button>
                    </li>
        
                  
                </ul>
        
            </div>
        }
            </div>
           
        
            </div>
    </div>
  )
}

export default Shop