import React from 'react'
import { useContextModal } from '../../context/contextModel';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';


function ModelConfirmDeleteProduct({id}) {
     const{deleteShow,handleDeleteConfirm}=useContextModal();

     
      const{data:deleteProduct, isLoading:isdeleting} =useDeleteProduct({id});

function handledeleteProduct (){

  deleteProduct({id},{onSuccess:()=>{
    handleDeleteConfirm();
  }})


}
    


  return (
    <div className="fixed backdrop-contrast-[90%] top-0 left-0 w-[100%] h-[100vh] z-[1000] transition-all duration-[0.5]"
    >
        
     
    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-white   px-[3.2rem] py-[4rem]
    transition-all duration-1000" >

        <div className='flex flex-col justify-center'>
            <h1>Caro Administrar, deseja eliminar essa loja?</h1>
           
            <div className='flex justify-center gap-2 py-2'>
            <button className='bg-sky-700 hover:bg-sky-900 hover text-white px-4 p-2 ' onClick={handledeleteProduct}>Sim</button>
            <button className='bg-red-700 hover:bg-red-900 hover text-white px-4 p-2'  onClick={()=>handleDeleteConfirm()}>Não</button>
            </div>
           
            </div>
           
            

        </div>
       
        
    </div>

    



  )
}

export default ModelConfirmDeleteProduct