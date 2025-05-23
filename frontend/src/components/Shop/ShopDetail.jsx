import React from 'react'
import { useParams } from 'react-router-dom'

function ShopDetail({shop}) {

   

  return (
    <div >  <p > <span className='font-semibold'>Nome: </span> {shop.name} </p>
    <p > <span className='font-semibold'>Email: </span>{shop.email}</p>
    <p > <span className='font-semibold'>Contacto: </span>{shop.phoneNumber}</p>
    <p > <span className='font-semibold'>Descrição: </span> {shop.description} </p>
    <p > <span className='font-semibold'>Endereço: </span>{shop.address}</p>
    <p>  <span className='font-semibold'>Estado: </span> {shop.status}</p>
    <p >  <span className='font-semibold'>Proprietário: </span> {shop.userId.name}</p>
    <p >  <span className='font-semibold'>Email do proprietário: </span> {shop.userId.email}</p>
    <p>  <span className='font-semibold'>Contacto do Proprietário</span> {shop.userId.phoneNumber}</p>
    </div>

  )
}

export default ShopDetail