import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../store/cartReducer"

const Store=configureStore({
    reducer:{
        cart:cartReducer,

    }
})

export default Store