/* eslint-disable react/prop-types */
import {Link} from 'react-router-dom';

export default function ProductCard ({producto} ){
    return(
        <>
            <div className='card'>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre}></img>
            <p>$ {producto.precio}</p>
            <section className='botones'>
            <button><Link to={`/item/${producto.id}`}>Detalles</Link></button>
            </section>
            </div>
        </>
    )

}