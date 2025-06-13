import React, { use, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useAddProduct } from '../../../hooks/useAddProduct'
import { SizeClassIOS } from 'expo/build/ScreenOrientation/ScreenOrientation.types';
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useIsAuthenticadUser } from '../../../hooks/useIsAuthenticadUser';
import { UseUpdateProduct } from '../../../hooks/useUpdateProduct';
import { useContextModal } from '../../../context/contextModel';


function FormEditProduct({product}) {



  
    const{register, handleSubmit,reset} =useForm()
    const{data:addProduct,isLoading,error} =useAddProduct();
    const[name,setName]=useState(product.name)
    const[category,setCategory]=useState(product.category);
    const[originalPrice,setOriginalPrice]=useState(product.originalPrice);
    const[discountPrice,setdiscountPrice]=useState(0);
    const[brand,setBrand]=useState(product.brand);
    const[stock,setStock]=useState(product.stock);
    const[description,setDescription]=useState(product.description);
    const[img,setImg]=useState([])
    const[size, setSize]=useState(product.size);
    const[color,setColor] = useState(product.color);
    const[flavor,setFlavor]=useState(product.flavor ? product.flavor : "")
    


    const {handleEditProduct}=useContextModal();

     
    const{upProduct, isLoading:isUpdating} =UseUpdateProduct();



   
 
const handleImageChange = (e) => {
  const files = Array.from(e.target.files);

  setImg([]);

  files.forEach((file) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        setImg((old) => [...old, reader.result]);
      }
    };
    reader.readAsDataURL(file);
  });

  console.log(img);
};







    function handleUpdateProduct(e){
        e.preventDefault();

     
        const data={
            name,
            category,
            originalPrice,
            discountPrice,
            brand,
            stock,
            description,
            images:img,
            size,
            color,
            flavor,
       
            
          


        }

     
        
        upProduct(product._id, data,{
        onSuccess:()=>{
          handleEditProduct();
            reset();

        }
    })

   


    }

  return (
    <div>
       <form onSubmit={handleUpdateProduct} className='space-y-4 my-4 mx-16 text-gray-700'>

        <div>
       
        <div>
        <label className="pb-2">
            Selecione entre 2 á  4 imagens do producto <span className="text-red-500">(Máximo 1MB por imagem)*</span>
          </label>
            <input type='file'  
            className="hidden" multiple  id='upload' name="images" onChange={handleImageChange} />
        </div>

        <div className="w-full flex items-center flex-wrap">
            <label htmlFor="upload">
              <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
            </label>

            {img.length === 0
             &&
          <>
          {
             product.images.map((i) => (
              <img
                src={i.url}
                key={i.public_id}
                alt=""
                className="h-[120px] w-[120px] object-cover m-2"
              />
              
            ))
          }</>
        }
             

            

             
              {img.length > 0 && 
              <>
              {
                img.map((i) => (
                  <img
                    src={i}
                    key={i}
                    alt=""
                    className="h-[120px]  w-[120px] object-cover m-2"
                  />
                ))
}
</>
}
              
          </div>

        </div>
       
        
        <div className='flex gap-2'>
        <div id='controllerName ' className='w-full'>
          <label>Nome do producto</label>
          <input  value={name}
          type="text" className=' border border-sky-500  rounded-md p-2 w-full' placeholder='Digite o nome do produto' id="name" name="name"   onChange={(e)=>setName(e.target.value)} required="Campo obrigatorio" />
        </div>

        <div id='controllerCategory' className='w-full'>

<label>Categoria</label>
<select value={category} name="category"  className="  border border-sky-500  rounded-md p-2 w-full" id="category-select" onChange={(e)=>setCategory(e.target.value)} required="Campo obrigatorio">

<option value="Alimentos">Alimentos</option>
<option value="Electrónicos">Electrónicos</option>
<option value="Roupas">Roupas</option>
<option value="Desporto">Desporto</option>
<option value="Fitness">Fitness</option>
<option value="Suplementos">Suplimentos</option>
<option value="Saúde">Saúde</option>
<option value="Smartphone">Smartphone</option>
<option value="Computadores">Computadores</option>
<option value="Acessórios">Acessórios</option>
<option value="Ténis">Ténis</option>
</select>
</div>






        </div>

{ ( category === 'Smartphone')  &&(

  <div className='space-y-4'>
    
  <div id='controllerColor' className='w-full'>

<label>Cor</label>
<select value={color} name="color"  className="  border border-sky-500  rounded-md p-2 w-full" id="color-select" onChange={(e)=>setColor(e.target.value)} required="Campo obrigatorio">

<option value="Azul">Azul</option>
<option value="Vermelho">Vermelho</option>
<option value="Amarelo">Amarelo</option>
<option value="Preto">Preto</option>
<option value="Branco">Branco</option>
<option value="Verde">Verde</option>
<option value="Cinza">Cinza</option>
<option value="Roza">Rosa</option>
<option value="Dourado">Dourado</option>
<option value="Platina">Platina</option>
</select>
</div>


<div>
  <label>Tamanho de memória</label>

<div className='flex gap-2  border border-sky-500  rounded-md p-2 w-full'>
      <div>
    <input type="checkbox" id="size" name="size" value="4GB" onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="4GB"> 4GB</label>

    </div>
    <div>

    <input type="checkbox" id="size" name="size" value="8GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="8GB">8GB</label>
    </div>



      <div>
      <input type="checkbox" id="size" name="size" value="16GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
      <label for="16GB">16GB</label>
      </div>
   
    <div>
    <input type="checkbox" id="size" name="size" value="32GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="32GB">32GB</label>
    </div>

    <div>
    <input type="checkbox" id="size" name="size" value="64GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="64GB"> 64GB</label>

    </div>
    

    <div>
       
    <input type="checkbox" id="size" name="size" value="128GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="128GB"> 128GB</label>
    </div>
    <div>
       
       <input type="checkbox" id="size" name="size" value="250GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
       <label for="250GB"> 250GB</label>
       </div>

       <div>
       
       <input type="checkbox" id="size" name="size" value="500GB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
       <label for="500GB"> 500GB</label>
       </div>

       <div>
       
       <input type="checkbox" id="size" name="size" value="1TB"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
       <label for="1TB"> 1TB</label>
       </div>
    </div>
  
</div>




  </div>


  




    )
}


{
  category === "Roupas" && 
  <div className='flex gap-4 '>
    <div id='select-size' className='w-full'>
      <label>Selecione os tamanhos</label>

      <div className='flex gap-2  border border-sky-500  rounded-md p-2 w-full'>
      <div>
    <input type="checkbox" id="size" name="size" value="XS" onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="XS"> XS</label>

    </div>
    <div>

    <input type="checkbox" id="size" name="size" value="M"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="M"> M</label>
    </div>



      <div>
      <input type="checkbox" id="size" name="size" value="L"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
      <label for="L"> L</label>

      </div>
   
    <div>
    <input type="checkbox" id="size" name="size" value="XL"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="XL"> XL</label>
    </div>

    <div>
    <input type="checkbox" id="size" name="size" value="XXL"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="XXL"> XXL</label>

    </div>
    

    <div>
       
    <input type="checkbox" id="size" name="size" value="XXXL"     onClick={(e) => setSize((prevStatus)=>[...prevStatus, e.target.value])}/>
    <label for="XXXL"> XXXL</label>
    </div>
    </div>
    </div>


    <div id='controllerColor' className='w-full'>

<label>Cor</label>
<select name="color"  className="  border border-sky-500  rounded-md p-2 w-full" id="color-select" onChange={(e)=>setColor(e.target.value)} required="Campo obrigatorio">

<option value="Azul">Azul</option>
<option value="Vermelho">Vermelho</option>
<option value="Amarelo">Amarelo</option>
<option value="Preto">Preto</option>
<option value="Branco">Branco</option>
<option value="Verde">Verde</option>
<option value="Cinza">Cinza</option>
<option value="Roza">Rosa</option>
<option value="Dourado">Dourado</option>
<option value="Platina">Platina</option>
</select>
</div>


    </div>

   



}

{
  category === "Ténis" &&
  <div className='flex gap-4'>
    <div className='w-full'>
      <label>Cor</label>
     
   <select  value={color} name="color"  className="  border border-sky-500  rounded-md p-2 w-full" id="color-select" onChange={(e)=>setColor(e.target.value)} required="Campo obrigatorio">

<option value="Azul">Azul</option>
<option value="Vermelho">Vermelho</option>
<option value="Amarelo">Amarelo</option>
<option value="Preto">Preto</option>
<option value="Branco">Branco</option>
<option value="Verde">Verde</option>
<option value="Cinza">Cinza</option>
<option value="Roza">Rosa</option>
<option value="Dourado">Dourado</option>
<option value="Platina">Platina</option>
</select>
    </div>

    <div className='w-full'>
      <label>Tamanho</label>
      <input value={size} type='text' className=' border border-sky-500  rounded-md p-2 w-full' onChange={(e)=>setSize(e.target.value)} placeholder='Tamanho do tenis'/>
    </div>

  </div>
}

    <div className='flex gap-4'>
    <div id='controllerPrice' className='w-full'>
          <label>Preço original</label>
          <input value={originalPrice} type="number" className=" border border-sky-500  rounded-md p-2 w-full" placeholder='Digite o nome do produto' id="originalPrice" name="originalPrice" onChange={(e)=>setOriginalPrice(e.target.value)} required="Campo obrigatorio" />
        </div>

        <div id='controllerPrice' className='w-full'>
          <label>Preço na promoção</label>
          <input  disabled value={discountPrice} type="number" className=" border border-sky-500   rounded-md p-2 w-full" placeholder='Digite o preço  da promoção do produto ' id="discountPrice" name="discountPrice" onChange={(e)=>setdiscountPrice(e.target.value)} required="Campo obrigatorio" />
        </div>

    </div>
      

       
        
       {/* <div id='controllerFlavour'>
          <label>Sabor</label>
          <input type="text" className=" border border-sky-500  rounded-md p-2 w-full"  placeholder='Digite o sabor do produto' id="flavor"  name="flavor" {...register("flavor", {required:"Campo obrigatorio"})} />
        </div>

        <div id='controllerSize'>
          <label>Tamanho</label>
          <select name="category"  className="  border border-sky-500  rounded-md p-2 w-full" id="category-select" {...register("category",{required:"campo obrigatorio"})}>

<option value="XS">XS</option>
<option value="S">S</option>
<option value="M">M</option>
<option value="L">L</option>
<option value="XL">XL</option>
<option value="XXL">XXL</option>
<option value="XXXL">XXXL</option>
</select>
        </div>
       */}


        

        <div className='flex gap-4'>
            
        <div id='controllerSeller ' className='w-full'>
          <label>Marca</label>
          <input value={brand} type="text" className=" border border-sky-500  rounded-md p-2 w-full"  placeholder='Digite o nome do produto' id="brand" onChange={(e)=>setBrand(e.target.value)} required="Campo obrigatorio" />
        </div>
        


   


        
        <div id='controllerStock' className='w-full'>
          <label>Stock</label>
          <input value={stock} type="number" className=" border border-sky-500  rounded-md p-2 w-full" placeholder='Digite o nome do produto' id="stock" name="stock" onChange={(e)=>setStock(e.target.value)} required="Campo obrigatorio" />
        </div>
        </div>
        

       

      
        
        
      
        

        <div id='controllerDescription  ' className='flex  justify-center'>

          <textarea id="description" value={description} className=' border border-sky-500  rounded-md text-gray-500 p-4' name="description" rows="10" cols="80" onChange={(e)=>setDescription(e.target.value)} required="Campo obrigatorio">
            Descrição do produto...
        </textarea>
      
        </div>
        <div className='space-x-2 flex justify-center items-center'>
        <button type='submit'  className={`bg-gray-800 px-4 py-2  text-sm text-white hover:bg-gray-900`}>{isLoading ? <span>Editando...</span> : <span>Editar Produto</span>}</button>
        <button type='reset'  className='bg-red-700 px-4  py-2 text-sm text-white hover:bg-red-800'>Cancelar</button>

        </div>

       
      </form>
    </div>
  )
}

export default FormEditProduct