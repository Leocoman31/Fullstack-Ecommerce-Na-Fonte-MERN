import React from 'react'

import Spinner from '../../components/UI/Spinner';
import { useGetAllWitdraw } from '../../hooks/useGetAllWitdraw';

function WitdrawsAdmin() {

const {data, isLoading} = useGetAllWitdraw();

if(isLoading){
    return <Spinner/>
}


  return (
    <div>
        
    </div>
  )
}

export default WitdrawsAdmin