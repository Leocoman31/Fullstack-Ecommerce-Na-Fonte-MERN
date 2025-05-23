import React from 'react'
import { Link } from 'react-router-dom'

function MenuUser() {
  return (
    <div >
        <nav className='bg-gray-950 px-16 py-2 h-16 '>
        <ul className='space-y-2 flex  text-[18px] gap-4 text-gray-300'>
        <li className=' hover:text-white py-2 '>
          <Link to="profile/personalData">Perfil</Link>
        </li>
        <li className=' hover:text-white py-2'>
          <Link to="orders">Encomendas</Link>
        </li>
       

        <li className=' hover:text-white py-2'>
          <Link to="/user/wishlist">Favoritos</Link>
        </li>
        <li className=' hover:text-white py-2'>
          <Link to="/userrefunds">Reembolsos</Link>
        </li>
       

       
        <li className='  hover:text-white py-2 '>
          <Link to="/user/paymentMethods">Metodo de pagamento</Link>
        </li>

        <li className='  hover:text-white py-2 '>
          <Link to="/userinbox">Suporte</Link>
        </li>
        <li className='  hover:text-white py-2 '>
          <button>Sair</button>
        </li>
       

      </ul>
        </nav>
    </div>
  )
}

export default MenuUser