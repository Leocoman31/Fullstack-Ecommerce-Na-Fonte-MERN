import React, { useState } from 'react'
import { useGetAllUsers } from '../../hooks/useGetAllUsers'
import Spinner from '../../components/UI/Spinner';
import ListUsers from '../../components/Admin/ListUsers';
import Pagination from '../../components/UI/Pagination';
import { useContextModal } from '../../context/contextModel';
import { IoSearchOutline } from "react-icons/io5";

function Users() {
  const numberItemPerPage=10;
  const [currentPage, setCurrentPage] = useState(1);
   const  {isLoading, data:listUsers,error} = useGetAllUsers({currentPage});
   const[filterUser, setFilterUser]= useState("");
   const[filterUserRole, setFilterUserRole] = useState("");

   
   const lastIndexElemnt = currentPage * numberItemPerPage;
   const firstIndexElement =lastIndexElemnt -numberItemPerPage

   if(isLoading){
    return <Spinner/>
   }
   const limitPage =  listUsers.data ? listUsers.data.users.slice(firstIndexElement,lastIndexElemnt): [];


  


   function handleCurrentPage(number){
    setCurrentPage(number)

   }




  return (
    <div className='m-16 space-y-4'>

        <div className='flex gap-x-4 justify-center'>
      
              {<div >
                {/* (filterShopStatus.length>0  || filterShop.length>0) &&  <div className='px-4 py-2  relative rounded-lg text-gray-500 bg-white'><span className='absolute bottom-6 right-0 rounded-[50%] bg-sky-500 text-white text-[10px] px-2 py-1'>1</span>
                <button  onClick={handleRemoveFilter} className='text-sm '>Remover todos filtros</button>
                </div>*/}
              </div>}
                   <div className="flex w-[40%]  ">
                              <div className="relative w-full">
                                
                              <input type="text" onChange={(e)=>setFilterUser(e.target.value)} className=" rounded-lg bg-white border border-sky-500 block w-full px-4 py-3 text-sm " placeholder="Olá, o que você procura?"/>
                              
                             
                              <button  className=" text-black absolute  end-2.5 bottom-2.5" ><IoSearchOutline size={22}/></button>
                  
                         
                             
                              </div>
                  
                              
                            </div>
      
             
                      <select onChange={(e)=>setFilterUserRole(e.target.value)} className='bg-white border border-sky-500 rounded-lg p-2 text-sm'>
                          <option>Todos usuários</option>
                          <option>Administrador</option>
                          <option>Comprador</option>
                          <option>Vendedor</option>
                          <option>Entregador</option>
                          <option>Suporte</option>
                      </select>
      
                   
                
      
                      
      
              </div>
        <h1 className='text-[1rem]'>{listUsers.resultats} usuários encontrados</h1>
        <ListUsers listUsers ={limitPage}/>
        <Pagination itemPerPage ={numberItemPerPage} totalItem={listUsers.resultats} handleCurrentPage ={handleCurrentPage}/>

    </div>
  )
}

export default Users