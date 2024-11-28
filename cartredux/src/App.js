import React from "react"
import Cart from "./components/cart/cart";
import Header from "./components/layout/Header";
import {Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isVisible } from "@testing-library/user-event/dist/utils";

function App() {
  
   const Isvisible=useSelector((state)=>state.cart.Isvisible)
  return (
    
    <Routes>
      <Route path="/" element={<Header></Header>}></Route>
      
      { Isvisible && (
                <Route path="/cart" element={<Cart></Cart>}></Route>
      )}
      
    </Routes>
    
    
    
    
  );
}

export default App;
