import './App.css'
import NavBarComponente from './assets/componentes/NavBarComponente'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemListContainer from './assets/componentes/ItemListContainer';
import ItemDetailContainer from './assets/componentes/ItemDetailContainer';


function App() {

  return (
    <>
    <BrowserRouter>
      <header>
      <NavBarComponente/>
      </header>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>}></Route>
      <Route exact path='/category/:id' element={<ItemListContainer/>}></Route>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
