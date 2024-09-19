/* eslint-disable react/prop-types */
import '../componentes/NavBarComponente.css';
import LogoComponente from './LogoComponente';
import CartWidget from './CartWidget';
import SloganComponente from './SloganComponente';

export default function NavBarComponente ( ){
    return(
        <>
        <nav className='navbar'>
            <div className='logotipo'>
                <LogoComponente/>
            </div>
            <div className='navbarTitulos'>
                <button>Producto</button>
                <button>Sucursal</button>
                <button>Nosotrosos</button>
            </div>
                <CartWidget/>
        </nav>
        <SloganComponente texto='Comer saludable es un arte que se aprende.'></SloganComponente>
        </>
    );

} 

