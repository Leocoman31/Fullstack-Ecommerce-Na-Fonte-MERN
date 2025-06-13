import React, { useState } from 'react'
import { VscSettings } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import ModelConfirmDeleteShop from '../UI/ModelConfirmDeleteShop';
import { useContextModal } from '../../context/contextModel';


function MyShop({shop}) {

    const{ handleModelShopDetails,
          openModelShopDetail, handleDeleteConfirm,
          deleteShow} = useContextModal();
      const[showSetting, setShowSetting] = useState(false); 


  function handleShopDetails(){
    setShowSetting(false)
    handleModelShopDetails()
    navigate(`shopDetail/${shop._id}`)
}


function handleDeleteShop(){
    setShowSetting(false)
    handleDeleteConfirm()
  

}



  function handleShopEdit(){
  }
    


  return (
    <div>
      
        {
              deleteShow &&  <ModelConfirmDeleteShop id ={shop._id}/>
        }

    
<div className='grid grid-cols-9 gap-x-1 text-gray-800 text-sm justify-center items-center hover:bg-gray-100 '>
      
        
    <div  id='id_user'  className='col-span-2'><p >  <span className='font-semibold'> ID: </span>{shop._id}</p>
      
      </div>
      <div id='name' className='col-span-2' ><p>  <span className='font-semibold'> Nome: </span>{shop.name}</p>
      
      </div>
      <div id='email' className='col-span-2' > <p>  <span className='font-semibold'> Email: </span>{shop.email}</p>
      
      </div>
      <div id='status'  className='col-span-2'><p>  <span className='font-semibold'> Estado: </span>{shop.status}</p>
      
      </div>

      <div className='relative'>
                <button onClick={()=> setShowSetting(!showSetting)}><IoSettingsOutline className='hover:text-sky-500' size={26}/></button>
            
                {showSetting && <div className='absolute z-10 top-6 bg-white'>
                    <ul className='text-sm'>
                        <li className='p-2 py-1 hover:bg-sky-500'>
                            <button onClick={handleShopDetails}>Sobre a loja</button>
                        </li>

                        <li className='p-2 py-1 hover:bg-sky-500'>
                            <button onClick={handleShopEdit}>Editar</button>
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

export default MyShop