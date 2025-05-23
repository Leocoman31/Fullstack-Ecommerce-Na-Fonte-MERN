import React from 'react'
import { BsBox2 } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiSupport } from "react-icons/bi";

function CardUs() {
  return (
    <div className='space-y-4 bg-gray-200 py-8'>
        

        <div className='grid grid-cols-2 justify-between'>
            
            <h1 className='text-center text-2xl'>Junte-se à nossa newsletter e ganhe descontos</h1>
            <div className=' flex justify-center items-center '>
            <input type='email'  placeholder="digite o seu email" className=' bg-white  w-[50%]  px-4 py-4 '/>
            <button className='bg-gray-950 px-4 py-4 text-gray-100    '>Assinar</button>
                </div>
        </div>
    </div>
  )
}

export default CardUs