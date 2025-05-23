import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { IoMdStar } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { useGetProductsWithSameName } from '../../hooks/useGetProductWithSameName';
import Spinner from './Spinner';
import { Link, useNavigate } from 'react-router-dom';
import { MdDone } from "react-icons/md";
import { useContextModal } from '../../context/contextModel';


function ModalCart({data}) {
  const cart = localStorage.getItem("Cartitems");
  const dispatch = useDispatch();
      const [selectImage, setSelectImage] = useState(0);
      const [prodSize, setProdSize] =useState("");
       const{handleModelCart,
        openModelCart} = useContextModal();
    const navigate = useNavigate()
        


       
      







  const{name, category, description, discountPrice, originalPrice, images, quantityReviews, ratings, sold_out,stock,shop,
    flavor,size,color,weight,reviews,slug,_id
}=data



function handleGoCart(){
  handleModelCart();
  navigate("/cart")
}
  function HandleAddItemCard(){

    if(category==="Smartphone"){

         const  newItem={
              productId:productd,
                name,
                quantity:qtd,
                price:discountPrice,
                totalPrice:discountPrice*qtd,
                images,
                color,
                shop,
          
              }

              dispatch(addItemCard({newItem}))

      }

      
      if(category==="Roupas"){

  
          const newItem={
              productId:productd,
                name,
                quantity:qtd,
                price:discountPrice,
                totalPrice:discountPrice*qtd,
                images,
                color,
                prodSize,
                shop,
          
              }

         

              dispatch(addItem({newItem}))
              toast.success("Item adicionado no Carrinho");
        
          }


      





  }



    
  
    
  return (

    
   
      <div className="fixed top-0  left-0 w-[100%] h-[100vh]
     bg-black/5  transition-all duration-[0.5]   shadow-md">
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-100 px-[3.2rem] py-[4rem]
    transition-all duration-1000 ">

      <div className='space-y-2'>
        <div className='flex justify-center items-center'>
          <MdDone size={50}/>
          
        </div>

        <p className='text-xl text-center'>Item adicionado no carrinho</p>
        <div className='flex gap-4'>
        <button onClick={handleModelCart} className='bg-gray-950 hover:text-white px-4 py-1.5  text-gray-400'>Continuar a comprar</button>
        <button onClick={handleGoCart} className='bg-gray-950 px-4 hover:text-white  py-1.5 text-gray-400' >Ir para o carrinho</button>
        </div>

      </div>

    </div>

        
    </div>
  )
}

export default ModalCart