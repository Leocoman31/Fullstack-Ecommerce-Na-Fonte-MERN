
import CardProductAll from '../UI/CardProductAll'



function  ListAllProducts({products}) {

  


 
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2  md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        
        {
            products.data.map((product) =>  <div className='  rounded-lg '><CardProductAll key={product._id} product={product}/>
            
       
            
          </div>
          )
        }
       
    </div>
  )
}

export default ListAllProducts