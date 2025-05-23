import React from 'react'
import CardProductEvent from '../UI/CardProductEvent'
import CardProductAll from '../UI/CardProductAll'
import CountDown from '../UI/CountDown';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { FcAlarmClock } from "react-icons/fc";
import CountDownBAnner from '../UI/CountDownBAnner';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 3 // optional, default to 1.
  }
}



 

function ListEventProducts({ eventsList}) {




    return (

      <div className=' grid grid-cols-3  bg-linear-to-r from-orange-300 to-pink-500 rounded-xl   ngap-4'>
        <div className='col-span-2'>
        <Carousel responsive={responsive}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={3000}
           arrows={false}
         
          
           >
              {eventsList.events.map(event => <div  key={event._id}>
              <div>

                <div>
         
                  <div className=' text-center text-white space-y-2  '>

<h1 className='text-[5rem] font-bold '>{event.name}</h1>
<p className='text-[4rem]'>  <span className=' text-gray-950'>{event.discount}%  de desconto </span></p>
<div className='flex gap-4 justify-center items-center '>
  <FcAlarmClock size={80}/>
<CountDownBAnner data={event}/> 
</div>
<button  className='text-lg text-gray-200 hover:text-white px-4 rounded-lg bg-linear-to-r from-orange-500 to-pink-500 py-1.5 ' >Ver productos </button>
  </div>
                </div>

               

               

              </div>
              
            </div>)}

                
                
                
            
            </Carousel></div> 


          <div>
            <img src='https://res.cloudinary.com/dib1opete/image/upload/v1745027162/Premium_Photo___African_woman_shopping_bag_and_smile_in_studio_idea_or_thinking_with_sale_deal_or_discount_by_pink_background_Young_gen_z_girl_happy_and_gift_for_fashion_commerce_or_retail_customer_experience-fotor_x3ndh3.png'/>
          </div>


      </div>
       
          
              
      
          
               
 
          )

}

export default ListEventProducts