import React from 'react'
import { useSearchProducts } from '../../hooks/useSearchProducts'
import Spinner from '../UI/Spinner';
import { useParams } from 'react-router-dom';
import ListProductsSearch from '../../components/shopping/ListProductsSearch';

function SearchPrductsResults() {

    const keywo= useParams();
   


    const {isLoading:isGetingProductsSearch, data:productsSearch, error} = useSearchProducts({keywo});

    if(isGetingProductsSearch ){
        return <Spinner/>
    }

 
  
  return (
    <div className='mx-18 my-8'>
      <h1 className='text-xl'>Resultados da busca: {productsSearch.resultat}</h1>
        
           { <ListProductsSearch products={productsSearch}/>
}
        


    </div>
  )
}

export default SearchPrductsResults