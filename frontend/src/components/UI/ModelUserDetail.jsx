import React from 'react'
import ShopDetail from '../Shop/ShopDetail'
import { useNavigate, useParams } from 'react-router-dom'
import Spinner from './Spinner';
import { useContextModal } from '../../context/contextModel';
import { FaRegCircleXmark } from "react-icons/fa6";
import { useGetUser } from '../../hooks/useGetUser';
import UserDetail from '../User/UserDetail';

function ModelUserDetail() {
    const userId = useParams();
    const {id} =userId
    const navigate =useNavigate()    
    const {isLoading, data}  = useGetUser({id});
    const {handleModelUserDetails} =useContextModal()


    function handleCloseModel(){
        handleModelUserDetails()
        
        navigate(-1);

    }


    if(isLoading){
        return <Spinner/>
    }


  return (
<div className="fixed top-0 left-0 w-[100%] h-[100vh]
    backdrop-contrast-[90%]  z-[1000] transition-all duration-[0.5]   shadow-md">
     

    <div className="relative w-[50%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-lg px-[3.2rem] py-[4rem]
    transition-all duration-1000" >
        <div className='absolute top-2 right-2'> <button onClick={handleCloseModel}><FaRegCircleXmark size={25} className='text-sky-gray-950 hover:text-sky-500'/></button></div>
        <UserDetail user={data.user}/>
        </div>
    </div>
  )
}

export default ModelUserDetail