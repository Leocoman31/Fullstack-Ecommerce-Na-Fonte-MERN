import React from 'react'
import { Link } from 'react-router-dom'
import CountDown from './CountDown'

function CardEvent({event}) {
  return (
    <div className='grid grid-cols-2 gap-8  justify-center items-center '>
    <img src={event.imageCover[0].url}  className='rounded-2xl'/>
    <div className='space-y-4 text-center bg-white py-16'>
        <h1 className='text-[4rem] font-bold'>{event.name}</h1>
        <p className='text-xl text-gray-800'>{event.description}</p>
        <CountDown data={event}/>
        <Link  className='bg-gray-950 px-4 py-2 text-gray-100'>Produtos em promoção</Link>
    </div>
    </div>
  )
}

export default CardEvent