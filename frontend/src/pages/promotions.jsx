import React from 'react'
import { useGetAllEvents } from '../hooks/useGetAllEvents';
import Spinner from '../components/UI/Spinner';
import CardEvent from '../components/UI/CardEvent';

function Promotions() {

    const{isLoading:isgetingEvents, data:eventsList} = useGetAllEvents();
    

    if(isgetingEvents){
        return <Spinner/>
    }


    console.log(eventsList)
  return (
    <div className=' m-16 space-y-8 '>
        <h1 className='text-[1.5rem]'>Atuais promoções </h1>
        {
            eventsList.events.map(event =><CardEvent key={event._id} event={event}/>)
        }
        

        </div>
 
  )
}

export default Promotions