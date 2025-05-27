import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { useContextModal } from '../../context/contextModel';
import ModalShpRegister from '../UI/ModalShpRegister';
import { useGetAllProducts } from '../../hooks/useGetAllProducts';
import Spinner from './Spinner';

function Menu() {

    const[categoryOpen, setCategoryOpen]= useState(false);
    const {showModelShop,handleModelShop} =useContextModal();

    const{isLoading, data:products, error} = useGetAllProducts({CurrentPage:0});
    const navigate = useNavigate();






    if(isLoading){
        return<Spinner/>
    }

  function handleProductDetail(id){
    setCategoryOpen(false);
    navigate(`detailsProduct/${id}`)
  }


  function handleProductCategory(category){
    setCategoryOpen(false);
    navigate(`productCategory/${category}`)
  }
   

    function handleButton(){
       setCategoryOpen(()=>!categoryOpen)

   }
  return (
    <div className=" relative    w-full  bg-gray-950   hidden md:block h-16">
            {showModelShop && <ModalShpRegister/>}
    <nav className="flex items-center   px-2"  >
    <div className="mr-10">
        <div className='px-4 py-2  mt-2 border-r '>
        <button className=" text-lg font-semibold text-gray-300 hover:text-white space-x-2 " onClick={handleButton}> <IoIosMenu size={28} className='inline'/> Todas Categorias <span>{categoryOpen ? (<i class="fa-solid fa-angle-down"></i>) :( <i class="fa-solid fa-chevron-up"></i>)}</span></button>

        </div>

     
      { categoryOpen && (<div className='absolute mt-1 z-[10] border bg-white  mx-auto p-4 w-[99%]'>
        <ul className='grid grid-cols-8 '>
            <div>
            <li>
            <Link to="#" className='text-gray-800  text-lg'>Electrônicos</Link>
            <ul className='text-gray-500 space-y-2 mt-4'>
                {
                    products.data.map(product => product.category ==="Electrônicos" && <li className='hover:text-sky-500'><Link>{product.name}</Link></li>)
                }
            

            </ul>
            </li>

            </div>

            <div>
            <li>
              <Link  className='text-gray-800  text-lg' to="#" >Saúde</Link>
              <ul className='text-gray-700 space-y-4 mt-4'>
              {
                    products.data.map(product => product.category ==="Saúde" && <li><Link>{product.name}</Link></li>)
                }
            

            </ul>
            </li>
            </div>
            
           <div>
           <li>

            <Link to="#" className='text-gray-800  text-lg'>Alimentos</Link>
            <ul className='text-gray-700 space-y-4 mt-4'>
            {
                    products.data.map(product => product.category ==="Alimentos" && <li><Link>{product.name}</Link></li>)
                }

            </ul>


            </li>

           </div>

        
            
            <div>
            <li>
            <Link to="#" className='text-gray-800  text-lg'>Fitness</Link>
            <ul className='text-gray-700 space-y-4 mt-4'>
            {
                    products.data.map(product => product.category ==="Fitness" && <li><Link>{product.name}</Link></li>)
                }

            </ul>
            </li>

            </div>
            <div>
            <li>
            <Link to="#" className='text-gray-800  text-lg'>Roupas</Link>
            <ul className='text-gray-700 space-y-4 mt-4'>
            {
                    products.data.map(product => product.category ==="Roupas" && <li  className='hover:text-sky-500'><button onClick={() => handleProductDetail(product._id)}>{product.name}</button></li>)
                }
                <button onClick={()=>handleProductCategory("Roupas")} className='text-sky-500 font-semibold'> Ver todos</button>
            </ul>
            </li>
            

            </div>


            <div>
            <li>
            <Link to="#" className='text-gray-800  text-lg'>Acessórios</Link>
            <ul className='text-gray-700 space-y-4 mt-4'>
            {
                    products.data.map(product => product.category ==="Acessórios" && <li  className='hover:text-sky-500'><Link>{product.name}</Link></li>)
                }
            </ul>
            </li>

            
            </div>
            <div>
            <li>
            <Link to="#" className='text-gray-800  text-lg'>Smartphone</Link>
            <ul className='text-gray-700 space-y-4 mt-4'>
            {
                    products.data.map(product => product.category ==="Smartphone" && <li  className='hover:text-sky-500'><Link>{product.name}</Link></li>)
                }
            </ul>
            </li>

            

            </div>
            <div>
            <li>
            <Link to="#" className='text-gray-800  text-lg'>Computadores</Link>
            <ul className='text-gray-700 space-y-4 mt-4'>
            {
                    products.data.map(product => product.category ==="Computadores" && <li  className='hover:text-sky-500'><Link>{product.name}</Link></li>)
                }
            </ul>
            </li>
           

            </div>
           

        </ul>
        

      </div>)
}
    
      </div>

 

      <div className="flex justify-between ml-8 ">

        <ul className="flex items-center gap-[2vw] text-gray-300 p-0 m-0 ">

        <li className="   hover:text-white p-2">
            <Link to="/"   className="text-[18px]">  Inicio</Link>
          </li>  
          
          <li className="  hover:text-white p-2">
            <Link to="/loja"   className="text-[18px]">Compras</Link>
          </li>

          <li className=" hover:text-white  p-2 ">
            <Link to="promoEvents"  className="text-[18px]">Promoções</Link>
          </li>

          <li className="   p-2 " >
            <div className='  hover:text-white '>
            <button  className="text-[18px] " onClick={() => handleModelShop(!showModelShop)} >Cadastrar Loja</button>
            
            </div>
           
          </li>
          <li className=" hover:text-white  p-2 ">
            <Link to="/"  className="text-[18px]">Sobre Nós</Link>
          </li>
          <li className="  hover:text-white p-2 " >
            <Link to="/" className="text-[18px]" >Contactos</Link>
          </li>
          
          <li className="  hover:text-white p-2 " >
            <Link to="/"  className="text-[18px]" >FAQ</Link>
          </li>

          <li className="  hover:text-white p-2 " >
            <Link to="/"  className="text-[18px]" >Baixar Aplicativo</Link>
          </li>
         

        </ul>

       

      </div>


  </nav>
  </div>
  )
}

export default Menu