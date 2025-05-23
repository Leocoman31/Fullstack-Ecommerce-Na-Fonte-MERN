
import { Link, useNavigate } from 'react-router-dom'
import { CiHeart } from "react-icons/ci"
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";
import { LiaEyeSolid } from "react-icons/lia";

import { FaHeart } from "react-icons/fa";
import { useState } from 'react';
import { IoHeartOutline } from "react-icons/io5";
import { HiHeart } from "react-icons/hi2";
import { CiShoppingCart } from "react-icons/ci";
import { BsHeart } from "react-icons/bs";


import { BsHeartFill } from "react-icons/bs";
import { useDispatch } from 'react-redux';
import { useContextModal } from '../../context/contextModel';
import ModalCart from './ModalCart';
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { addItem } from '../../slice/sliceCart';
import { useGetEvent } from '../../hooks/useGetEvent';
import Spinner from './Spinner';
import CountDown from './CountDown';
import CardProductEvent from './CardProductEvent';



function CardProductAll({product}) {
  const{handleModelCart,
  openModelCart} = useContextModal();
  
const {name, color, discountPrice, originalPrice,description,_id:id, stock,ratings,quantityReviews,images,weight,shop,
  reviews,slug, flavor,size,sold_out,category} =product



const{isLoading, data} =useGetEvent({shop})
const [showCart, setShowCart] = useState(false);
const[wishList,setWishList] = useState(false);
const[showSettings, setShowSettings] = useState(false);
const[textCart, setTextCart] = useState(false);
const[textView, setTextView] = useState(false);



const cart = localStorage.getItem("Cartitems");
  const dispatch = useDispatch();
      const [selectImage, setSelectImage] = useState(0);
      const [prodSize, setProdSize] =useState("");

       
    const navigate = useNavigate()
        


       
      
 

  function HandleAddItemCard(){

    

    if(category==="Smartphone"){

         const  newItem={
              productId:id,
                name,
                quantity:1,
                price:discountPrice,
                totalPrice:discountPrice*1,
                images,
                color,
                shop,
          
              }

              dispatch(addItemCard({newItem}))

      }

      
      if(category==="Roupas"){
     

  
          const newItem={
              productId:id,
                name,
                quantity:1,
                price:discountPrice,
                totalPrice:discountPrice*1,
                images,
                color,
                prodSize,
                shop,
          
              }

         

              dispatch(addItem({newItem}))
       
        
          }

          handleModelCart()


      





  }





 


  function handleTextCart(){
    setTextCart(!textCart)
  }


  if(isLoading){
    return <Spinner/>
  }


  return (
    <>
    

    <div>
      {(discountPrice >0 &&   data && data.events.status === "Running" ) ?
      <CardProductEvent  product={product} event = {data.events}/>

     




   
   
    : <div  onMouseEnter={()=>setShowSettings(!showSettings)} onMouseLeave={()=>setShowSettings(!showSettings)}    className='p-4 shadow-lg rounded-2xl hover:shadow-2xl  hover:bg-white bg-gray-50/90'>

    {
        openModelCart && <ModalCart data={product}/>
      }
      <div>

      </div>

    
      <div id="img-card  "  >
 
  <div className='relative ' ><img src={images[0].url}  className="w-full h-[170px]  object-contain"/>
  { showSettings && <div className='absolute   top-0 right-0 space-y-2  grid grid-rows-2 items-center justify-center '>
  {!wishList ? <div className='flex justify-center'><button onClick={()=>setWishList(!wishList)} ><BsHeart   className='text-lg hover:text-sky-500 text-gray-600'/></button></div>
  :<div><button   onClick={()=>setWishList(!wishList)} ><BsHeartFill   className={`text-lg text-gray-950`}/></button></div>}


  <div className='flex justify-center'  onMouseEnter={handleTextCart} onMouseLeave={handleTextCart}>

  <button  ><CiShoppingCart onClick={HandleAddItemCard} className='text-2xl text-gray-600 hover:text-sky-500'/></button>
  </div>
 
 
 
 </div>
 } 
 </div>




</div>


<Link  to={`../detailsProduct/${id}`}>
<div id="car_prod_info flex justify-center  ">
<p className=' font-semibold text-black  '> kz {discountPrice} <span className='text-gray-500 line-through'>kz {originalPrice}</span> </p>
<p className='text-sm text-green-600  '> Restam {stock} unidades</p>
<p className=' text-sm truncate  '><span className='font-semibold' >{name} </span> / <span > {description} </span></p>



<span className='space-x-2'><MdOutlineStarPurple500 className='text-yellow-500 inline text-xl'/>{ratings}/{quantityReviews} comentários </span>

</div> 









 <div className='flex justify-center items-center gap-2 mt-1  hover:text-sky-400   rounded-md py-2 text-sm text-white '>

{//<button>  Adicionar ao carrinho</button>
}
</div>
</Link>

     
         
    </div>
}</div></>
    
  )
}

export default CardProductAll