import { MdOutlineMenu } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";

import { FiShoppingCart } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { useContextModal } from '../../context/contextModel';
import ModalAuth from "./ModalAuth";
import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../../slice/sliceCart";
import { useIsAuthenticadUser } from "../../hooks/useIsAuthenticadUser";
import Spinner from "./Spinner";
import { useState } from "react";
import { logout } from "../../services/apifeatures";
import toast from "react-hot-toast";
import { IoIosNotificationsOutline } from "react-icons/io";
import { useQueryClient } from "@tanstack/react-query";
import { useGetAllNotificationsUser } from "../../hooks/useGetAllNotificationsUser";

function Header() {
  const {openAuth,handleAuthModel} = useContextModal();
  const quantityItemCart = useSelector(getTotalCartQuantity);
  const{isLoading, data}=useIsAuthenticadUser();
  const[openSettingSeller, setOpenSettingSeller] = useState(false);
  const[settingUser, setSettingUser] = useState(false);
  const[openSettingAdmin, setOpenSettingAdmin] = useState(false);
  const[openSettingDeliver, setOpenSettingDeliver] = useState(false);
  const{isLoading:isgetingNotifications, data:notificationsUser} =useGetAllNotificationsUser()
  const [keywords, setKeywords] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient()






  

  



  async function handleLogout (){

   
    const data = await logout();
    if(data.status === 'success'){
      toast.success("Logout com sucesso");
      queryClient.invalidateQueries({queryKey:["users"]})


    }
    window.location.reload();


  }

  function handleSearch (e){
    e.preventDefault();
    const keyword =keywords;
    setKeywords("");

    navigate(`/search/${keyword}`)
   
    
    

    

  }

 if(isgetingNotifications){
  return <Spinner/>
 }






 



  return (
    <div className=" w-full">
      <header className='h-26 shadow-lg'>
        <nav className="flex  py-4 items-center justify-center  mx-4  gap-8">
          <div id="logo" >
            <Link to="/" className=" text-black ">
              <p className="text-[32px] font-black"><span className="text-sky-500">Logo</span>tipo</p>
              <p className="text-12    font-semibold">O Seu Mercado Online</p>
            </Link>

          </div>

          

          <div className="flex  w-[40%] ">
            <div className="relative w-full">
              
            <input type="text"  onChange={(e) => setKeywords(e.target.value)} className=" rounded-lg bg-gray-200 block w-full px-4 py-3 " placeholder="Olá, o que você procura?"/>
            
           
            <button  onClick={handleSearch} className=" text-black absolute end-2.5 bottom-2.5" ><IoSearchOutline size={26}/></button>

       
           
            </div>

            
          </div>

          
          

          <div id="fav" className="flex  gap-2   justify-center items-center">
            <LuPhone className=" text-3xl text-gray-500" />
          
            <div className="fex fex-col">
            <p className="text-[12px]">999 999 999 00</p>
            <p className="text-[12px]">Contacta-nos</p>

            </div>
           
           

          </div>

          {
            data !== undefined  ? (<div>
 

          { data.user.role === "user" && <div className="flex gap-8">
            <div id="fav" className="flex flex-col relative   justify-center items-center">
            <FaRegHeart className=" text-3xl text-gray-500" />
            { <span className=' text-[8px] font-semibold text-white absolute bottom-9 left-6 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>0</span></span>
            }
            <p className="text-[10px]">Favoritos</p>
           

          </div>

          <div id="cart" className="flex flex-col relative  justify-center items-center">
            <FiShoppingCart className=" text-3xl text-gray-500" />
           { <span className=' text-[8px] font-semibold text-white absolute bottom-9 left-6 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>{quantityItemCart}</span></span>
            }
            
            <Link to="cart" className="text-[10px] m-0 p-0">Carrinho</Link>

          </div>

          <div id="user-profile">
          {data.user.photo.url!=="" &&  <button onClick={()=>setSettingUser(!settingUser)}><img src={data.user.photo.url}  className="rounded-full w-[50px] h-[50px] border-2 border-sky-500 object-cover"/>
          </button>  }
          {data.user.photo.url==="" &&  <button onClick={()=>setSettingUser(!settingUser)}><FaRegUser className=" text-3xl text-gray-500" /></button> }
         


          </div>
          </div>}


          { data.user.role === "Admin" && <div className="flex gap-8">
           

         

          <div id="user-profile">
          {data.user.photo.url!=="" &&  <button onClick={()=>setOpenSettingAdmin(!openSettingAdmin)}><img src={data.user.photo.url}  className="rounded-full w-[50px] h-[50px] border-2 border-sky-500 object-cover"/>
          </button>  }
          {data.user.photo.url==="" &&  <button onClick={()=>setOpenSettingAdmin(!openSettingAdmin)}><FaRegUser className=" text-3xl text-gray-500" /></button> }
         


          </div>
          </div>}

           {  data.user.role === "Seller" && <div>
            <div id="user-profile">
          <div  onClick={()=>setOpenSettingSeller(!openSettingSeller)}><button  ><img src={data.user.photo} height={60} width={60} className="rounded-full"/></button>
          </div>

         

          </div>
          </div>
}

            </div>)
            :
            (<div className="flex gap-8">
               <div id="fav" className="flex flex-col relative   justify-center items-center">
            <FaRegHeart className=" text-3xl text-gray-500" />
            { <span className=' text-[8px] font-semibold text-white absolute bottom-9 left-6 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>0</span></span>
            }
            <p className="text-[10px]">Favoritos</p>
           

          </div>

          <div id="login/register" className="flex flex-col  justify-center items-center">
            
          
                <div><FaRegUser className=" text-3xl text-gray-500" />
              <button className="text-[10px] hover:text-sky-600" onClick={() =>handleAuthModel(!openAuth)} >Login</button></div>

              
              
            {
              openAuth && <ModalAuth/>
            }


          </div>


          <div id="cart" className="flex flex-col relative  justify-center items-center">
            <FiShoppingCart className=" text-3xl text-gray-500" />
           { <span className=' text-[8px] font-semibold text-white absolute bottom-9 left-6 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>{quantityItemCart}</span></span>
            }
            
            <Link to="cart" className="text-[10px] m-0 p-0">Carrinho</Link>

          </div>

         

            </div>)
          }
         
         
          

          

          

        </nav>

        {openSettingSeller && <div id="dropdown-button-seller" className="bg-white  w-[300px] absolute right-2 top-15 z-10">

          <div className="flex justify-between items-center m-4">
            <div className="flex justify-center items-center gap-2">
              {data.user.photo.url!=="" &&  <img src={data.user.photo.url} width="40px" height="40px"/> }
               {data.user.photo.url==="" && <FaRegUser className=" text-3xl text-gray-500" /> }

               <div className="space-y-2">
               <p className="text-sm text-gray-400">{data.user.name}</p>
               <p className="text-sm text-sky-500">Vendedor</p>
               </div>
        
              
            </div>

            <div className="relative">
           <IoIosNotificationsOutline  size={35} className="text-gray-500"/>
           <span className=' text-[8px] font-semibold text-white absolute top-0 left-4 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>0</span></span>
               
            </div>

          </div>
           <ul className='space-y-2 my-4'>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/dashbord">
                           <div className='  text-gray-600  px-4'>
                          
                               <p className='hidden md:block'>Dashboard</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/shops">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Lojas</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/orders">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Encomendas</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/products">
                           <div className='  text-gray-600 px-4'>
                         
                               <p className='hidden md:block'>Productos</p>
                           </div></Link>
                           
                       </li>

                       <li className="hover:bg-sky-500">
                           <Link to="seller/products">
                           <div className='  text-gray-600 px-4'>
                         
                               <p className='hidden md:block'>Usuários</p>
                           </div></Link>
                           
                       </li>
                      
                       <li className="hover:bg-sky-500">
                           <Link to="seller/events">
                           <div className='  text-gray-600  px-4'>
                           
                               <p className='hidden md:block'>Eventos</p>
                           </div></Link>
                           
                       </li>
                      
                       <li className="hover:bg-sky-500">
                           <Link to="seller/withdraw">
                           <div className='  text-gray-600 px-4 '>
                          
                               <p className='hidden md:block'>Saque</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/shopInbox">
                           <div className='  text-gray-600 px-4 '>
                       
                               <p className='hidden md:block'>Mensagens</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/promocode">
                           <div className='  text-gray-600  px-4 '>
                      
                               <p className='hidden md:block'>Promo Codes</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/refounds">
                           <div className='  text-gray-600 px-4 '>
                             
                               <p className='hidden md:block'>Reembolsos</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="seller/settings">
                           <div className='  text-gray-600  px-4'>
                             
                               <p className='hidden md:block'>Configurações</p>
                           </div></Link>
                           
                       </li>

                       <li className="hover:bg-sky-500">
                           <button onClick={handleLogout}>
                           <div className='  text-gray-600  px-4'>
                             
                               <p className='hidden md:block'>Sair</p>
                           </div></button>
                           
                       </li>
                   </ul>
            </div>}

            {openSettingAdmin && <div id="dropdown-button-Admin" className="bg-white  w-[300px] absolute right-2 top-15 z-10">

<div className="flex justify-between items-center m-4">
  <div className="flex justify-center items-center gap-2">
    {data.user.photo.url!=="" &&  <img src={data.user.photo.url} width="40px" height="40px"/> }
     {data.user.photo.url==="" && <FaRegUser className=" text-3xl text-gray-500" /> }
     <div className="space-y-2">
     <p className="text-sm text-gray-400">{data.user.name}</p>
     <p className="text-sm text-sky-500">Administrador</p>
     </div>
   
    
  </div>

  <div className="relative">
 <IoIosNotificationsOutline  size={35} className="text-gray-500"/>
 <span className=' text-[8px] font-semibold text-white absolute top-0 left-4 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>0</span></span>
     
  </div>

</div>
 <ul className='space-y-2 my-4'>
             <li className="hover:bg-sky-500">
                 <Link to="admin/dashbord">
                 <div className='  text-gray-600  px-4'>
                
                     <p className='hidden md:block'>Dashboard</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500">
                 <Link to="admin/shops">
                 <div className='  text-gray-600  px-4'>
                    
                     <p className='hidden md:block'>Lojas</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500">
                 <Link to="admin/users">
                 <div className='  text-gray-600  px-4'>
                    
                     <p className='hidden md:block'>Usuários</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500">
                 <Link to="admin/orders">
                 <div className='  text-gray-600  px-4'>
                    
                     <p className='hidden md:block'>Encomendas</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500">
                 <Link to="admin/products">
                 <div className='  text-gray-600 px-4'>
               
                     <p className='hidden md:block'>Productos</p>
                 </div></Link>
                 
             </li>
            
             <li className="hover:bg-sky-500">
                 <Link to="admin/events">
                 <div className='  text-gray-600  px-4'>
                 
                     <p className='hidden md:block'>Eventos</p>
                 </div></Link>
                 
             </li>
            
             <li className="hover:bg-sky-500">
                 <Link to="admin/withdraw">
                 <div className='  text-gray-600 px-4 '>
                
                     <p className='hidden md:block'>Saque</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500">
                 <Link to="admin/shopInbox">
                 <div className='  text-gray-600 px-4 '>
             
                     <p className='hidden md:block'>Suporte</p>
                 </div></Link>
                 
             </li>
          
             <li className="hover:bg-sky-500">
                 <Link to="admin/refounds">
                 <div className='  text-gray-600 px-4 '>
                   
                     <p className='hidden md:block'>Reembolsos</p>
                 </div></Link>
                 
             </li>
             <li className="hover:bg-sky-500">
                 <Link to="admin/settings">
                 <div className='  text-gray-600  px-4'>
                   
                     <p className='hidden md:block'>Perfil</p>
                 </div></Link>
                 
             </li>

             <li className="hover:bg-sky-500">
                 <button onClick={handleLogout}>
                 <div className='  text-gray-600  px-4'>
                   
                     <p className='hidden md:block'>Sair</p>
                 </div></button>
                 
             </li>
         </ul>
  </div>}




            {settingUser && <div id="dropdown-button-user" className="bg-white  w-[300px] absolute right-2 top-20 z-10">
              <div className="flex justify-between items-center m-4">
            <div className="flex justify-center items-center gap-2">
             <Link to="user">
             {data.user.photo.url ?  <img src={data.user.photo.url} width="40px" height="40px"/> : <FaRegUser className=" text-3xl text-gray-500" /> }
             </Link> 
             <div className="space-y-2">
               <p className="text-sm text-gray-400">{data.user.name}</p>
               <p className="text-sm  text-sky-500">Comprador</p>
               </div>
              
            </div>

            <div className="relative">

           <Link to="user/notifications">
           <IoIosNotificationsOutline  size={35} className="text-gray-500"/>
           <span className=' text-[8px] font-semibold text-white absolute top-0 left-4 bg-[#0198f1] rounded-[50%] px-2 py-1'><span>{notificationsUser.notification.length}</span></span>
               
           </Link>
           
            </div>

           

          </div>
           <ul className='space-y-2 my-4'>

          
                       <li className="hover:bg-sky-500">
                           <Link to="user/profile/personalData">
                           <div className='  text-gray-600  px-4'>
                          
                               <p className='hidden md:block'>Perfil</p>
                           </div></Link>
                           
                       </li>
                       <li className="hover:bg-sky-500">
                           <Link to="user/orders">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Encomendas</p>
                           </div></Link>
                           
                       </li>
                      

                       <li className="hover:bg-sky-500">
                           <Link to="user/wishlist">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Favoritos</p>
                           </div></Link>
                           
                       </li>


                       <li className="hover:bg-sky-500">
                           <Link to="user/refunds">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Reembolsos</p>
                           </div></Link>
                           
                       </li>

                       
                      
                      
                      
                       <li className="hover:bg-sky-500">
                           <Link to="user/track_order">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Metodo de pagamento</p>
                           </div></Link>
                           
                       </li>
                      
                       <li className="hover:bg-sky-500">
                           <Link to="user/inbox">
                           <div className='  text-gray-600  px-4'>
                              
                               <p className='hidden md:block'>Suporte</p>
                           </div></Link>
                           
                       </li>

                       <li className="hover:bg-sky-500">
                           <button onClick={handleLogout}>
                           <div className='  text-gray-600  px-4'>
                             
                               <p className='hidden md:block'>Sair</p>
                           </div></button>
                           
                       </li>
                   </ul>
            </div>}
        
        
     
      </header>
     
      <Menu/>


     
    </div>
  )
}

export default Header