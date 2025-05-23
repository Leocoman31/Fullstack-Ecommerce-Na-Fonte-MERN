import React from 'react'
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";

import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { decreaseItemQuantity, deleteItem, increaseItemQuantity } from '../../slice/sliceCart';





function CartItens({item}) {
    const dispatch=useDispatch();
   


    function handleDeleteItem (item){
        dispatch(deleteItem(item));
        
    
    }

    function handleIncreaseQtd(item){
        dispatch(increaseItemQuantity(item))
    }

    function handleDecreaseQtd(item){
        dispatch(decreaseItemQuantity(item))
    }

  return (
    <div className='grid grid-cols-4 justify-between   items-center mx-16 my-4 '>
        <div className='flex gap-4 '>

            <div >
                <img src={item.images[0].url} className='rounded-lg' width="60px" height="110px"/>
            </div>

            <div>
                <p className='text-gray-900  '>{item.name}</p>
               

         
            </div>

           


        </div>


        <div className='flex gap-2 justify-center items-center text-[13px]
         '>
   
            <div className='bg-gray-500/15 rounded-md hover:bg-sky-500/50'><button onClick={()=>handleIncreaseQtd(item)} className=' px-2 py-1   '>+</button></div>
            <div><p  >{item.quantity}</p></div>
            <div  className='bg-gray-500/15 rounded-md hover:bg-sky-500/50'><button onClick={()=>handleDecreaseQtd(item)} className='  px-3 py-1 '>-</button></div>
                
            </div>

        <div className='flex justify-end' >
            <p className= 'text-gray-950'>{item.price} Kz</p>
        </div>

        <div className='flex justify-end' >
                <button onClick={()=>handleDeleteItem(item)}><AiOutlineDelete size={20}  color='gray' className='hover:text-sky-500'/></button>
            </div>

    </div> 
  )
}

export default CartItens