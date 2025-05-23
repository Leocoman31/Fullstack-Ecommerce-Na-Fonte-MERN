import { configureStore } from '@reduxjs/toolkit'
import CartReducer from '../slice/sliceCart' ;

export const store = configureStore({
    reducer: {
      cart: CartReducer,
    },
  })