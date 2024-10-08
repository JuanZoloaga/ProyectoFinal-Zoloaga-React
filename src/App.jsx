/* eslint-disable no-undef */
import './App.css'
import NavBarComponente from './assets/componentes/NavBarComponente'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './assets/componentes/ItemListContainer';
import ItemDetailContainer from './assets/componentes/ItemDetailContainer';
import { useState } from 'react';


function App() {

  const [categoria, setCategoria] = useState("");

  const enviarCategoria= (categoria) =>{
    setCategoria(categoria)
  }



  return (
    <>
    <BrowserRouter>
      <header>
      <NavBarComponente enviarCategoria={enviarCategoria}/>
      </header>
    <Routes>
      <Route exact path='/' element={<ItemListContainer categoria={categoria}/>}></Route>
      <Route exact path='/category/:id' element={<ItemListContainer categoria={categoria} ></ItemListContainer>}></Route>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
    </>

    
  )
}

export default App
