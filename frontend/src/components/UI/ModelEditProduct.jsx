import React from 'react'
import { useContextModal } from '../../context/contextModel';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';
import { useParams } from 'react-router-dom';
import { UseUpdateProduct } from '../../hooks/useUpdateProduct';
import FormEditProduct from '../Shop/products/formEditProducts';
import { useGetproduct } from '../../hooks/useGetproduct';
import Spinner from './Spinner';


function ModelEditProduct() {

  const id = useParams();
  const{isLoading:isGetingProduct, data } = useGetproduct({id});



  if(isGetingProduct){
    return <Spinner/>
  }
   
    


  return (
    <div className="fixed top-0  left-0 w-[100%] h-[100vh]
    backdrop-contrast-[90%] bg-black/50 z-10 transition-all duration-[0.5]    shadow-md">
        <div className="fixed top-[50%] h-[90%] rounded-xl  left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-100 px-[3.2rem] py-[4rem]
    transition-all duration-1000 overflow-auto ">
      
       <FormEditProduct product={data.product} />
           
            

        </div>
       
        
    </div>

    



  )
}

export default ModelEditProduct