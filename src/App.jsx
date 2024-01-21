import "./App.css";
import Navbar from "./components/Navbar";
import ProductDetail from "./components/ProductDetail";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
import Searchitem from "./components/Searchitem";
import Cart from "./components/Cart";
import { items } from "./components/Data";
import { useState } from "react";
 const App =()=> {
  const [ data ,setData] = useState([...items])
  const [cart , setCart] = useState([])
  return (
    <>
      
        <Navbar cart={cart}setData={setData}/>
        <Routes>
        <Route path="/" element={<Products cart={cart} setCart={setCart} items={data}/>}/>
        <Route path="/products/:id" element={<ProductDetail/>}/>
        <Route path="/search/:term" element={<Searchitem/>} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
      </Routes>
    </>
  );
}

export default App;
