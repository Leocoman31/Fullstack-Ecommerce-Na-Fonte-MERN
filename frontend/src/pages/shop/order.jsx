import React, { useState } from 'react'
import { useGetMyShops } from '../../hooks/useGetMyShops';
import { useContextModal } from '../../context/contextModel';
import Spinner from '../../components/UI/Spinner';
import ListOrderShop from '../../components/Shop/ListOrderShop';
import { useGetAllOrdersSeller } from '../../hooks/useGetAllOrdersSeller';

function Order() {
 
  
   const{isLoading:isfetchingShop, data:listShops} = useGetMyShops();
   const {isLoading, data} = useGetAllOrdersSeller()
   const[filterShop, setFilterShop]=useState("");
   const[filterStartDate, setFilterStartDate]=useState(null);
   const[filterStartEnd, setFilterStartEnd]=useState(null);
   const[filterStatusOrder, setFilterStatusOrder]=useState("");
   const[showFilterDate, setShowFilterDate] = useState(false);
   const {handleModelOrderDetails,
     openModelOrderDetail} = useContextModal();
 
 
 
   if(isLoading || isfetchingShop){
     return <Spinner/>
   }

   console.log(data);

  
 
   function handleRemoveFilter(){
     setFilterShop("");
     setFilterStartDate(null)
     setFilterStartEnd(null);
     setFilterStatusOrder("");
     
   
   }
 
 
   
   
 
 
   return (
     <div className='m-16 space-y-4'>
        <div className='flex justify-center gap-x-4'>
 
 
 
 {<div >
           { (filterShop.length>0 || filterStartDate !== null  || filterStartEnd!==null ||filterStatusOrder.length>0) &&  <div className='px-4 py-2  relative rounded-lg text-gray-500 bg-white'><span className='absolute bottom-6 right-0 rounded-[50%] bg-sky-500 text-white text-[10px] px-2 py-1'>1</span>
           <button  onClick={handleRemoveFilter} className='text-sm '>Remover todos filtros</button>
           </div>}
         </div>}
 
 <select onChange={(e)=>setFilterShop(e.target.value)} className=' px-6 rounded-md py-2 border border-sky-500 text-gray-500 bg-white text-sm'>
   <option>Todas as  minhas lojas</option>
      {listShops.shops.map(shop => <option  key={shop._id} value={shop.name}>{shop.name}</option>)}
       </select>
 
 
       
 
       <select  onChange={(e)=>setFilterStatusOrder(e.target.value)} className='  text-gray-500 border border-sky-500 px-6 rounded-md py-2 bg-white text-sm'>
       <option >Todas encomendas</option>
       <option>A Processar</option>
         <option>Confirmada</option>
         <option>A caminho</option>
         <option>Entregue</option>
       </select>
 
 
 <div className={`relative px-4 py-2 rounded-lg border  border-sky-500  ${filterStartDate || filterStartEnd ? "bg-sky-500  text-white" :"bg-white text-gray-500" }`} onMouseEnter={() =>setShowFilterDate(!showFilterDate)} onMouseLeave={() =>setShowFilterDate(!showFilterDate)}>
          <div className='text-sm flex   gap-2 justify-center items-center '>
           <p>{filterStartDate!==null && filterStartEnd === null && <span> {filterStartDate} </span> }
           {filterStartDate!==null && filterStartEnd !==null && <span> {filterStartDate} - {filterStartEnd}  </span> }
           {filterStartDate === null && filterStartEnd === null && <span> Filtrar por Data  </span> }
          {(filterStartDate || filterStartEnd) &&  <span>| <button  className='text-white hover:text-sky-800 '> X </button ></span>}</p>
           {showFilterDate ? <p><IoMdArrowDropup/></p>
           :<p><IoMdArrowDropdown/></p>
           }
           </div>
          { showFilterDate && <div className='absolute z-[10] text-gray-500 space-y-4 top-9 left-0 bg-white   rounded-2xl p-4'>
 
           <div className='flex flex-col gap-4  '>
           <div> 
             <p className='text-sm'>De</p>
             <input  onChange={(e)=>  setFilterStartDate(e.target.value)} type='date' className='bg-gray-100 p-2 h-8 rounded-xl    '/>
           </div>
 
           <div> 
             <p className='text-sm' >Até</p>
             <input onChange={(e)=> setFilterStartEnd(e.target.value)} type='date' className='bg-gray-100 p-2  h-8 rounded-xl '/>
           </div>
 
 
           </div>
 
 
 
           <div className='bg-sky-600 text-white  rounded-xl text-center'>
           <button className='  px-4 py-1.5   ' >Aplicar</button>
           </div>
           
 
 
 
           </div>}
   
 
 
 
 
        
         </div>
 
      
 
       </div>
       <h1 className='text-[1.5rem]'>Todas as encomendas</h1>
       < ListOrderShop  orderList={data}/>
 
     </div>
   )
}

export default Order