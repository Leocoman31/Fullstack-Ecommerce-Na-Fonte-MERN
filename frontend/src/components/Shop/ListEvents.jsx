import React from 'react'
import Event from './Event'

function ListEvents({data}) {
  return (
    <div>
        {data.events.map(event => <Event event={event} key={event._id}/>)}
    </div>
  )
}

export default ListEvents