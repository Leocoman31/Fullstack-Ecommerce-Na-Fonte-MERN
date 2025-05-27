import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useContextModal } from '../../context/contextModel';
import { useNavigate } from 'react-router-dom';
import ModalProductDetail from '../UI/ModalProductDetail';

function Product({product}) {

    const[showSetting,setShowSetting] = useState(false);
    const{ openModelProductDetail,
        handleModelProductDetails} = useContextModal();
        const navigate = useNavigate()


    function handleProductDetails() {
        setShowSetting(false);
        navigate(`detailProduct/${product._id}`)
        handleModelProductDetails();

    }
  return (
    <div>
        {openModelProductDetail && <ModalProductDetail/>}
         <div className='grid grid-cols-10 gap-x-1 text-gray-800 text-sm justify-center  hover:bg-gray-100 '>
                            <p className='col-span-2 '><span className='font-semibold'> ID: </span>{product._id}</p>
                            <p className='col-span-2'> <span className='font-semibold'>Nome: </span> {product.name} </p>
                            <p className='col-span-2'> <span className='font-semibold'>Categoria: </span>{product.category}</p>
                        <p  className='col-span-2 '>  <span className='font-semibold'>Preço: </span> <span className='text-green-800'> {product.originalPrice }</span></p>
                        <p>  <span className='font-semibold'>Stock: </span> <span className='text-green-800'> {product.stock }</span></p>
                             <div className='relative'>
                            <button onClick={()=> setShowSetting(!showSetting)}><IoSettingsOutline className='hover:text-sky-500' size={26}/></button>
                        
                            {showSetting && <div className='absolute z-10 top-6 bg-white'>
                                <ul className='text-sm'>
                                    <li className='p-2 py-1 hover:bg-sky-500'>
                                        <button onClick={handleProductDetails}>Mais detalhes</button>
                                    </li>
                        
                                
        
                        
                                  
                                </ul>
                        
                            </div>
                        }
                            </div>
                           
                        
                            </div>
    </div>
  )
}

export default Product