import React from "react";
//busque como hacer form con react por la parte del input y ver como manerjar el estado pero con las clases
class Buscador extends React.Component{
    render(){
        return(
            <div className="container_buscador">
                <img className="img_lupa" src={this.props.rutaImg}/>
                <input placeholder={this.props.texto}/>
            </div>
        )
    }
} 

export default Buscador;