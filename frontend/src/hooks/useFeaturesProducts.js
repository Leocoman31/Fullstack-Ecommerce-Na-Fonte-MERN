import React from 'react'
import { useQuery } from '@tanstack/react-query';
import { featuresProducts } from '../services/apiFeatures';

export function useFeaturesProducts() {
    const {isLoading, data,error}=useQuery({
        queryKey:['products-features'],
        queryFn:featuresProducts,
      }); 

      
     



      return {isLoading,data,error}
}

