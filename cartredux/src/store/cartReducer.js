import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showCart:false,
    totalQuantity:0,
    cart:[],
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        toggleCart(state){
           
          state.showCart=!state.showCart
        },

        addItem(state,action){
            const index = state.cart.findIndex(cart => cart.id === action.payload.id);
            
             if(index===-1)
             {
                state.cart.push({...action.payload,quantity:1})
                
             }
             else{
              const cartitem=state.cart[index]
              cartitem.quantity=cartitem.quantity+1
              console.log(JSON.stringify(cartitem))
              state.cart[index]=cartitem
             }
             state.totalQuantity=state.totalQuantity+1

        },
        removeItem(state,action){
            const index = state.cart.findIndex(cart => cart.id === action.payload.id);
            const cartitem=state.cart[index]
            console.log(JSON.stringify(cartitem))
            if(cartitem.quantity>1)
            {
                cartitem.quantity=cartitem.quantity-1
                state.cart[index]=cartitem
            }
            else
            {
                const filtercart=state.cart.filter((cart)=> cart.id!==action.payload.id)
                state.cart=filtercart
            }
           state.totalQuantity=state.totalQuantity-1
        },
       

    }
})

export const {toggleCart,addItem,removeItem}= cartSlice.actions; 
export default cartSlice.reducer