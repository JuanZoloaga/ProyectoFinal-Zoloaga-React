import { useParams } from "react-router-dom";
import { getProducto } from "../../asyncMock.js";
import { useEffect, useState } from "react";

export default function ItemDetailContainer() {

    const [producto, setProducto]=useState({});

    const { id } = useParams();

    useEffect(()=>{
        setProducto(getProducto(id));
        
    }, []);


    return(
        <>
            <section className="displayCardDetail">
            <div className='cardDetail'>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre}></img>
            <p>$ {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <button>COMPRAR</button>
            </div>
            </section>
        </>
    )

}
