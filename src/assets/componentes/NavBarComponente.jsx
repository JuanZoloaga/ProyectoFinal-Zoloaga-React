/* eslint-disable react/prop-types */
import '../componentes/NavBarComponente.css';
import LogoComponente from './LogoComponente';
import CartWidget from './CartWidget';
import SloganComponente from './SloganComponente';
import {Link} from 'react-router-dom'


export default function NavBarComponente ({enviarCategoria}) {


    const handleClick = (categoria) => {
        enviarCategoria(categoria)
    }

    const enviarCategoria2= (categoria) =>{
        enviarCategoria(categoria)
    }


    return(
        <>
            <nav className='navbar'>
                <div className='logotipo'>
                    <LogoComponente enviarCategoria2={enviarCategoria2}/>
                </div>
                <div className='navbarTitulos'>
                    <button onClick={()=>{handleClick("Premezcla")}}><Link to={`./category/premezcla`}>Premezcla</Link></button>
                    <button onClick={()=>{handleClick("Merienda")}}><Link to={`./category/merienda`}>Merienda</Link></button>
                    <button onClick={()=>{handleClick("Snack")}}><Link to={`./category/snack`}>Snack</Link></button>
                </div>
                    <CartWidget/>
            </nav>
            <SloganComponente texto='Comer saludable es un arte que se aprende.'></SloganComponente>
        </>
    );

} 

