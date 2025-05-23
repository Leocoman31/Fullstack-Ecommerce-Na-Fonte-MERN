import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { MdOutlineStarPurple500 } from "react-icons/md";




function CardProduct({product}) {

    const {name, discountPrice, originalPrice,description,_id:id, stock,ratings,quantityReviews,images} =product
    const [showCart, setShowCart] = useState(false);
 
 
    return (


   
    <div    className='p-4 shadow-lg rounded-2xl hover:shadow-2xl bg-white'>
      <Link  onMouseEnter={() =>setShowCart(true)} onMouseLeave={() =>setShowCart(false)} to={`detailsProduct/${id}`}>
      <div id="img-card  "  >
 
 <div ><img src={images[0].url}  className="w-full h-[170px] object-contain"/> </div>
 <div className='absolute   top-[50%] right-0 space-y-4  '>
  <button className='block'><CiHeart   className='text-2xl text-gray-600'/></button>
 <button><LiaEyeSolid  className='text-2xl text-gray-600'/></button>
 </div>



</div>



<div id="car_prod_info flex justify-center  ">
<p className=' font-semibold text-black  '> kz {discountPrice} <span className='text-gray-500 line-through'>kz {originalPrice}</span> </p>
<p className='text-sm text-green-600  '> Restam {stock} unidades</p>
<p className=' text-sm truncate  '><span className='font-semibold' >{name} </span> / <span > {description} </span></p>



<span className='space-x-2'><MdOutlineStarPurple500 className='text-yellow-500 inline text-xl'/>{ratings}/{quantityReviews} comentários </span>

</div> 

</Link>

     
         
    </div>
    
  )
}

export default CardProduct