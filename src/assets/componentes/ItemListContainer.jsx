/* eslint-disable react/prop-types */
import './ItemListContainer.css'
import { useEffect, useState } from 'react';
import { getProductosDietetica } from '../../asyncMock.js';
import ProductCard from './Productcard.jsx';
import { getCategoria } from '../../asyncMock.js';


export default function ItemListContainer ({categoria}) {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
    if(categoria == ""){
        getProductosDietetica.then((data) => setProducts(data));
    }else
    setProducts(getCategoria(categoria));
},[categoria])


    
    return(
        <>  
        <section className='displayCards'>
            {products.map((producto) =>(<ProductCard key={producto.id} producto={producto} />
            ))}
        </section>
        </>
    );
    
    }

