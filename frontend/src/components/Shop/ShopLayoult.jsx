import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBarShop from './SideBarShop'
import HeaderShop from './HeaderShop'
import SideBarSeller from './SideBarShop'
import { useContextModal } from '../../context/contextModel'

function ShopLayoult() {
  const {openSideBarSeller} = useContextModal(0)
  return (
<div className='h-screen'>
      {openSideBarSeller && <SideBarSeller/>}
    <HeaderShop/>
    
  
     
    
         
            <main>
            <Outlet/>

            </main>
 
      
     

  
   
    </div>
  )
}

export default ShopLayoult