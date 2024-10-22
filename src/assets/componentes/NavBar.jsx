/* eslint-disable react/prop-types */
import LogoComponente from './LogoComponente';
import CartWidget from './CartWidget';
import SloganComponente from './SloganComponente';
import {Link} from 'react-router-dom'


export default function NavBarComponente () {


    return(
        <>
            <nav className='navbar'>
                <div className='logotipo'>
                    <LogoComponente/>
                </div>
                <div className='navbarTitulos'>
                    <button><Link to={`/category/Premezcla`}>Premezcla</Link></button>
                    <button ><Link to={`/category/Merienda`}>Merienda</Link></button>
                    <button ><Link to={`/category/Snack`}>Snack</Link></button>
                </div>
                    <CartWidget/>
            </nav>
            <SloganComponente texto='Comer saludable es un arte que se aprende.'></SloganComponente>
        </>
    );

} 

