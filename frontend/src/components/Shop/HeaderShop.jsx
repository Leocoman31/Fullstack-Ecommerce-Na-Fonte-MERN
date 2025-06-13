import React from 'react'
import { PiUserCircleThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FaRegUser } from "react-icons/fa6";
import Spinner from '../UI/Spinner';
import { useIsAuthenticadUser } from '../../hooks/useIsAuthenticadUser';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { useContextModal } from '../../context/contextModel';
import { RiLogoutCircleLine } from "react-icons/ri";



function HeaderSeller() {

    const{isLoading, data}=useIsAuthenticadUser();
    const {openSideBarSeller,
      handleSideBarSeller} = useContextModal();

    if (isLoading){
      <Spinner/>
    }


  return (
    <div className="shadow-2xl w-full">
        <header className='h-26    py-4 items-center   mx-32' >
      <nav className='flex justify-between items-center '>

      <div id="logo" >
            <Link to="/" className=" text-black ">
              <p className="text-[32px] font-black"><span className="text-sky-500">Logo</span>tipo</p>
              <p className="text-12    font-semibold">O Seu Mercado Online</p>
            </Link>

          </div>

          <div className='flex gap-4 justify-center items-center'> 

          
          <div id="cart" className="flex flex-col relative  justify-center items-center">
                      <IoIosNotificationsOutline className=" text-3xl text-gray-500" />
                     { <span className=' text-[8px] font-semibold text-white absolute bottom-7 left-[28px] bg-[#0198f1] rounded-[50%] px-2 py-1'><span>{0}</span></span>
                      }
                      
                      <Link to="notifications" className="text-[10px] text-gray-800  m-0 p-0">Notificações</Link>
          
                    </div>

                    <div className='text-center flex flex-col justify-center items-center'>
                  <Link to="shops" >
                  <AiOutlineShopping className=" text-3xl text-gray-500"/>
                 
                  
                  </Link>
                  <p className="text-[10px] text-gray-800 ">Lojas</p>
                


                  </div>

                  

                  <div class="flex flex-col justify-center items-center">
                 
                  <Link to="orders"> <BsBoxSeam className=" text-3xl text-gray-500"/></Link>
                  <p className="text-[10px] text-gray-800">Encomendas</p>


                  </div>

                  <div className='flex flex-col justify-center items-center'>
                 
                  <Link to="shopInbox" > <IoChatbubbleEllipsesOutline className=" text-3xl text-gray-500"/></Link>
                  <p className="text-[10px] text-gray-800">Suporte</p>


                  </div>

                  <div class="flex flex-col justify-center items-center">
                  
                  <button to="messagens" onClick={handleSideBarSeller} ><IoMenuOutline className=" text-3xl text-gray-500"/></button>
                  <p className="text-[10px] text-gray-800">Menu</p>




                  </div>

                  <div className='flex flex-col justify-center items-center'>
                 
              

                 <button to="messagens" onClick={handleSideBarSeller} ><RiLogoutCircleLine className=" text-3xl text-gray-500"/></button>
                  <p className="text-[10px] text-gray-800">Sair</p>


                 </div>

                  

                  
                  


                
          


          </div>

         
        

            

      </nav>

    </header>

    </div>
  
  )
}

export default HeaderSeller