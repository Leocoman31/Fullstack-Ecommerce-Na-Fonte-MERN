import React from 'react'
import { Link } from 'react-router-dom'

function SideBarUser() {
  return (
    <div>
      <ul className='space-y-2 my-6'>
        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="profile">Perfil</Link>
        </li>
        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="orders">Encomendas</Link>
        </li>
        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="adress">Endereço</Link>
        </li>

        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="wishlist">Favoritos</Link>
        </li>
        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="refunds">Reembolsos</Link>
        </li>
        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="inbox">Chat</Link>
        </li>

        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="track_order">Rastrear encomenda</Link>
        </li>
        <li className='bg-sky-900 px-4 text-center w-[80%]  rounded-lg  hover:text-gray-950 py-2 hover:bg-sky-500'>
          <Link to="paymentMethods">Metodo de pagamento</Link>
        </li>
       

      </ul>
    </div>
  )
}

export default SideBarUser