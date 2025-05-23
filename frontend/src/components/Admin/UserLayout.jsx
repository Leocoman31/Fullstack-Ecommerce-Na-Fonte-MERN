import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'

import HeaderAdmin from './HeaderAdmin'
import SideBar from './sideBar'
import { useContextModal } from '../../context/contextModel'

function AdminLayout() {
  const {openSideBarAdmin} = useContextModal();
  return (
    <div className='h-screen'>
       {openSideBarAdmin && <SideBar/>}
    <HeaderAdmin/>
   

    <div>
    <main>
      <Outlet/>
    </main>
    </div>
    
    </div>
  )
}

export default AdminLayout