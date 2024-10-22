/* eslint-disable no-undef */
import './App.css'
import NavBar from './assets/componentes/NavBar'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './assets/componentes/ItemListContainer';
import ItemDetailContainer from './assets/componentes/ItemDetailContainer';
import Checkout from './assets/componentes/Checkout'
import { CartProvider } from './assets/componentes/context/CartContext';


function App() {

  return (
    <>
          
    <CartProvider>
    <BrowserRouter>
      <header>
      <NavBar/>
      </header>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}></Route>
      <Route exact path='/category/:categoria' element={<ItemListContainer/>}></Route>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}></Route>
      <Route exact path='/cart' element={<Checkout/>}></Route>
    </Routes>
    </BrowserRouter>
    </CartProvider>
    </>
    
  )
}

export default App
