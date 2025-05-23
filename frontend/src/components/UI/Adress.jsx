import React, { useState } from 'react'
import Spinner from './Spinner';
import { useGetMe } from '../../hooks/useGetMe';
import { UseUpdatMyAdress } from '../../hooks/useUpdatMyAdress';

function Adress() {

  const{isLoading, data, error} = useGetMe();
  const[address1, setAddress1]=useState(data!==undefined ? data.user.addresses.address1 :"")
  const[address2, setAddress2]=useState(data!==undefined ? data.user.addresses.address2 :"")
  const[city, setCity]=useState(data!==undefined ? data.user.addresses.city :"")
  const{isLoading:isUpdatingAdress, updateMyAdress}=UseUpdatMyAdress();



  function handleAdress(e){
    e.preventDefault();

    updateMyAdress({city,address1,address2});

  }
  if(isLoading){
    return<Spinner/>
  }
  return (
    <div>

<div className='flex justify-center'>
   

   <form onSubmit={handleAdress}  aria-required={true} className='w-[500px] mt-8'> 
    <div className=" w-[100%] 800px:w-[50%]">

    <label className="block pb-1">País</label>
              <input
                type="text"
                className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                required
                value={data.user.addresses.country}
                disabled
              />
            </div>

            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-1" for="city">Provincia</label>
              <select id='city' name='city' onChange={(e) =>setCity(e.target.value)} className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'>
              <option defaultValue={city}>{city}</option>
              <option value="Bengo" >Bengo</option>
              <option value="Benguela" >Benguela</option>
              <option value="Cabinda" >Cabinda</option>
              <option value="Cuando" >Cuando</option>
              <option value="Cubango" >Cubango</option>
              <option value="Cuanza Norte" >Cuanza Norte</option>
              <option value="Cuanza Sul" >Cuanza Sul</option>
              <option value="Cunene" >Cunene</option>
              <option value="Huambo" >Huambo</option>
              <option value="Huíla" >Huíla</option>
              <option value="Icolo e Bengo" >Icolo e Bengo</option>
              <option value="Luanda" >Luanda</option>
              <option value="Lunda Norte" >Lunda Norte</option>
              <option value="Lunda Sul" >Lunda Sul</option>
              <option value="Malanje" >Malanje</option>
              <option value="Moxico" >Moxico</option>
              <option value="Moxico Leste" >Moxico Leste</option>
              <option value="Namibe" >Namibe</option>
              <option value="Uíge" >Uíge</option>
              <option value="Zaire" >Zaire</option>
              <option value="Bié" >Bié</option>

              </select>
             
            </div>

            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-1">Endereço 1</label>
              <input
                type="text"
                className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                required
                value={address1}
                onChange={(e) => setAddress1(e.target.value)}
              />
            </div>

            <div className=" w-[100%] 800px:w-[50%]">
              <label className="block pb-1">Endereço 2</label>
              <input
                type="text"
                className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                value={address2}
                onChange={(e) => setAddress2(e.target.value)}
              />
            </div>


            <div>
            <button 
            className={` px-4 py-2 bg-gray-950 text-center text-gray-100 rounded-[3px] mt-4`}>
                Salvar
          </button>
            </div>
          

    </form>
  
             
</div>


    </div>
  )
}

export default Adress