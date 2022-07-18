import React from "react";
//busque como hacer form con react por la parte del input y ver como manerjar el estado pero con las clases
class Buscador extends React.Component{
    render(){
        return(
            <label class=" relative block w-96 h-8">
                <span class="sr-only bg-slate-200">Search</span>
                <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                    <img className="h-3 w-3 fill-slate-300" src={this.props.rutaImg}/>
                </span>
                <input class="bg-slate-200 mb-px  placeholder:italic placeholder:text-slate-400 block  w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Busca un twitter..." type="text" name="search"/>
            </label>
        )
    }
} 

export default Buscador;

/**<div className="flex items-center w-96 h-8 bg-slate-200 rounded-3xl">
                <img className="w-4 h-4 ml-6 mr-2" src={this.props.rutaImg}/>
                <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                <input className="w-15 h-6" placeholder={this.props.texto}/>
            </div> */