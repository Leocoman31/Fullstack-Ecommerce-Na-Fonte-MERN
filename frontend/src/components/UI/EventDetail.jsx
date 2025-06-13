import React from 'react'

function EventDetail({event}) {
    const dateStart = new Date(event.start_Date);
    const dateEnd = new Date(event.finish_Date);

  return (
    <div className='grid grid-cols-2 justify-center items-center gap-x-8 '>
        <div id='description'> 
        <p > <span className='font-semibold'>Id: </span> {event._id} </p>
    <p > <span className='font-semibold'>Nome: </span> {event.name} </p>
    { <p> <span className='font-semibold'>desconto Promorcional: </span> {event.discount}% </p>}
    <p > <span className='font-semibold'>Inicio da promorção: </span> {dateStart.getDay() }/{dateStart.getMonth() }/{dateStart.getFullYear() } </p>
    <p > <span className='font-semibold'>Fim da promorção:</span> {dateEnd.getDay() }/{dateEnd.getMonth() }/{dateEnd.getFullYear() } </p>
    <p > <span className='font-semibold'>Codigo Promorcional:</span> {event.name} </p>
    <p  className=' text-justify '> <span className='font-semibold'>Descrição: </span> {event.description} </p>
    <p > <span className='font-semibold'>Loja: </span> {event.shop.name} </p>
        </div>
        <div id='img'>
            <img src={event.imageCover[0].url } className='rounded-xl' /></div>
    </div>

  )
}

export default EventDetail