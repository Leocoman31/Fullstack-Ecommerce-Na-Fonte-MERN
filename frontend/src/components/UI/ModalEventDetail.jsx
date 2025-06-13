import React from 'react'
import EventDetail from './EventDetail'
import { useParams } from 'react-router-dom'
import { useGetEvent } from '../../hooks/useGetEvent';
import Spinner from './Spinner';
import { useGetEventAdmin } from '../../hooks/useGetEventAdmin';
import { FaRegCircleXmark } from "react-icons/fa6";
import { useContextModal } from '../../context/contextModel';

function ModalEventDetail() {
    const {id} = useParams();

    const{openModelEventDetail,
        handleModelEventDetails} = useContextModal();
   
    const {isLoading, data} = useGetEventAdmin({id})

    if(isLoading){
        return <Spinner/>
    }

    function handleCloseModel(){
        handleModelEventDetails()
        navigate(-1);

    }




  return (
    <div className="fixed top-0 left-0 w-[100%] h-[100vh]
    backdrop-contrast-[90%]  z-[1000] transition-all duration-[0.5]   shadow-md">

    <div className="relative w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg px-[3.2rem] py-[4rem]
    transition-all duration-1000  h-[80%] overflow-auto" >

         <div className='absolute top-2 right-2'> <button onClick={handleCloseModel}><FaRegCircleXmark size={25} className='text-sky-gray-950 hover:text-sky-500'/></button></div>
        {
            <EventDetail event={data.event}/>
        }
    </div>
    </div>
  )
}

export default ModalEventDetail