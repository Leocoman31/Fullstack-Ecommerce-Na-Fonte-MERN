import React, { useState } from 'react'


import Spinner from '../../components/UI/Spinner'
import ListProductsShop from '../../components/Shop/ListProductsShop'
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useContextModal } from '../../context/contextModel'
import { IoSearchOutline } from "react-icons/io5";
import { useGetAllProducts } from '../../hooks/useGetAllProducts'
import ListProducts from '../../components/Admin/ListProducts';
import Pagination from '../../components/UI/Pagination';
import { useGetAllShops } from '../../hooks/useGetAllShops';

function ProductsAdmin() {
const numberItemPerPage=10;
  const [currentPage, setCurrentPage] = useState(1);
  const {isLoading,data:listProducts,error} = useGetAllProducts({currentPage});
  const[shop,setShop]= useState("");
  const lastIndexElemnt = currentPage * numberItemPerPage;
   const firstIndexElement =lastIndexElemnt -numberItemPerPage;
   const[filterProduct, setFilterProduct] = useState("");
   const{isLoading:isgettingAllShops, data:listShops} = useGetAllShops();


  if(isLoading || isgettingAllShops){
    return <Spinner/>
  }


 
  const limitPage =  listProducts.data ? listProducts.data.slice(firstIndexElement,lastIndexElemnt): [];



  


  function handleCurrentPage(number){
   setCurrentPage(number)

  }

  




 


  return (

    
    <div className='space-y-4 m-16'>
  

      <div className='flex gap-4  justify-center items-center text-gray-500  mb-8 '>
     

 



     <div className="relative w-[40%]">
                                    
                                  <input type="text" onChange={(e)=>setFilterProduct(e.target.value)} className=" rounded-lg border border-sky-500 bg-white block w-full px-4 py-3 text-sm " placeholder="Olá, o que você procura?"/>
                                  
                                 
                                  <button  className=" text-black absolute  end-2.5 bottom-2.5" ><IoSearchOutline size={22}/></button>
                      
                             
                                 
                                  </div>
                                
  

  <div>
  <select name="shop"  className="   p-2 w-full bg-white border border-sky-500 text-gray-500 text-sm" id="shop-select" onChange={(e)=>setShop(e.target.value)}>
             <option defaultValue="">Filtrar por loja</option> 
             {listShops.shops.map((shopItem => 
             <option key={shopItem._id} value={shopItem._id}>{shopItem.name} </option> ))}
             
             
             </select>

  </div>


        
      </div>

<div className='space-y-4'>
  
<ListProducts listProducts={limitPage}/>
<Pagination itemPerPage ={numberItemPerPage} totalItem={listProducts. results} handleCurrentPage ={handleCurrentPage}/>


</div>
  
    </div>
  )
}

export default ProductsAdmin