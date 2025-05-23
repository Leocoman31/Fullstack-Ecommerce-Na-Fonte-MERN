import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarShop from './SideBarShop'
import HeaderShop from './HeaderShop'

function ShopLayoult() {
  return (
    <div>
      <HeaderShop/>
    <div className='grid grid-cols-6 min-h-screen '>
    
            <SideBarShop/>
            <main className='col-span-5 m-8'>
            <Outlet/>

            </main>
 
      
     

    </div>
   
    </div>
  )
}

export default ShopLayoult