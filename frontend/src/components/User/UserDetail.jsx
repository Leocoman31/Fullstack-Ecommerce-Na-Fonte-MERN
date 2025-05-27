import React from 'react'
import { useContextModal } from '../../context/contextModel'

function UserDetail({user}) {



   
  return (
    <div>
    <div className='flex flex-col justify-center gap-2 items-center' > 
    {user.photo.length>0? <img src={user.photo[0].url} className='w-[80px] h-[80px] border border-sky-500 rounded-full'/>:
    <img src="https://res.cloudinary.com/dib1opete/image/upload/v1743264578/Mercado-Online/users/a3j2x7lnlcnr4e3sii4d.webp" className='w-[80px] h-[80px] border border-sky-500 rounded-full'/>
    }
     <p > <span className='font-semibold'>Nome: </span> {user.name} </p>
    <p > <span className='font-semibold'>Email: </span>{user.email}</p>
    {user.phoneNumber !==0 ?  <p > <span className='font-semibold'>Contacto: </span>{user.phoneNumber}</p>
    : <p> <span className='font-semibold'>Contacto: </span>sem contacto</p> }
   
    {user.addresses.length >0 ? <p > <span className='font-semibold'>Endereço: </span>{user.addresses.country},{user.addresses.city},{user.addresses.address1}</p>
    :
    <p> <span className='font-semibold'>Endereço: </span>Sem endereço</p> 

}
    <p> 
         <span className='font-semibold'>Tipo: </span> {user.role ==="user" && <span>Comprador</span>}{user.role ==="Seller" && <span>Vendedor</span>}{user.role ==="Admin" && <span>Administrador</span>}</p>
    </div>
    </div>
  )
}

export default UserDetail