import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";

function SideBarShop() {
  return (
    <div className='bg-white w-[150px]'>
        <ul className='space-y-2 mt-10'>
            <li>
                <Link to="dashbord">
                <div className='  text-gray-800  px-4'>
               
                    <p className='hidden md:block'>Dashboard</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="shops">
                <div className='  text-gray-800  px-4'>
                   
                    <p className='hidden md:block'>Lojas</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="orders">
                <div className='  text-gray-800  px-4'>
                   
                    <p className='hidden md:block'>Encomendas</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="products">
                <div className='  text-gray-800 px-4'>
              
                    <p className='hidden md:block'>Productos</p>
                </div></Link>
                
            </li>
        
            <li>
                <Link to="events">
                <div className='  text-gray-800  px-4'>
                
                    <p className='hidden md:block'>Eventos</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="createEvent">
                <div className='  text-gray-800  px-4 '>
                  
                    <p className='hidden md:block'>Criar Evento</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="withdraw">
                <div className='  text-gray-108000 px-4 '>
               
                    <p className='hidden md:block'>Saque</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="shopInbox">
                <div className='  text-gray-800 px-4 '>
            
                    <p className='hidden md:block'>Messangens</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="promocode">
                <div className='  text-gray-800  px-4 '>
           
                    <p className='hidden md:block'>Promo Codes</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="refounds">
                <div className='  text-gray-800 px-4 '>
                  
                    <p className='hidden md:block'>Reembolsos</p>
                </div></Link>
                
            </li>
            <li>
                <Link to="settings">
                <div className='  text-gray-800  px-4'>
                  
                    <p className='hidden md:block'>Configurações</p>
                </div></Link>
                
            </li>
        </ul>
    </div>
  )
}

export default SideBarShop