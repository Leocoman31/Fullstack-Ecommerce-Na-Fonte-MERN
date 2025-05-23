import React, { useState } from 'react'
import Review from './Review'

export default function ListReview({reviews}) {
  const [moreReview, setMoreReview] = useState(false)
  return (
    
    <div>

      {moreReview ? (<div>{reviews.map(itemReview => <Review id={itemReview._id} itemReview={itemReview}/> )} 
      <div className='flex justify-end mt-4'>
        <button onClick={()=>setMoreReview(!moreReview)} className='bg-gray-800 px-8 py-1 text-white '>Menos comentários</button>

      </div>
      
      </div>
      )
      :(
       
        <div>{reviews.slice(0,3).map(itemReview => <Review id={itemReview._id} itemReview={itemReview}/> )}
        
         <div className='flex justify-end mt-4'>
        <button onClick={()=>setMoreReview(!moreReview)} className='bg-gray-800 text-white px-8 py-1 '>Mais comentários</button>

      </div>
      </div>
        

      )
    }


    <div className='flex gap-2'>
      {


      }
      </div>



      
    
      </div>
  )
}
