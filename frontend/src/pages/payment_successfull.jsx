import React from 'react'
import { Link } from 'react-router-dom'

function PaymentSuccessfull() {
  return (
    <div className='h-screen'>

      <div className='m-16'>
      <h1 className='text-lg'>Pagamento feito com sucesso</h1>
      <p>A sua encomenda esta  a processar, clique <Link className="text-sky-500">aqui</Link> para rastrear</p>

      </div>
     
    </div>
  )
}

export default PaymentSuccessfull