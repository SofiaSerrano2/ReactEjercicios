import React from "react";

class Buscador extends React.Component{
    render(){
        return(
            <div className="container_buscador">
                <img src={this.props.rutaImg}/>
                <input/>
            </div>
        )
    }
} 

export default Buscador;