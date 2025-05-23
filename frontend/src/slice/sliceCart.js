
import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';
const initialState={
    cart: localStorage.getItem("Cartitems") ? JSON.parse(localStorage.getItem("Cartitems")): [],
    //cartTotalAmout:localStorage.getItem("CartTotalAmout") ? Number(localStorage.getItem("CartTotalAmout")): 0,
    //cartTotalQuantity:localStorage.getItem("QtdItemsCart") ? localStorage.getItem("QtdItemsCart"):0,
    shoppingInfo:{}
    
};

const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addItem(state,action){
            const {newItem} = action.payload;
     

            const indexItem = state.cart.findIndex(el => el.productId === newItem.productId)
         
            const size = state.cart.findIndex(el => ((el.productId === newItem.productId) && (el.prodSize !== newItem.prodSize))) 
        
          
       
            
           if (indexItem>=0 && size<0 ) {
            
             state.cart[indexItem].quantity =newItem.quantity;
             state.cart[indexItem].totalPrice =newItem.quantity*newItem.price;

              localStorage.setItem("Cartitems",JSON.stringify(state.cart));
               
           } else {
                state.cart.push(newItem);
               
                
               }

              // state.cartTotalQuantity = ;
               //state.cartTotalAmout=state.cartTotalAmout + newItem.totalPrice;
               localStorage.setItem("Cartitems",JSON.stringify(state.cart));
              // localStorage.setItem("QtdItemsCart",JSON.stringify(state.cartTotalQuantity));
              // localStorage.setItem("CartTotalAmout",JSON.stringify(state.cartTotalAmout));
             
               


       
    },
        deleteItem(state,action){
            state.cart = state.cart.filter(item =>item.productId!==action.payload.productId)
            localStorage.setItem("Cartitems",JSON.stringify(state.cart))
            toast.success("Item removido do carrinho")

        },
        increaseItemQuantity(state,action){

         
        
            const indexItem =state.cart.findIndex(item =>item.productId ===action.payload.productId)
            state.cart[indexItem].quantity += 1;
            state.cart[indexItem].totalPrice = action.payload.price * state.cart[indexItem].quantity 
            localStorage.setItem("Cartitems",JSON.stringify(state.cart))
           // state.cart[indexItem].totalPrice =;
           // itemCard.totalPrice =item.quantity*item.unitPrice;

        },
        decreaseItemQuantity(state,action){
            const indexItem =state.cart.findIndex(item =>item.productId ===action.payload.productId)
            if( state.cart[indexItem].quantity>1){
                state.cart[indexItem].quantity -= 1;
            state.cart[indexItem].totalPrice = action.payload.price * state.cart[indexItem].quantity 

            }

            else if(state.cart[indexItem].quantity===1){
                state.cart = state.cart.filter(item =>item.productId!==action.payload.productId)
                toast.success("Item removido do carrinho")

            }
            
            localStorage.setItem("Cartitems",JSON.stringify(state.cart))
           // state.cart.totalPrice =item.quantity*item.unitPrice;
        },
        clearCart(state){
            state.cart =[];

        }

    }

});

export const {addItem,deleteItem,increaseItemQuantity,decreaseItemQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>state.cart.cart.length;
 

export const getTotalCartPrice = (state) => state.cart.cart.reduce((sum, item) => sum + item.totalPrice,0);

export const getItemCart=(id) => (state) => state.cart.cart.find((item) => item.productId === id)?.quantity ?? 0;
    



  

  
