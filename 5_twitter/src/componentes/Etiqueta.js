import React from "react";

class Etiquetas extends React.Component{
    render(){
        return(
            <ul>{
                    this.props.etiquetaList.map(etiqueta => <a href="#" className="etiqueta">#{etiqueta.name}</a>)
                }
            </ul>
        )
    }
}

export default Etiquetas; 