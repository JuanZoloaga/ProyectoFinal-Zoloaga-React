import logo from '../componentes/img/Logocompleto.png'
import './LogoComponente.css'
import {Link} from 'react-router-dom'

export default function LogoComponente() {
    return(
        <a href="" ><Link to={`./`}><img src={logo} className='logo'></img></Link></a>
    ) 

}

