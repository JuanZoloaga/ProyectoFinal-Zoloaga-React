/* eslint-disable no-undef */
/* eslint-disable react/jsx-key */
import { CartContext } from "./context/CartContext.jsx";
import { useContext , useEffect, useState} from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import Form from './Form.jsx';
import {enviarOrdenes} from './firebase/firebase.js';


export default function Checkout () {
    const [cart, setCart]= useContext(CartContext)

    const [mostrarInputs, setMostrarInputs] = useState(false)

    const [totalAPagar, setTotalAPagar] = useState([])

    useEffect(()=>{
        if (cart !== 0) {
            setTotalAPagar(cart.reduce((acc,curr)=>{
                return acc + curr.cantidad * curr.precio; 
                },0 ))
        } else {
            setTotalAPagar([])
        }
    },[cart])

    const handleClickDelete = (producto) =>{


        const buscarProd = cart.map(prod => prod.id === producto.id)
        if(buscarProd) {
                const actualizarProds = cart.filter((prod)=> prod.id !== producto.id)
                setCart([...actualizarProds])
            }
    }

    const handleClickSuma = (producto) => {
        const buscarProd = cart.map(prod => prod.id === producto.id)
        if(buscarProd) {
                const actualizarProds = cart.map(prod=>{
                    if(prod.id === producto.id){
                        prod.cantidad = prod.cantidad + 1
                        return prod
                    }else{
                        return prod
                    }
                })
                setCart([...actualizarProds])
            }else{
                setCart([...cart, {...producto}]);
            }

    };

    const handleClickResta = (producto) => {
        const buscarProd = cart.map(prod => prod.id === producto.id)
        if(buscarProd) {
                const actualizarProds = cart.map(prod=>{
                    if(prod.id === producto.id){
                        if (prod.cantidad > 1) {
                            prod.cantidad = prod.cantidad - 1
                            return prod
                        }else{
                            return prod
                        }
                    }
                    else{
                        return prod
                    }
                })
                setCart([...actualizarProds])
            }else{
                setCart([...cart, {...producto}]);
            }
        }
        

    const handleClickClearCart = () =>{

        Swal.fire({
            title: "Está por eliminar todo el carrito. Desea continuar?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar!"
            }).then((result) => {
                if (result.isConfirmed) {
                    setCart([])
                Swal.fire({
                    title: "Completado!",
                    text: "Tu producto ha sido eliminado.",
                    icon: "success"
                });
                }
            });
    }

    const [chequeo , setChequeo] = useState (false)

    const check = (chequeo) =>{
        setChequeo(chequeo)
    }

    const enviarEstado = (chequeo) =>{
        setChequeo(chequeo)
    }

    const [info , setInfo] = useState ({})

    const enviarInfo = (info) =>{
        setInfo(info)
    }

    const handleClickSubmitCompra = () =>{
        if(chequeo == false){
            Swal.fire({
                title: "Antes de hacer el pedido necesitaremos algunos datos.",
                showClass: {
                    popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                    `
                    },
                    hideClass: {
                    popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                    `
                    }
                });
        }else{
            const nuevaOrden = {
                comprador: info,
                fecha: new Date(),
                productos: cart,
                precioTotal: {totalAPagar},
                };
            
            enviarOrdenes(nuevaOrden).then((ref)=>{
                Swal.fire({
                    title: "Pedido realizado!",
                    text: `Su código de pedido es: ${ref}`,
                    icon: "success"
                });
            })
            setCart([])
        }
        setMostrarInputs(true)
    }

    return(
        <>
        <section className="checkout">
            {
                cart == "" ? <p className="carritoVacio">El carrito está vacío. Puede revisar los productos aquí: <button ><Link to={`/`}>Home</Link></button></p> 
                :   
                cart && cart.map((producto) =>
                <article className="productoCheckout" key={producto.id}>
                <img src={producto.imagen}></img>
                <h3>{producto.nombre}</h3>
                <p>${producto.precio}</p>
                <button className="botonesSUM-RES" onClick={()=>handleClickSuma(producto)}>+</button>
                <p>{producto.cantidad}</p>
                <button className="botonesSUM-RES" onClick={()=>handleClickResta(producto)}>-</button>
                <button className="botonTacho" id={producto.id} onClick={()=>handleClickDelete(producto)}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
                </svg></button>
                </article>)
            }
            {cart =="" ? <p></p>:
            <article className="total"><p>Total a pagar ${totalAPagar}</p>

            <section className={`${mostrarInputs ? "column" : "none"}`} >
            <Form validarEstado={check} enviarEstado={enviarEstado} enviarInfo={enviarInfo}/>
            </section>

            <section className="botonesComprayClear">
            <button className="botonLimpiarCarro" onClick={handleClickSubmitCompra}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708"/>
            </svg></button>
            <button className="botonLimpiarCarro" onClick={handleClickClearCart}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" viewBox="0 0 16 16">
            <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7.354 5.646 8.5 6.793l1.146-1.147a.5.5 0 0 1 .708.708L9.207 7.5l1.147 1.146a.5.5 0 0 1-.708.708L8.5 8.207 7.354 9.354a.5.5 0 1 1-.708-.708L7.793 7.5 6.646 6.354a.5.5 0 1 1 .708-.708"/>
            </svg></button>
            </section>
            </article>
            }

        </section>
        </>
    );
    
    }

