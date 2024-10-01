/* eslint-disable react/prop-types */
import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProductosDietetica } from '../../asyncMock.js';
import ProductCard from './Productcard.jsx';
import { getCategoria } from '../../asyncMock.js';
import {Link} from 'react-router-dom'
import ButtonsFilter from './ButtonsFilter.jsx';


export default function ItemListContainer () {

    const [Datos , setDatos] = useState([])

    useEffect(()=>{
        getProductosDietetica.then((data) => setDatos(data));
},[])

    const categoriasFilt = [...new Set (Datos.map((val) => val.categoria))]


    const [products, setProducts] = useState([]);

    useEffect(()=>{
    getProductosDietetica.then((data) => setProducts(data));
},[])

const handleClick = (categoria) => {

    if(categoria == ""){
        getProductosDietetica.then((data) => setProducts(data));
    }else
    setProducts(getCategoria(categoria));

}



    
    return(
        <>  
        <section className='botones'>
            {categoriasFilt.map((categoria) =>(<ButtonsFilter key={categoria} handleClick={handleClick} categoria={categoria} />
                ))}
            <button onClick={() => handleClick("")} ><Link to={`/category/:id`}>Todas</Link></button>
        </section> 

        <section className='displayCards'>
            {products.map((producto) =>(<ProductCard key={producto.id} producto={producto} />
            ))}
        </section>
        </>
    );
    
    }

