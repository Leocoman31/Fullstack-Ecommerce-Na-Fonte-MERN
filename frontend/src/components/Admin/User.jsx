import React, { useState } from 'react'
import { IoSettingsOutline } from "react-icons/io5";
import { useGetUser } from '../../hooks/useGetUser';
import { useDeleteUser } from '../../hooks/useDeleteUser';
import ModelUserDetail from '../UI/ModelUserDetail';
import { useContextModal } from '../../context/contextModel';
import { useNavigate } from 'react-router-dom';
import ModelConfirmDeleteUser from '../UI/ModelConfirmDeleteUser';

function User({user}) {

    const[showSetting, setShowSetting ] = useState(false);
    const {isLoading, data} = useDeleteUser({id:user._id})
    const {handleModelUserDetails,
        openModelUserDetail} = useContextModal()
    const navigate = useNavigate();
    const{deleteShow,handleDeleteConfirm}=useContextModal();
    



    function handleUserDetails (){
        setShowSetting(false);
        handleModelUserDetails();
        navigate(`userDetail/${user._id}`)
    }

    function handleUpdateRoleUser(){

    }

    function handDeleteUser(){
        handleDeleteConfirm();
        setShowSetting(false)



    }


   
  return (
    <div>
          {
            
            openModelUserDetail &&  <ModelUserDetail/>
          
            

        }
        {
            deleteShow && <ModelConfirmDeleteUser id={user._id}/>
        }
        
         <div className='grid grid-cols-9 gap-x-1 text-gray-800 text-sm justify-center  hover:bg-gray-100 '>
                    <p className='col-span-2 '><span className='font-semibold'> ID: </span>{user._id}</p>
                
                 
                    <p className='col-span-2'> <span className='font-semibold'>Nome: </span> {user.name} </p>
                    <p className='col-span-2'> <span className='font-semibold'>Email: </span>{user.email}</p>
                <p  className='col-span-2 '>  <span className='font-semibold'>Tipo: </span> <span className='text-green-800'> {user.role }</span></p>
                     <div className='relative'>
                    <button onClick={()=> setShowSetting(!showSetting)}><IoSettingsOutline className='hover:text-sky-500' size={26}/></button>
                
                    {showSetting && <div className='absolute z-10 top-6 bg-white'>
                        <ul className='text-sm'>
                            <li className='p-2 py-1 hover:bg-sky-500'>
                                <button onClick={handleUserDetails}>Mais detalhes</button>
                            </li>
                
                            <li className='p-2 py-1 hover:bg-sky-500'>
                                <button onClick={handleUpdateRoleUser}>Mudar estado</button>
                            </li>
        
                            <li className='p-2 py-1 hover:bg-sky-500'>
                                <button onClick={handDeleteUser}>Eliminar</button>
                            </li>
                
                          
                        </ul>
                
                    </div>
                }
                    </div>
                   
                
                    </div>
    </div>
  )
}

export default User