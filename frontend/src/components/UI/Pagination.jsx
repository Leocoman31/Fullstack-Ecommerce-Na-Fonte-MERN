import React from 'react'
import {Link} from 'react-router-dom'

function Pagination({itemPerPage, totalItem,handleCurrentPage}) {


    const numberPage = []
    for(let i=1; i<=Math.ceil(totalItem/itemPerPage); i++){
        numberPage.push(i)
    }
  return (
    <div>
        <nav>
        <ul className='flex gap-2 justify-center'>
          
            {
        numberPage.map(page => <li key={page}>
            <Link onClick={() =>handleCurrentPage(page)} className='bg-white border border-sky-500 text-sm py-2 px-3 rounded-lg'>{page}</Link>
        </li> )


            }
        </ul>
           
        </nav>
    </div>
  )
}

export default Pagination