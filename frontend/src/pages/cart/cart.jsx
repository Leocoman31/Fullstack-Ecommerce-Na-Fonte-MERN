import React from 'react'
import { useSelector } from 'react-redux'
import { getCart, getTotalCartPrice, getTotalCartQuantity } from '../../slice/sliceCart'
import CartListItens from '../../components/Cart/CartListItens';
import { useIsAuthenticadUser } from '../../hooks/useIsAuthenticadUser';
import Spinner from '../../components/UI/Spinner';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useContextModal } from '../../context/contextModel';

function Cart() {
const cartItens =useSelector(getCart);
const cartQuantity = useSelector(getTotalCartQuantity)
const cartTotalPrice = useSelector(getTotalCartPrice)
const {isLoading, data} =useIsAuthenticadUser();
const navigate = useNavigate();
const {openAuth,handleAuthModel} = useContextModal();







function handleClearCart(){

}

function handleNext(){
if(data){
    navigate('../orderInfo')

}

else{
    toast.error("Caro usúario faça o login/cadastro para continuar")
    handleAuthModel();

}


}


/*if(isLoading){
    return<Spinner/>

}*/



  return (
    <div className='text-gray-800 min-h-screen  m-16 '>
       
        <div className='grid grid-cols-4  gap-x-16 '>
            <div className='col-span-3 relative'>

            <div className='flex justify-between'>
            {cartQuantity>1 ?( <h1 className='text-lg mx-16 font-semibold'>{cartQuantity} itens no carrinho</h1>):
           (
            <h1 className='text-lg font-semibold mx-16 '>{cartQuantity} item no carrinho</h1>

           )
           
        }

        <button onClick={handleClearCart} className='   hover:text-sky-500  rounded-lg text-gray-950 px-4 py-1   '> Eliminar Carrinho</button>

            </div>

                <CartListItens list={cartItens}/>
            </div>

            <div  className='sticky top-4  '>
                <div className='bg-white p-8 border border-sky-500  space-y-4 rounded-2xl text-gray-700'>
                   
                 
                    <div className='flex justify-between'>
                    {cartQuantity>1 ?( <h1 className='font-semibold '>{cartQuantity} itens </h1>):
           (
            <h1 className='font-semibold '>{cartQuantity} item </h1>

           )
        }
        <p className='text-gray-600'>kz {cartTotalPrice}</p>
                    </div>

            <div>
                {cartItens.map(item =><div className='flex justify-between text-sm text-gray-500' key={item.productId} > 
                    <p>{item.name} x {item.quantity}</p>
                    <p>{item.totalPrice}</p>
                </div>)}
           

            </div>


            <div className='flex justify-between'>
                <p className=' text-gray-950 '>Entrega</p>
                <p  className=' text-gray-950 '> Kz 1500</p>

            </div>

            <div className='flex justify-between font-bold'>
                <p className=' text-sky-500 '>Total</p>
                <p  className=' text-sky-500'> Kz {cartTotalPrice}</p>

            </div>
                    <div className='   text-black px-4 py-4 hover:text-sky-500 rounded-md text-center text-lg '>
                        <button onClick={handleNext} >Continuar</button>
               
                    </div>

                </div>
                
            </div>

        </div>

    
        
    </div>
  )
}

export default Cart