/* eslint-disable no-undef */
import { createContext } from "react";
import { useState } from "react";

export const CartContext =createContext(false);

// eslint-disable-next-line react/prop-types
export function CartProvider({children}){

    const[cart , setCart] = useState([]);


    const agregarProd = (producto, contador,id) => {
        producto.cantidad = contador

        producto.id = id

        const buscarProd = cart.some(prod => prod.nombre === producto.nombre)
        if (buscarProd) {
            const actualizarProds = cart.map(prod=>{
                if(prod.nombre === producto.nombre){
                    prod.cantidad = prod.cantidad + producto.cantidad
                    return prod
                }else{
                    return prod
                }
            })
            setCart([...actualizarProds])
        }else{
            setCart([...cart, {...producto, cantidad: contador}]);
        }
    }



    return(
    <CartContext.Provider value={[cart, setCart, agregarProd]}>
        {children}
    </CartContext.Provider>)
}
