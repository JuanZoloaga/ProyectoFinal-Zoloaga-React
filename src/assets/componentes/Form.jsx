/* eslint-disable react/prop-types */
import { useState } from "react"

export default function ValidacionForm ({ enviarEstado, enviarInfo}) {

    const [datosForm, setdatosForm] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        aemail: '',
    })

    const [chequeo , setChequeo] = useState(false)

    const[validar, setValidar] = useState(false)

    const [errores, setErrores] = useState ({})

    const handleForm = (e) =>{
        const{name, value} = e.target;
        setdatosForm({
            ...datosForm, [name] : value
        })
    }


    const handleSubmit = (e) =>{
        e.preventDefault()
        const validacionDeErrores = {}
        if(datosForm.nombre === ""){
            validacionDeErrores.nombre = "nombre es requerido"
        }

        if(!datosForm.apellido.trim()){
            validacionDeErrores.apellido = "apellido es requerido"
        }

        if(!datosForm.telefono.trim()){
            validacionDeErrores.telefono = "telefono es requerido"
        }

        if(!datosForm.email.trim()){
            validacionDeErrores.email = "email es requerido"
        }else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(datosForm.email)){
            validacionDeErrores.email = "email no es válido"
        }
        
        if(datosForm.email != datosForm.aemail){
            validacionDeErrores.aemail = "email no es igual"
        }

        setErrores(validacionDeErrores)

        if(Object.keys(validacionDeErrores).length === 0){            
            setChequeo(true)
            setValidar(true)
            enviarEstado(chequeo)
            enviarInfo(datosForm)
        }




    }
    enviarEstado(chequeo)
    if (chequeo) {
        enviarInfo(datosForm)
    }



    return(
        <>
            <form onSubmit={handleSubmit}>
            <div>
            <label>Ingrese su nombre:</label>
            <input type="text" name="nombre" onChange={handleForm} />
            {errores.nombre && <span className="error">{errores.nombre}</span>}
            </div>

            <div>
            <label>Ingrese su apellido:</label>
            <input type="text" name="apellido" onChange={handleForm}  />
            {errores.apellido && <span className="error">{errores.apellido}</span>}
            </div>

            <div>
            <label>Ingrese su teléfono:</label>
            <input type="number" name="telefono"onChange={handleForm} />
            {errores.telefono && <span className="error">{errores.telefono}</span>}
            </div>

            <div>
            <label>Ingrese su e-mail:</label>
            <input type="email" name="email" onChange={handleForm} />
            {errores.email && <span className="error">{errores.email}</span>}
            </div>

            <div>
            <label>Ingrese nuevamente su e-mail:</label>
            <input type="email" name="aemail"onChange={handleForm} />
            {errores.aemail && <span className="error">{errores.aemail}</span>}
            </div>

            <button type="submit" >Validar</button>
            
            </form>
            {validar ? <span className="">Listo para enviar tu solicitud de pedido!</span> : <span>Es necesario completar el formulario correctamente.</span>}
        </>
    )


}
