import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";


function Footer() {
  return (
    <footer className='bg-black   w-full p-8 space-y-4'>
        <div className='grid grid-cols-4 gap-x-24 '>
            <div className='space-y-2'>
            <h1 className='text-lg lg:text-3xl font-bold text-sky-500'>Mercado Online</h1>
            <p className='text-gray-500 text-sm'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
             At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            </div>

            <div  className='space-y-2'>
               <h1 className='text-md font-bold text-gray-400'>Links Rápidos</h1> 
               <ul className='text-sm text-gray-500'>
                <li className="   hover:text-white">
                            <Link to="/"   >  Inicio</Link>
                          </li>  
                          
                          <li className="  hover:text-white ">
                            <Link to="/loja"  >Compras</Link>
                          </li>
                
                          <li className=" hover:text-white  ">
                            <Link to="promoEvents" >Promoções</Link>
                          </li>
                
                          <li >
                            <div className='  hover:text-white '>
                            <button  onClick={() => handleModelShop(!showModelShop)} >Cadastrar Loja</button>
                            
                            </div>
                           
                          </li>
                          <li className=" hover:text-white   ">
                            <Link to="/" >Sobre Nós</Link>
                          </li>
                          <li className="  hover:text-white  " >
                            <Link to="/" >Contactos</Link>
                          </li>
                          
                          <li className="  hover:text-white  " >
                            <Link to="/"   >FAQ</Link>
                          </li>
                
                          <li className="  hover:text-white  " >
                            <Link to="/"   >Baixar Aplicativo</Link>
                          </li>
                         
               </ul>
            </div>
            <div  className='space-y-2'>
            <h1 className='text-md font-bold text-gray-400'>Categorias</h1>
            <ul className='text-sm text-gray-500'>
                <li><Link to="/">Alimentos</Link></li>
                <li> <Link to="services">Electrônicos</Link></li>
                <li><Link to="ticket">Suplementos</Link></li>
                <li><Link to="about">Ténis</Link></li>  
                <li><Link to="about">Computadores</Link></li> 
                <li><Link to="about">Smartphone</Link></li> 
                <li><Link to="about">Suplementos</Link></li> 


               </ul>
             
            </div>
            <div  className='space-y-2'>
                <h1 className='text-md font-bold text-gray-400'> Links de Apoio </h1>
                <ul className='text-sm text-gray-500'>
                <li><Link to="/">Politicas de Privacidade</Link></li>
                <li> <Link to="/">Termos e condições</Link></li>
                <li><Link to="/">Ajuda e Apoio ao Cliente</Link></li>
                <li><Link to="/">FaQs</Link></li>  
               </ul>
            </div>

        </div>

        <div className='flex gap-4'>
        <FaFacebook className="text-sky-50 hover:text-red-400" size={25}/>
        <AiFillInstagram className="text-sky-50 hover:text-red-400" size={25}/>
        <FaTelegram className="text-sky-50 hover:text-red-400" size={25}/>
        <AiFillTikTok className="text-sky-50 hover:text-red-400" size={25}/>
        </div>

        <div className='flex justify-between items-center '>
            <div>
                <p className='text-gray-500 text-[10px] md:text-sm'>
                © Copyright Mercado Online -Todos direitos reservados
                </p>
            </div>
            <div className='flex gap-4 '>

                pagamentos
             
             
            </div>

        </div>

    </footer>
  )
}

export default Footer