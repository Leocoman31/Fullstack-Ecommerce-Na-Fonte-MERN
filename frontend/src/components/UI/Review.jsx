import React from 'react'
import { IoMdStar } from "react-icons/io";

function Review({itemReview}) {
 
  return (
    <div className='text-gray-700'>
    <div className='flex flex-row justify-between'>
    <div id='review-content ' className='p-6 flex flex-row  gap-4'>
        <div className=' my-2'>
          <img src={itemReview.user.photo.url} className='rounded-full object-cover h-[50px] w-[50px] border-2 border-sky-500' />
                            

        </div>

          <div className='text-sm truncate'>
          <span className='font-bold'>{itemReview.user.name}</span> <span> - {itemReview.createdAt}</span>
              <h1 className='truncate'>
             {itemReview.review}
                            
               </h1>

               <div className='flex gap-4 my-4 '>
               {
                itemReview.imagesReviews.map((item) =><div>
                  <img key={item.public_id} src={item.url} className='rounded-md w-[100px] h-[100px] '/>
                </div> )

}

               </div>
              


              </div>

              
 
                          

                        </div>
                        <div  className='text-sm flex  justify-center items-center'>
                ({itemReview.rating})
                <IoMdStar color='orange'/> 
</div>
                       
                </div>

<hr/>

</div>

  )
}

export default Review