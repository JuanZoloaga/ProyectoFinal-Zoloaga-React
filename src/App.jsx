import './App.css'
import LogoComponente from './assets/componentes/LogoComponente'
import NavBarComponente from './assets/componentes/NavBarComponente'
import CartWidget from './assets/componentes/CartWidget'
import ItemListContainer from './assets/componentes/ItemListContainer';
import SloganComponente from './assets/componentes/SloganComponente';


function App() {

  return (
    <>
      <header>
      <nav className='navbar'>
      <div className='logotipo'>
      <LogoComponente></LogoComponente>
      </div>
      <div className='navbarTitulos'>
          < NavBarComponente texto='Productos' />
          < NavBarComponente texto="Sucursal" />
          < NavBarComponente texto="Nosotros" />
      </div>
      <CartWidget></CartWidget>
      </nav>
      <div className='textoslogan'>
      <SloganComponente texto='Comer saludable es un arte que se aprende.'></SloganComponente>
      </div>
      </header>
      <ItemListContainer titulo='Bienvenidos a Dietetica Curcuma'/>
    </>
  )
}

export default App
