/* eslint-disable react/prop-types */
import '../componentes/NavBarComponente.css';
import LogoComponente from './LogoComponente';
import CartWidget from './CartWidget';
import SloganComponente from './SloganComponente';
import {Link} from 'react-router-dom'


export default function NavBarComponente (){

    return(
        <>
            <nav className='navbar'>
                <div className='logotipo'>
                    <LogoComponente/>
                </div>
                <div className='navbarTitulos'>
                    <button className='categ'><Link to={`./category/:id`}>Productos</Link></button>
                    <button>Sucursal</button>
                    <button>Nosotros</button>
                </div>
                    <CartWidget/>
            </nav>
            <SloganComponente texto='Comer saludable es un arte que se aprende.'></SloganComponente>
        </>
    );

} 

