import React from 'react'
import { VscSettings } from "react-icons/vsc";
import { MdOutlineDelete } from "react-icons/md";


function MyShop({shop}) {
  return (
    <div className=' mx-16 grid grid-row gap-2 bg-white '>
    <div className='grid grid-cols-4  justify-between items-center  '>
    <div  id='id_user' className='p-4'  > {shop._id}
      
      </div>
      <div id='name' className=' p-4'   > {shop.name}
      
      </div>
      <div id='email' className=' p-4'  > {shop.email}
      
      </div>

      <div className="flex gap-4 items-end">
        <VscSettings/>
        <MdOutlineDelete/>
       


      </div>
    

        </div>
    </div>
  )
}

export default MyShop