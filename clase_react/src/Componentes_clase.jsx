import { render } from "react-dom"
import React from "react";

class Saludos extends React.Component{
    render(){
        return <h1>Hola,{this.props.nombre}</h1>
    }
}

export default Saludos;