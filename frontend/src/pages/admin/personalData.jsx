import React, { useState } from 'react'
import { useGetMe } from '../../hooks/useGetMe';
import { UseUpdatMyPhoto } from '../../hooks/useUpdatMyPhoto';
import {
    AiOutlineArrowRight,
    AiOutlineCamera,
    AiOutlineDelete,
  } from "react-icons/ai";
import Spinner from '../../components/UI/Spinner';

function PersonalDataAdmin() {

    
    const{isLoading, data, error} = useGetMe();
    const [name, setName] = useState(data!==undefined ? data.user.name :"" );
    const [email, setEmail] = useState(data!==undefined ? data.user.email:"");
    const{isLoading:isUpdatingPhoto, updateMyPhoto}=UseUpdatMyPhoto();
    
      const [photo, setPhoto] = useState(null);


      const  handleImage = async (e) => {
        
        const reader = new FileReader();
    
        reader.onload = () => {
          if (reader.readyState === 2) {
            setPhoto(reader.result);
            updateMyPhoto({photo:reader.result},{onSuccess:()=>{
              window.location.reload();


            }})
          }
        };
    
        reader.readAsDataURL(e.target.files[0]);
      };


      const handleSubmit = (e) => {
        e.preventDefault();
        updateInfo({name,email});
      };



    if(isLoading){
        return<Spinner/>
    }
  return (
    <div className='m-16 grid grid-cols-2 justify-center items-center '>
        
    
    
        <div className="flex justify-center w-full">
                <div className="relative">
                 {data.user.photo.url!=="" ?<img
                    src={`${data.user.photo.url}`}
                    className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-sky-500"
                    alt=""
                  />
                  :
                  <img
                    src="https://res.cloudinary.com/dib1opete/image/upload/v1743264578/Mercado-Online/users/a3j2x7lnlcnr4e3sii4d.webp"
                    className="w-[150px] h-[150px] rounded-full object-cover border-[3px] border-sky-500"
                    alt=""
                  />
                 }
                  <div className="w-[30px] h-[30px] bg-[#E3E9EE] hover:bg-sky-500 rounded-full flex items-center justify-center cursor-pointer absolute bottom-[10px] right-[5px]">
                    <input
                      type="file"
                      id="image"
                      className="hidden"
                      onChange={handleImage}
                    />
                    <label htmlFor="image">
                      <AiOutlineCamera />
                    </label>
                  </div>
               
                </div>
              </div>
            
              <div className="w-full px-5">
                <form onSubmit={handleSubmit} aria-required={true}>
                  <div className="w-full 800px:flex block pb-3">
                    <div className=" w-[100%] 800px:w-[50%]">
                      <label className="block pb-1">Nome Completo</label>
                      <input
                        type="text"
                        className='w-[70%] 800px:w-[95%] border px-4 py-2   border-sky-500 rounded-xl mb-4 800px:mb-0'
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className=" w-[100%] 800px:w-[50%]">
                      <label className="block pb-1">Email</label>
                      <input
                        type="text"
                        className='w-[70%] 800px:w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
    
                
                  <input
                    className={`w-[100px] h-[40px]  bg-gray-950 text-center text-gray-100 rounded-[3px] mt- cursor-pointer`}
                    required
                    value="Editar"
                    type="submit"
                  />
                </form>
              </div>
  
    </div>
  )
}

export default PersonalDataAdmin