/* eslint-disable react/prop-types */
import logo from '../componentes/img/Logocompleto.png'
import './LogoComponente.css'
import {Link} from 'react-router-dom'

export default function LogoComponente({enviarCategoria2}) {

    const handleClick = (categoria) => {
        enviarCategoria2(categoria)
    }
    return(
        <a href="" ><Link to={`./`}><img src={logo} className='logo' onClick={()=>{handleClick("")}}></img></Link></a>
    ) 

}
