/* eslint-disable react/prop-types */
import '../componentes/NavBarComponente.css';

export default function NavBarComponente ( {texto} ){
    return(
        <>
        <li className='nav'><a href='../index.html'>{texto}</a></li>
        </>
    );

} 

