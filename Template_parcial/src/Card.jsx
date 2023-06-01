import React from "react";

const Card = ({nick}) => {
    
    return (<div>
     <h3>TERRENEITOR CREADO CON EXITO!</h3>
     <h4>NICK DEL TERRENEITOR: {nick.nombrePersonaje}</h4> 
     <h4>RAZA DEL TERRENEITOR: {nick.raza}</h4>  
    </div>
    )
}

export default Card;