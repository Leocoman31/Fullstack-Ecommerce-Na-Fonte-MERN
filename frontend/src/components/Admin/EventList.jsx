import React from 'react'
import Event from './event'

function EventList({eventListt}) {

   
  return (
    <div>
        {
            eventListt.events.map(event => <Event event ={event} key={event._id}/>)
        }
    </div>
  )
}

export default EventList