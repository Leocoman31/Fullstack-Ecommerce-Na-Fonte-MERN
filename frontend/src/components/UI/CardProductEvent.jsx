
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiHeart } from "react-icons/ci";
import { LiaEyeSolid } from "react-icons/lia";
import { MdOutlineStarPurple500 } from "react-icons/md";
import CountDown from './CountDown';

function CardProductEvent({product,event}) {
    const {name, discountPrice, originalPrice,description,_id:id, stock,ratings,quantityReviews,images} =product
    const [showCart, setShowCart] = useState(false);

 
 
    return (


   
    <div className='p-4 shadow-lg rounded-2xl hover:shadow-2xl bg-white'>

        
      <div className='relative '>
      <span className=' text-[10px] font-semibold text-sky-100 absolute top-2 right-2   bg-gray-950 rounded-[50%] px-1 py-1.5'><span>{event.discount}%</span></span>
    

      </div>
      <Link  onMouseEnter={() =>setShowCart(true)} onMouseLeave={() =>setShowCart(false)} to={`detailsProduct/${id}`}>
      <div id="img-card  "  >
 
 <div ><img src={images[0].url}  className="w-full h-[170px] object-contain"/> </div>
 



</div>

<CountDown data={event} />


<div id="car_prod_info flex justify-center  ">
<p className=' font-semibold text-black  '> kz {discountPrice} <span className='text-gray-500 line-through'>kz {originalPrice}</span> </p>
<p className=' text-sm truncate  '><span className='font-semibold' >{name} </span> / <span > {description} </span></p>



<span className='space-x-2'><MdOutlineStarPurple500 className='text-yellow-500 inline text-xl'/>{ratings}/{quantityReviews} comentários </span>

</div> 




</Link>

     
         
    </div>
    )
}

export default CardProductEvent