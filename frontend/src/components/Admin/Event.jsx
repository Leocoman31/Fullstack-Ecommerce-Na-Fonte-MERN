import React, { useState } from 'react'
import ModalEventDetail from '../UI/ModalEventDetail'
import { useContextModal } from '../../context/contextModel'
import { useNavigate } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";

function Event({event}) {
const{openModelEventDetail,
    handleModelEventDetails} = useContextModal();
    const[showSetting,setShowSetting] = useState(false);
    const navigate = useNavigate()
    const dateStart = new Date(event.start_Date);
    const dateEnd = new Date(event.finish_Date);


    function handleEventDetails (){
        setShowSetting(false);
        handleModelEventDetails();
        navigate(`eventDetail/${event._id}`)

    

    }
  return (
    <div>
    {openModelEventDetail && <ModalEventDetail/>}
     <div className='grid grid-cols-9 gap-x-1 text-gray-800 text-sm justify-center  hover:bg-gray-100 '>
                        <p className='col-span-2' ><span className='font-semibold'> ID: </span>{event._id}</p>
                        <p className='col-span-2'  > <span className='font-semibold'>Nome: </span> {event.name} </p>
                            <p > <span className='font-semibold'>Codigo Promorcial: </span>{event.discount}%</p>
                    <p >  <span className='font-semibold'>Promoção: </span> <span className='text-green-800'> {event.discount}%</span></p>
                    <p>  <span className='font-semibold'>Inicio: </span> <span className='text-green-800'> {dateStart.getDay() }/{dateStart.getMonth() }/{dateStart.getFullYear() }</span></p>
                    <p>  <span className='font-semibold'>Fim: </span> <span className='text-green-800'> {dateEnd.getDay() }/{dateEnd.getMonth() }/{dateEnd.getFullYear() }</span></p>
                         <div className='relative'>
                        <button onClick={()=> setShowSetting(!showSetting)}><IoSettingsOutline className='hover:text-sky-500' size={26}/></button>
                    
                        {showSetting && <div className='absolute z-10 top-6 bg-white'>
                            <ul className='text-sm'>
                                <li className='p-2 py-1 hover:bg-sky-500'>
                                    <button onClick={handleEventDetails}>Mais detalhes</button>
                                </li>
                    
                            
    
                    
                              
                            </ul>
                    
                        </div>
                    }
                        </div>
                       
                    
                        </div>
</div>
  )
}

export default Event