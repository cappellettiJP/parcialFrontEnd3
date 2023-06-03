import { useState } from "react";

const Form = (props) => {
    const [nombre, setNombre] = useState("")
    const [numero, setNumero] = useState("")
    const [mensajeError, setmensajeError] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        

        if (nombre.trim().length < 3) {
            setmensajeError("Por favor chequea que la información sea correcta")
        } else if (numero <= 6 || isNaN(numero))  {
            setmensajeError("Debe ingresar un numero igual o mayor a 6")
        } else {
            props.onSubmit({nombre, numero})
            setNombre("")
            setNumero("")
            setmensajeError("")
        }
        }
        return (
            <div>
                <h2>Formulario</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Nombre:
                        <input 
                        type="text"
                        value={nombre}
                        onChange={(event) => setNombre(event.target.value)}
                        />
                    </label>
                    <br/>
                    <label>
                        Numero favorito:
                        <input
                        type="number"
                        value={numero}
                        onChange={(event) => setNumero(event.target.value)}
                        />
                    </label>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
                {mensajeError && <p>{mensajeError}</p>}
            </div>
        )
    }
export default Form