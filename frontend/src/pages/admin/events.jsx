import React from 'react'
import { useCreateEvent } from '../../hooks/useCreateEvent'
import { useGetMyEvents } from '../../hooks/useGetMyEvents'
import ListEvents from '../../components/Shop/ListEvents'
import Spinner from '../../components/UI/Spinner'

function Events() {

  const {isLoading,data:events,error}=useGetMyEvents()

if(isLoading){
  return <Spinner/>
}
  


  return (
    <>
    {events.resultats===0 ? (<div>
      <h1>Não existe nenhum evento promorcional a decorrer no momento</h1>
      <button>Adicionar Eventos</button>
      
      </div>)
       :(
       <div>
      <h1>Todos atuais eventos promorcionais</h1>
    

      <ListEvents  data ={events}/>
    </div>
       )
    }
    </>
  )
}

export default Events