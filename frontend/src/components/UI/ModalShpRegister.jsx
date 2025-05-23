import React from 'react'
import FormShopRegister from '../Shop/FormShopRegister'
import { useContextModal } from '../../context/contextModel';
import { FaCircleXmark } from "react-icons/fa6";

function ModalShpRegister() {
    const {showModelShop,handleModelShop}=useContextModal();
  return (
    <div className="fixed top-0  left-0 w-[100%] h-[100vh]
    backdrop-contrast-[90%] bg-black/50 z-[1000] transition-all duration-[0.5]   shadow-md">
        <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white px-[3.2rem] py-[4rem]
    transition-all duration-1000 ">

        

        <FormShopRegister/>
            
        </div>
         <button className='absolute top-10 right-10 text-3xl  p-2 text-sky-100 hover:text-yellow-100' onClick={()=>handleModelShop(!showModelShop)}><FaCircleXmark/></button>
    </div>
  )
}

export default ModalShpRegister