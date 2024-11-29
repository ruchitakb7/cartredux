import { createSlice } from "@reduxjs/toolkit";

const initialState={
    showCart:false,
    cart:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        toggleCart(state){
           
          state.showCart=!state.showCart
        }

    }
})

export const {toggleCart}= cartSlice.actions; 
export default cartSlice.reducer