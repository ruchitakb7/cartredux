import { configureStore} from "@reduxjs/toolkit";
import cartReducer from "../store/cartReducer"
import uiReducer from "../store/ui-slice"

const Store=configureStore({
    reducer:{
        cart:cartReducer,
        ui:uiReducer,

    }
})

export default Store