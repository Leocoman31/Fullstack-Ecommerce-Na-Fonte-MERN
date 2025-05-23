import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className='text-center flex flex-col items-center justify-center h-screen  '>
        <h1 className='text-[4rem]'>404</h1>
        <h3 className='text-[2rem]'>Página não encontrada</h3>
        <Link to="/" className='text-sky-500'>Voltar a pagina inicial</Link>
    </div>
  )
}

export default NotFoundPage