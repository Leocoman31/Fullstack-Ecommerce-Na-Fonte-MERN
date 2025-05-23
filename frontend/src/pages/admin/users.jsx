import React from 'react'
import { useGetAllUsers } from '../../hooks/useGetAllUsers'
import Spinner from '../../components/UI/Spinner';
import ListUsers from '../../components/Admin/ListUsers';

function Users() {
   const  {isLoading, data:listUsers,error} = useGetAllUsers();

   if(isLoading){
    return <Spinner/>
   }




  return (
    <div className='m-16 space-y-4'>
        <h1 className='text-[1rem]'>{listUsers.resultats} usuários encontrados</h1>
        <ListUsers listUsers ={listUsers.data}/>
    </div>
  )
}

export default Users