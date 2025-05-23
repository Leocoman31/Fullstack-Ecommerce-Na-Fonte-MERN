import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { getCart, getTotalCartPrice, getTotalCartQuantity } from '../slice/sliceCart';
import { useIsAuthenticadUser } from '../hooks/useIsAuthenticadUser';
import Spinner from '../components/UI/Spinner';
import toast from 'react-hot-toast';
import { processPayment } from '../services/apifeatures';
import { useAddOrder } from '../hooks/useAddOrder';
import { useQueryClient } from '@tanstack/react-query';

function OrderInfo() {
    const{isLoading,data:dataUser} = useIsAuthenticadUser();
    const{addOrder,isLoading:iscreatingOrder} = useAddOrder();
    const[name, setName]=useState("");
    const[phone,setPhone]=useState("");
    const[address,setAddress]=useState("");
    const[city,setCity]=useState("");
    const[paymentMethod,setPaymentMethod] = useState("");
    const[converter,setConverter]=useState(0)

    const {register,handleSubmit}=useForm();
    const cartItens =useSelector(getCart);
    const cartTotalPrice =useSelector(getTotalCartPrice)
    const cartQuantity = useSelector(getTotalCartQuantity)
    const queryClient = useQueryClient();


    if(isLoading){
        return <Spinner/>
    }





    function personalData(e){

        e.preventDefault();
      if(dataUser){
        setName(dataUser.user.name);
        setPhone(dataUser.user.phoneNumber)

      }
       
 
   
    }

    function handlePersonalAddress(e){

        e.preventDefault();
      if(dataUser){
        setAddress(dataUser.user.addresses.address1);
        setcity(dataUser.user.addresses.city);
       

      }
       
 
   
    }


    const getRates = async () => {
      // fetch the data from API
      const response = await fetch(
        "https://v6.exchangerate-api.com/v6/ad66ae64f291c14f85680dea/latest/USD"
      ).then((response) => response.json());
  
      // save the rates in the state
      if (response.result === "success") {
        setConverter(response.conversion_rates);
     
      }
    };


   async function  handlePaymentProcess(e){    
    e.preventDefault()
    
   const link = await processPayment({cartItens}); 

     window.location.href = link.url;
     await handleOrder();



   

  
   
      

    }



    async function  handleOrder (){
        


        const order={
          orderItems:cartItens,
          shoppingInfo: {
            address: address,
            city:city,
            phoneNo:phone,

    
          },
          paymentMethod:paymentMethod,
           itemsPrice:cartTotalPrice,
            deliveryPrice:1500,
            totalAmount:cartTotalPrice + 1500,
            user:dataUser.user._id,
       
            
       
            
        };



        addOrder({...order},{onSuccess:()=>{
        
          queryClient.invalidateQueries({queryKey:["orders"]});
          localStorage.clear();
      
     
          
        },
        onError:()=>{
          toast.success("Não é possivel fazer encomenda no momento, tente mais tarde!");
    

      }}
        
      );
    }


  return (
    <div>

   
    <form className='mx-16 my-8' onSubmit={handlePaymentProcess}>
    <div className='  grid grid-cols-2 gap-x-8  '>

    <div id='personalDate 'className='space-y-4 text-gray-700 border border-sky-500 p-8'>
        <h1 className='text-xl text-gray-900 '>1. Informações de compra</h1>

<div id='controllerLastName ' >
  <label for="name" >Nome Completo</label>
  <div>
  <input type='text' value={name} name="name" required onChange={((e)=>setName(e.target.value))} className='w-[100%] bg-gray-200 px-4 py-2' />
  </div>
 
</div>




<div>



<div id='controllerTelephone '>
  <label >Número de Telefone</label>
  <div className='flex gap-x-2'>
  <input type='telephone' value="+244"   className='   w-[15%] bg-gray-200 px-2 py-1 ' />
  <input type='telephone' name="phone" value={phone}  required onChange={((e)=>setPhone(e.target.value))} className='w-[100%] px-4 bg-gray-200 py-2' />
 </div>
 
</div>

</div>

<div className='flex justify-end'>
<button className='hover:text-sky-500 text-[12px] text-gray-400'  onClick={personalData}>Usar dados pessoais ? </button>
</div>



<div id="adress" >
    <div id="controllerAdress" className='space-y-4'>
    <label>Pais</label>
<div>
<input type='text' name="country" value="Angola" disabled  className='w-[100%] px-4  bg-gray-200 py-2' />
</div>
    <label>Cidade</label>
<div>
<input type='text' name="city" value={city}  required onChange={((e)=>setCity(e.target.value))} className='w-[100%] px-4  bg-gray-200 py-2' />
</div>
   
    <label>Rua</label>
    <div>
    <input type='text' name="address" value={address}  required onChange={((e)=>setAddress(e.target.value))} className='w-[100%] px-4  bg-gray-200 py-2' />
    </div>
  

    </div>
    <div className='flex justify-end'>
    <button className='hover:text-sky-500 text-[12px] text-gray-400 mt-4'  onClick={handlePersonalAddress}>Usar endereço ? </button>
    </div>
   


</div>

</div>


<div id='your_order' className='border border-sky-500 text-gray-700 p-4 space-y-4' >
<h1 className='text-xl text-gray-900 '>2. Sua encomenda</h1>

<div>
                <div className=' p-8 space-y-4 bg-gray-200  text-gray-700'>
                   
                 
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
                   

                </div>
                
            </div>

            <div  id='paymentMehotod'>
    <div className='bg-gray-200  p-4 rounded-lg'>
<h1 className='text-lg '>Metodos de pagamento</h1>
    
<div >
<input type='radio'id="paymentMehotod" name="paymentMethod" value="REF" onChange={(e)=>setPaymentMethod(e.target.value)}/>
<label for="paymentMehotod" > Referênçias Bancarias</label>
</div>

    <div>
    <input type='radio'id="paymentMehotod" name="paymentMethod" value="GPO" onChange={(e)=>setPaymentMethod(e.target.value)}/>
    <label for="paymentMehotod" > Multicaixa Express</label>
    </div>
    
    <div>
    <input type='radio'id="paymentMehotod" name="paymentMethod" value="UMM" onChange={(e)=>setPaymentMethod(e.target.value)}/>
    <label for="paymentMehotod" > Money App </label>
    </div>
    
    <div>
    <input type='radio'id="paymentMehotod" name="paymentMethod" value="card" onChange={(e)=>setPaymentMethod(e.target.value)}/>
    <label for="paymentMehotod" > Visa/Mastercard </label>
    </div>
    </div>
    



    

</div>

<div className='bg-sky-500 text-black my-4 px-4 py-2 hover:text-sky-500  text-center '>
                        <button type='submit'  >Fazer pagamento</button>
               
                    </div>



</div>




    </div>
 



 
   




   

  






 </form>



    </div>
   
   

  
 
  )
}

export default OrderInfo