import React, { useState } from 'react'
import { UseUpdatMyPassword } from '../../hooks/useUpdatMyPassword';

function PasswordAdmin() {
    const [password, setPassword] = useState("");
      const [passwordCurrent, setPasswordCurrent] = useState("");
      const[passwordConfirm,setPasswordConfirm] = useState("");
      const {isLoading:isupdatingPassword, updatePassword} = UseUpdatMyPassword();


      const handlePassword =(e)=>{
        e.preventDefault();
        
        updatePassword({passwordCurrent, password,passwordConfirm}, {onSuccess:()=>{
          setPassword("");
          setPasswordCurrent("");
          setPasswordConfirm("")
        }})

      }

  return (
    <div className='flex justify-center'>
   

       <form onSubmit={handlePassword}  aria-required={true} className='w-[500px] mt-8'> 
        <div className=" w-[100%] 800px:w-[50%]">

        <label className="block pb-1">Password Antiga</label>
                  <input
                    type="password"
                    className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                    required
                    value={passwordCurrent}
                    onChange={(e) => setPasswordCurrent(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-1">Password atual</label>
                  <input
                    type="password"
                    className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div className=" w-[100%] 800px:w-[50%]">
                  <label className="block pb-1">Confirmar password</label>
                  <input
                    type="password"
                    className='w-[95%]  border px-4 py-2  border-sky-500 rounded-xl  mb-1 800px:mb-0'
                    required
                    value={passwordConfirm}
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </div>


                <div>
                <button 
                className={` px-4 py-2 bg-gray-950 text-center text-gray-100 rounded-[3px] mt-4`}>
                    Alterar Password
              </button>
                </div>
              

        </form>
      
                 
    </div>
  )
}

export default PasswordAdmin