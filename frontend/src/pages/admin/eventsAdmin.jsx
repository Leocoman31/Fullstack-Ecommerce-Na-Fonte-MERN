import React from 'react'
import { useCreateEvent } from '../../hooks/useCreateEvent'
import { useGetMyEvents } from '../../hooks/useGetMyEvents'
import ListEvents from '../../components/Shop/ListEvents'
import Spinner from '../../components/UI/Spinner'
import EventList from '../../components/Admin/EventList'
import { useGetAllEvents } from '../../hooks/useGetAllEvents'

function EventsAdmin() {

  const {isLoading,data:events,error}=useGetAllEvents()

if(isLoading){
  return <Spinner/>
}
  
 

  return (
    <div className='m-16'>
    {events.resultats===0 ? (<div>
      <h1>Não existe nenhum evento promorcional a decorrer no momento</h1>
    
      
      </div>)
       :(
       <div>
      <h1>{events.resultats} encontrados</h1>
    

      <EventList  eventListt ={events}/>
    </div>
       )
    }
    </div>
  )
}

export default  EventsAdmin
