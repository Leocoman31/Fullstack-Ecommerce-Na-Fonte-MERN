import React from 'react'

function Event({event}) {
  return (
  <div className=' mx-16 grid grid-row gap-2 bg-white '>
     <div className='grid grid-cols-5  justify-between items-center  '>
     <div  id='id_user' className='p-4'  > {event._id}
       
       </div>
       <div id='name' className=' p-4'   > {event.name}
       
       </div>
       <div id='start' className=' p-4'  > {event.start_Date}
       
       </div>

       <div id='end' className=' p-4'  > {event.Finish_Date}
       
       </div>

       <div id='end' className=' p-4'  > {event.status}
       
       </div>
 
       <div className="flex gap-4 items-end">
         {//<VscSettings/>
         //<MdOutlineDelete/>
}
        
 
 
       </div>
     
 
         </div>
     </div>
  )
}

export default Event