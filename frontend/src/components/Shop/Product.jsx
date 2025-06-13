import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useContextModal } from '../../context/contextModel';
import { useNavigate } from 'react-router-dom';
import ModalProductDetail from '../UI/ModalProductDetail';
import ModelConfirmDeleteProduct from '../UI/ModelConfirmDeleteProduct';
import ModelEditProduct from '../UI/ModelEditProduct';

function Product({product}) {

    const[showSetting,setShowSetting] = useState(false);
    const{ openModelProductDetail,
        handleModelProductDetails, deleteShow,handleDeleteConfirm,
        handleEditProduct,
        openModalEditProduct,} = useContextModal();
        const navigate = useNavigate()
    
    


    function handleProductDetails() {
        setShowSetting(false);
        navigate(`detailProduct/${product._id}`)
        handleModelProductDetails();

    }


    function handleProductDelete (){
        handleDeleteConfirm()

    }


    function handleProductEdit () {
        navigate(`editProduct/${product._id}`)
        handleEditProduct()
    }


  return (
    <div>
        {openModelProductDetail && <ModalProductDetail/>}
        {deleteShow && <ModelConfirmDeleteProduct id={product._id}/>}
        {openModalEditProduct && <ModelEditProduct/>}
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
                                    <li className='p-2 py-1 hover:bg-sky-500'>
                                        <button onClick={handleProductDelete}>Eliminar</button>
                                    </li>
                                    <li className='p-2 py-1 hover:bg-sky-500'>
                                        <button onClick={handleProductEdit}>Editar</button>
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