import React from 'react'
import { BsBox2 } from "react-icons/bs";
import { RiSecurePaymentFill } from "react-icons/ri";
import { MdOutlineLocalOffer } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function CardUsSlider() {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 3 // optional, default to 1.
        }
      };
     
  return (
    <div>
       <Carousel responsive={responsive}
           infinite={true}
           autoPlay={true}
           autoPlaySpeed={3000}
           arrows={false}>



    <div className='mx-2  bg-[url(https://res.cloudinary.com/dib1opete/image/upload/v1746173120/sl1_jqr25s.jpg)] bg-cover w-[95%] h-full   no-bg-no-repeat '  >  
    
    <div className='text-black text-center pt-[60%] pb-4  '>
      <div className='bg-gray-50/40 mx-16 rounded-xl p-4'>
      <h1 className='text-xl font-semibold '>Entrega gratuita</h1>
      <p> Para compras superior a 100.000 kzs</p>
      </div>
                   
                </div> 
      </div>
    <div className='mx-2 bg-[url(https://res.cloudinary.com/dib1opete/image/upload/v1746173121/sl3_lul6dg.jpg)] bg-cover w-[95%] h-full  no-bg-no-repeat '>
    <div className='text-black text-center pt-[60%] pb-4  '>
      <div className='bg-gray-50/40 mx-16 rounded-xl p-4'>
      <h1 className='text-xl font-semibold '>Ofertas diárias </h1>
      <p>Discontos até 70% OFF</p>
      </div>
                   
                </div> 
    
    
    </div>
    <div className='mx-2  bg-[url(https://res.cloudinary.com/dib1opete/image/upload/v1746173121/sl2_jqsbry.jpg)] bg-cover w-[95%] h-full  no-bg-no-repeat'> 
    <div className='text-black text-center pt-[60%] pb-4  '>
      <div className=' bg-gray-50/40 mx-16 rounded-xl p-4'>
      <h1 className='text-xl font-semibold '>Suporte dedicado 24/7 </h1>
      <p>A qualquer momento & em qualquer lugar</p>
      </div>
                   
                </div>
    </div>
    <div className='mx-2 bg-[url(https://res.cloudinary.com/dib1opete/image/upload/v1746173120/sl4_okoyua.jpg)] bg-cover w-[95%] h-full  no-bg-no-repeat'>
    <div className='text-black text-center pt-[60%] pb-4  '>
      <div className=' bg-gray-50/40 mx-16 rounded-xl p-4'>

      <h1 className='text-xl font-semibold '>Pagamento 100% seguro</h1>
      <p>Segurança garantida do seu pagamento</p>
      </div>
                   
                </div></div>       
       
        
          
      </Carousel>
    </div>
  )
}

export default CardUsSlider