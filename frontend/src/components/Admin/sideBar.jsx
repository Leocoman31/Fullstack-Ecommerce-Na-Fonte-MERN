import React from 'react'
import { useContextModal } from '../../context/contextModel';
import { Link } from 'react-router-dom';
import { IoIosNotificationsOutline } from "react-icons/io";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { BsBoxSeam } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";
import { AiOutlineShopping } from "react-icons/ai";
import { RxDashboard } from "react-icons/rx";
import { BsCartCheck } from "react-icons/bs";
import { MdOutlineEventAvailable } from "react-icons/md";
import { MdOutlineAttachMoney } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { TbCircleXFilled } from "react-icons/tb";
import { PiMoneyDuotone } from "react-icons/pi";
import { logout } from '../../services/apifeatures';
import { useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';


function SideBar() {
    const {openSideBarAdmin,
        handleSideBarAdmin} = useContextModal();

    const queryClient = useQueryClient();


   async  function handleLogout (){

    const data = await logout();
    if(data.status === 'success'){
      toast.success("Logout com sucesso");
      queryClient.invalidateQueries({queryKey:["users"]})


    }
    window.location.href('/');
    }

  return (
   
        <div className="fixed  w-[100%] h-[100vh]
    backdrop-contrast-[90%] bg-black/50 z-[1000] transition-all duration-[0.5] ">
        <div className="fixed bg-gray-950 h-screen">

<button  onClick={handleSideBarAdmin}className='absolute top-1 right-2 px-2 py-1  hover:text-sky-700 text-gray-200'> <TbCircleXFilled size={30}/></button>

<ul className='space-y-2 mt-24 text-gray-400' >
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="dashbord">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                <RxDashboard  size={25}/>
                     <p className='hidden md:block'>Dashboard</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="shops">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                 <AiOutlineShopping size={25}/>
                    
                     <p className='hidden md:block'>Lojas</p>
                 </div></Link>
                 
             </li>

             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="users">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                 <AiOutlineShopping size={25}/>
                    
                     <p className='hidden md:block'>Usuários</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="orders">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                    <BsBoxSeam size={25}/>
                     <p className='hidden md:block'>Encomendas</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="products">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                <BsCartCheck size={25}/>
                     <p className='hidden md:block'>Productos</p>
                 </div></Link>
                 
             </li>
            
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="events">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                 <MdOutlineEventAvailable size={25}/>
                     <p className='hidden md:block'>Eventos</p>
                 </div></Link>
                 
             </li>
            
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="withdraw">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                <PiMoneyDuotone size={25}/>
                     <p className='hidden md:block'>Saque</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="shopInbox">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
               <IoChatbubbleEllipsesOutline size={25}/>
                     <p className='hidden md:block'>Suporte</p>
                 </div></Link>
                 
             </li>
           
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="refounds">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                   <MdOutlineAttachMoney  size={25}/>
                     <p className='hidden md:block'>Reembolsos</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500 hover:text-black">
                 <Link to="profile/personalData">
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                   <CgProfile size={25}/>
                     <p className='hidden md:block'>Perfil</p>
                 </div></Link>
                 
             </li>

             <li className="hover:bg-sky-500 hover:text-black">
                 <button  onClick={handleLogout}>
                 <div className='  flex gap-x-1 items-center px-4 py-2'>
                   <RiLogoutCircleLine size={25}/>
                     <p className='hidden md:block'>Sair</p>
                 </div></button>
                 
             </li>
         </ul>


    </div>
    </div>
  )
}

export default SideBar