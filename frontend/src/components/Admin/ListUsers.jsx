import React from 'react'
import User from './User';

function ListUsers({listUsers}) {
 
  return (
    <div className=' mb-8 '>
        {listUsers.map(user => <User user={user} key={user._id}/>)}
    </div>
  )
}

export default ListUsers