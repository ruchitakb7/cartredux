import { createSlice } from "@reduxjs/toolkit";

const initialState={
    Isvisible:false,
    cart:[]
}

const cartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        toggleCart(state){
           
          state.Isvisible=!state.Isvisible
        }

    }
})

export const {toggleCart}= cartSlice.actions; 
export default cartSlice.reducer