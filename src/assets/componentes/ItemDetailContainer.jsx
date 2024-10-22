import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import {ObtenerProd} from "./firebase/firebase.js"
import { CartContext } from "./context/CartContext.jsx";
import Swal from 'sweetalert2'

export default function ItemDetailContainer() {

    const [producto, setProducto]=useState({});

    const { id } = useParams();

    useEffect(()=>{
        ObtenerProd(id).then(resp=> setProducto(resp))
    }, []);



    const [contador, setContador] = useState(1);

    const handleClickSuma = () => {
        setContador(contador + 1)
    };

    const handleClickResta = () => {
        if (contador>1) {
            setContador(contador - 1)
        }
    };
    

    const [,,agregarProd]= useContext(CartContext)


    const handleSubmit = () =>{
        agregarProd(producto, contador, id)
        // agregarProd(producto,contador)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Su selección ha sido añadida al carrito",
            showConfirmButton: false,
            timer: 1000
        });
    }


    return(
        <>
            <section className="displayCardDetail">
            <div key={producto.id} className='cardDetail'>
            <h3>{producto.nombre}</h3>
            <img src={producto.imagen} alt={producto.nombre}></img>
            <p>$ {producto.precio}</p>
            <p>{producto.descripcion}</p>
            <section className="contador">
            <button onClick={handleClickSuma}>+</button>
            <p>{contador}</p>
            <button onClick={handleClickResta}>-</button>
            </section>
            <button className="comprar" onClick={handleSubmit}>COMPRAR</button>
            </div>
            </section>
        </>
    )

}
