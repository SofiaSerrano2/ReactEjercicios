import React from "react";

class Etiquetas extends React.Component{
    render(){
        return(
            <ul className="w-5/6 mt-5  flex justify-center flex-wrap gap-3">{
                    this.props.etiquetaList.map(etiqueta => <a href="#" className="text-neutral-400	 no-underline	text-sm	hover:text-slate-500 hover:underline	">#{etiqueta.name}</a>)
                }
            </ul>
        )
    }
}

export default Etiquetas; 