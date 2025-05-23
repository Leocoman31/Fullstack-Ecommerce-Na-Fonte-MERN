import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function ProfileAdmin() {
  return (
    <div>
        <div className="flex gap-4 justify-center text-lg mt-16  ">
        <Link to="personalData">Dados Pessoais</Link>
        <Link to="password">Password</Link>
        <Link to="adress">Endereço</Link>


      </div>
      <Outlet/>
 
    </div>
  )
}

export default ProfileAdmin