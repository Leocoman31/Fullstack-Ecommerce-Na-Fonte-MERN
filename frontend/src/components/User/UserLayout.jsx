import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import SideBarUser from './SideBarUser'
import HeaderUser from './HeaderUser'
import MenuUser from './MenuUser'

function UserLayout() {
  return (
    <div>
    <HeaderUser/>
    {
}
    <main>
      <Outlet/>
    </main>
    </div>
  )
}

export default UserLayout