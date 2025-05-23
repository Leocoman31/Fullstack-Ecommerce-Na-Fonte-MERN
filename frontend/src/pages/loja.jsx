import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Spinner from '../components/UI/Spinner'
import { useGetAllProducts } from '../hooks/useGetAllProducts'
import ListProductsShpping from '../components/Shop/ListProductsShpping'
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useGetAllProductsFilter } from '../hooks/useGetAllProductsFilter'

function Loja() {

const {register} = useForm()

const [category, setCategory] = useState("")
const [filterPriceUp, setFilterPriceUp] = useState("");
const [filterPriceLower, setFilterPriceLower] = useState("");
const [filterPriceU, setFilterPriceU] = useState("");
const [filterPriceL, setFilterPriceL] = useState("");


const {isLoading, data:shopProducts, error} =useGetAllProducts();

const {isLoading:isGetingProductFilter, data:productFilter} = useGetAllProductsFilter({filterPriceUp,filterPriceLower, category})
const[showFilterPrice, setShowFilterPrice] = useState(false);
const[showFilterCategory ,setShowFilterCategory]=useState(false);

const[showAppliedFilter, setShowAppliedFilter]= useState(0);






if(isLoading ||isGetingProductFilter ) return <Spinner/>


function handleSearchCategory(e){
  setCategory(e.target.value);
  setShowAppliedFilter(showAppliedFilter+1);

  setFilterSearch("")

}

function removeFilterCategory(){
  setCategory("");
  setShowAppliedFilter(showAppliedFilter-1);

}

function handleSearchPrice(){
  setFilterPriceUp(filterPriceU)
  setFilterPriceLower(filterPriceL);
  setShowAppliedFilter(showAppliedFilter+1);

  setFilterSearch("")

}

function handleSearchFilter(e){
  setFilterSearch(e.target.value);
  setCategory("");


 

}

function handleRemoveFilter(){
  setCategory("");
  setFilterPriceUp("");
  setFilterPriceLower("")
  setShowAppliedFilter(0);


}

function handleRemovePrice(){
  setFilterPriceL("");
  setFilterPriceU("");
  setFilterPriceLower("");
  setFilterPriceUp("");
  setShowAppliedFilter(showAppliedFilter-1);

}





  return (
    <div className='  space-y-4 mt-8 '>

        <div className='flex  gap-4 justify-end items-center  mx-16'>

        <div className='px-4 py-2  relative rounded-lg text-gray-500 bg-gray-200'>
          {showAppliedFilter >0 && <span className='absolute bottom-6 right-0 rounded-[50%] bg-sky-500 text-white text-[10px] px-2 py-1'>{showAppliedFilter}</span>}
          <button  onClick={handleRemoveFilter} className='text-sm '>Remover todos filtros</button>
        </div>

       

    
        <div className={`relative px-4 py-2 rounded-lg  ${category  ? "bg-sky-500 text-white" :"bg-gray-200 text-gray-500" }`}onMouseEnter={() =>setShowFilterCategory(!showFilterCategory)} onMouseLeave={() =>setShowFilterCategory(!showFilterCategory)}>
         <div className='text-sm flex gap-2  justify-center items-center'>
          <p>Categoria {category && <span>| <button onClick={removeFilterCategory} className='text-white hover:text-sky-800 '> X </button ></span>}</p>
          {showFilterCategory ? <p><IoMdArrowDropup/></p>
          :<p><IoMdArrowDropdown/></p>
          }
          </div>
         { showFilterCategory && <div className='absolute z-[10] w-[200px] text-sm space-y-4 top-10 text-gray-500 left-0 bg-white   rounded-2xl p-4'>

          <input type='radio' id='Roupas' name="filterCategory" value="Roupas" className='mr-2'onClick={(e)=>handleSearchCategory(e)}/>
          <label for="Roupas">Roupas</label><br></br>
          <input type='radio' id='Alimentos'  name="filterCategory" value="Alimentos"  className='mr-2' onClick={(e)=>handleSearchCategory(e)}/>
          <label for="Alimentos">Alimentos</label><br></br>
          <input type='radio' id='Smartphone'  name="filterCategory" value="Smartphone"  className='mr-2' onClick={(e)=>handleSearchCategory(e)}/>
          <labe for="Smartphone">Smartphone</labe><br></br>
          <input type='radio' id='Computadores'  name="filterCategory" value="Computadores"  className='mr-2' onClick={(e)=>handleSearchCategory(e)}/>
          <label for="Computadores">Computadores</label><br></br>
          <input type='radio' id='Suplementos'  name="filterCategory" value="Suplementos"  className='mr-2' onClick={(e)=>handleSearchCategory(e)}/>
          <label for="Suplementos">Suplementos</label><br></br>
          <input type='radio' id='Ténis'  name="filterCategory" value="Ténis"  className='mr-2' onClick={(e)=>handleSearchCategory(e)}/>
          <label for="Ténis">Ténis</label><br></br>
          <input type='radio' id='Electrònicos'  name="filterCategory" value="Electrònicos"  className='mr-2' onClick={(e)=>handleSearchCategory(e)}/>
          <label for="Ténis">Electrònicos</label><br></br>






          </div>}
  




       
        </div>

       

        
          


       

        <div className={`relative px-4 py-2 rounded-lg  ${filterPriceLower || filterPriceUp ? "bg-sky-500 text-white" :"bg-gray-200 text-gray-500" }`} onMouseEnter={() =>setShowFilterPrice(!showFilterPrice)} onMouseLeave={() =>setShowFilterPrice(!showFilterPrice)}>
         <div className='text-sm flex   gap-2 justify-center items-center'>
          <p>Preço {(filterPriceLower || filterPriceUp) &&  <span>| <button onClick={handleRemovePrice} className='text-white hover:text-sky-800 '> X </button ></span>}</p>
          {showFilterPrice ? <p><IoMdArrowDropup/></p>
          :<p><IoMdArrowDropdown/></p>
          }
          </div>
         { showFilterPrice && <div className='absolute z-[10] text-gray-500 space-y-4 top-10 right-0 bg-white   rounded-2xl p-4'>

          <div className='flex flex-col gap-4  '>
          <div> 
            <p className='text-sm'>De</p>
            <input  onChange={(e)=>  setFilterPriceU(e.target.value)} type='number' className='bg-gray-100 p-2 h-8 rounded-xl    '/>
          </div>

          <div> 
            <p className='text-sm' >Até</p>
            <input onChange={(e)=> setFilterPriceL(e.target.value)} type='number' className='bg-gray-100 p-2  h-8 rounded-xl '/>
          </div>


          </div>



          <div className='bg-sky-600 text-white  rounded-xl text-center'>
          <button className='  px-4 py-1.5   ' onClick={handleSearchPrice}>Aplicar</button>
          </div>
          



          </div>}
  




       
        </div>


        </div>


        
      

 


        { (!category && !filterPriceUp) && <h1 className='text-xl text-gray-700 mx-16 '><span className='font-bold'>{shopProducts.results}</span> productos  Encontrados </h1>}
        {(category || filterPriceLower ) && <h1 className='text-xl text-gray-700 mx-16 '><span className='font-bold'>{productFilter.results}</span> productos  Encontrados </h1>}
       
      
        <div className=' mx-16 '>
        
            <div className=' mt-8 mb-16'>
            <div>
         

              {
                (!category && !filterPriceUp && !filterPriceLower ) ? <ListProductsShpping listProducts={shopProducts}/>:
                <ListProductsShpping listProducts={productFilter}/>

              }

     
            
          
          
          
            </div>
            </div>
            
            

        </div>

       
    </div>
  )
}

export default Loja