/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ProductCard from './ProductCard.jsx';
import { ObtenerProds, FiltroProds } from './firebase/firebase.js';
import ReactLoading from 'react-loading';

export default function ItemListContainer () {

    const { categoria } = useParams();

    const [products, setProducts] = useState(null)

    const [isLoading, setLoading] = useState(true)


    useEffect( ()=> {
        if(categoria == null){
                ObtenerProds().then(resp=> setProducts(resp)) 
            }else{
                FiltroProds(categoria).then(resp=> setProducts(resp))
            }
    }, [categoria]);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setLoading(false)
        },2000)
    })
    
    return(
        <>
        {isLoading ? <ReactLoading type="cylon" color="#5b3013" height={667} width={375} /> : 
        <section className='displayCards'>
        {products && products.map((producto) =>(<ProductCard key={producto.id} producto={producto} />
        ))}
        </section>  }
        </>
    );
    
    }

