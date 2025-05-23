import React from 'react'
import { useGetAllNotificationsUser } from '../../hooks/useGetAllNotificationsUser'
import Spinner from '../../components/UI/Spinner'

function Notifications() {
 const{isLoading:isgetingNotifications, data:notificationsUser} =useGetAllNotificationsUser()

 if(isgetingNotifications){
    return <Spinner/>
 }


  return (
    <div className='m-16'>
<h1 className='text-[1rem]'>Notificações</h1>
         <div className="space-y-4">
                       {notificationsUser.notification.map(item => <div key={item._id}> 
                        {item.status ==="Não Lida" ? <div className='bg-yellow-400/5 p-8 ' ><p className="text-sm ">{item.message}</p>
                        <div className='flex justify-end text-sm '><button className='px-2 py-1 bg-gray-950  text-gray-200'>Marcar como lida</button></div></div>

                        : 
                        <div><p className="text-sm text-gray-500 ">{item.message}</p>
                        <p className='px-2 py-1 bg-gray-950  text-gray-200'>Lida</p></div>

}

                        </div>)
                        }
        
                    </div>


    </div>
  )
}

export default Notifications