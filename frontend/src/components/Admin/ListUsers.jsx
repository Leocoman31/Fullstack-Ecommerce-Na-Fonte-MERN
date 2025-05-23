import React from 'react'
import User from './User';

function ListUsers({listUsers}) {
 
  return (
    <div className='h-screen overflow-auto mb-8'>
        {listUsers.users.map(user => <User user={user} key={user._id}/>)}
    </div>
  )
}

export default ListUsers