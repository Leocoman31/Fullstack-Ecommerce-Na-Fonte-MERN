import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetAllProductsByCategory } from '../hooks/useGetAllProductsByCategory';
import Spinner from '../components/UI/Spinner';
import ListProductsShpping from '../components/Shop/ListProductsShpping';
import { useGetAllProductsFilter } from '../hooks/useGetAllProductsFilter';
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

function CategoryProduct() {

  const {category} = useParams();
  const {isLoading:isGetingProductByCategory, data:productCategory} = useGetAllProductsByCategory({category})
  
  const [filterPriceUp, setFilterPriceUp] = useState("");
  const [filterPriceLower, setFilterPriceLower] = useState("");
  const [filterPriceU, setFilterPriceU] = useState("");
  const [filterPriceL, setFilterPriceL] = useState("");
  const [color, setColor] = useState("");
  const[showFilterPrice, setShowFilterPrice] = useState(false);
  const[showFilterColor, setShowFilterClor] = useState(false);
  const[showAppliedFilter, setShowAppliedFilter]= useState(0);
  const {isLoading:isGetingProductFilter, data:productFilter} = useGetAllProductsFilter({filterPriceUp,filterPriceLower, category})



  if(isGetingProductByCategory || isGetingProductFilter){
    return <Spinner/>
  }



  function handleSearchPrice(){
    setFilterPriceUp(filterPriceU)
    setFilterPriceLower(filterPriceL);
    setShowAppliedFilter(showAppliedFilter+1);
  
  
  }


  function handleSearchColor(e){
    setColor(e.target.value)
    setShowAppliedFilter(showAppliedFilter+1);
  
  
  }

  
function handleRemoveFilter(){
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

function handleRemoveColor(){
 
  setColor("");
  setShowAppliedFilter(showAppliedFilter-1);

}
  

  return (
    <div className=' m-16 '>
        
 
    <div className='space-y-4'>

    <h1 className='text-xl text-gray-700  '>Categoria : <span className='font-semibold'>{category}</span></h1>

    <div className='flex  gap-4 justify-end items-center  mx-16'>

        <div className='px-4 py-2  relative rounded-lg text-gray-500 bg-gray-200'>
          {showAppliedFilter >0 && <span className='absolute bottom-6 right-0 rounded-[50%] bg-sky-500 text-white text-[10px] px-2 py-1'>{showAppliedFilter}</span>}
          <button  onClick={handleRemoveFilter} className='text-sm '>Remover todos filtros</button>
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

                <div className={`relative px-4 py-2 rounded-lg  ${color ? "bg-sky-500 text-white" :"bg-gray-200 text-gray-500" }`} onMouseEnter={() =>setShowFilterClor(true)} onMouseLeave={() =>setShowFilterClor(false)}>
                  <div className='text-sm flex   gap-2 justify-center items-center'>

                  {category ==="Roupas" || "Smartphone" && <div className='text-sm flex   gap-2 justify-center items-center'>
                  <p>Cor {color &&  <span>| <button onClick={handleRemoveColor} className='text-white hover:text-sky-800 '> X </button ></span>}</p>
                  {showFilterColor ? <p><IoMdArrowDropup/></p>
                  :<p><IoMdArrowDropdown/></p>
                  }
                  </div> }

                  { showFilterColor && <div className='absolute z-[10] w-[120px] text-sm space-y-4 top-6  text-gray-500 left-[1.5px] bg-white   rounded-2xl p-4'>

<input type='radio' id='Roupas' name="filterColor" value="Branco" className='mr-2'onClick={(e)=>handleSearchColor(e)}/>
<label for="Branca">Branco</label><br></br>
<input type='radio' id='Verde'  name="filterColor" value="Verde"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Verde">Verde</label><br></br>
<input type='radio' id='Amarelo'  name="filterColor" value="Amarelo"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<labe for="Amarelo">Amarelo</labe><br></br>
<input type='radio' id='Dourado'  name="filterColor" value="Dourado"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Dourado">Dourado</label><br></br>
<input type='radio' id='Prateado'  name="filtefilterColorrCategory" value="Prateado"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Prateado">Prateado</label><br></br>
<input type='radio' id='Preto'  name="filterColor" value="Preto"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Preto">Preto</label><br></br>
<input type='radio' id='Vermelho'  name="filterColor" value="Vermelho"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Vermelho">Vermelho</label><br></br>
<input type='radio' id='Rosa'  name="filterColor" value="Rosa"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Rosa">Rosa</label><br></br>
<input type='radio' id='Castanho'  name="filterColor" value="Castanho"  className='mr-2' onClick={(e)=>handleSearchColor(e)}/>
<label for="Castanho">Castanho</label><br></br>






</div>}




                  </div>
                  </div>
    </div>
      
       {(!color && !filterPriceUp && !filterPriceLower ) && <ListProductsShpping listProducts={productCategory}/>}
       { (color.length>0 ||  filterPriceUp.length>0 || filterPriceLower.length>0) &&<ListProductsShpping listProducts={productFilter}/>}
        

    </div>

    
    

</div>
  )
}

export default CategoryProduct