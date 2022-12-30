import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home';
import Cart from './Cart';
import './App.css';
import { useState } from 'react';
function App() {
console.log("working")
  const [cart,setCart] = useState([]);

  return (
   <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Navbar/>}>
  <Route index element={<Home cart={cart} setCart={setCart} />}/>
<Route path="/Cart" element={<Cart cart={cart} setCart={setCart} />} />
</Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
