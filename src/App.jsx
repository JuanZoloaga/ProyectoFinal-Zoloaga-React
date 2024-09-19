import './App.css'
import NavBarComponente from './assets/componentes/NavBarComponente'
import ItemListContainer from './assets/componentes/ItemListContainer';


function App() {

  return (
    <>
      <header>
      <NavBarComponente/>
      </header>
      <ItemListContainer titulo='Bienvenidos a Dietetica Curcuma'/>
    </>
  )
}

export default App
