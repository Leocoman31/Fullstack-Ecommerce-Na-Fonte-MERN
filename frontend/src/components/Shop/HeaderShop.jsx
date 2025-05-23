import React from 'react'
import { Link } from 'react-router-dom'
import { RxDashboard } from "react-icons/rx";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CiGift } from "react-icons/ci";
import { BsBox2 } from "react-icons/bs";
import { MdOutlineEventNote } from "react-icons/md";
import { PiUserCircleThin } from "react-icons/pi";

function HeaderShop() {
  return (
    <header className='h-26 p-6 bg-white' >
      <nav className='flex justify-between '>

      <div id="logo" >
            <Link to="/" className=" text-gray-950 ">
              <p className="text-[32px] font-black">Logotipo</p>
              <p className="tex-12  font-semibold">O Seu Mercado Online</p>
            </Link>

          </div>

          <PiUserCircleThin size={50}/>

            

      </nav>

    </header>
  )
}

export default HeaderShop