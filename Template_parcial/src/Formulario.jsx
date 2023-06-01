import { useState } from "react";
import Card from './Card'


const Formulario = () => {


    const [nick, setNick] = useState ({
        nombrePersonaje: '',
        raza: ''
    })

    const [verCard, setVerCard] = useState (false)
    const [error, setError] = useState (false)

    const onSubmit = (e) => {
        e.preventDefault()


        if ((nick.nombrePersonaje.trim()).length >=3 && (nick.raza.trim()).length >=6 ){
            setVerCard(true)
            setError(false)
        }else{
            setVerCard(false) 
            setError(true)
        }

    }

    return (<div> 
        <form onSubmit={onSubmit}>
             
             <input type="text" placeholder="Ingresa tu nick" onChange={(e) => setNick({...nick, nombrePersonaje: e.target.value})} />
            

             <input type="text" placeholder="Ingresa tu raza" onChange={(e) => setNick({...nick, raza: e.target.value})} />

             <button type="submit"> Crear </button>

             </form>

             {error && 'Por favor chequea que la informacion sea correcta'}

             {verCard && <Card nick={nick}/>}
        </div>
    )
}

export default Formulario