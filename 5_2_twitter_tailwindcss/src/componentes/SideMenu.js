import React from "react";
import { ReactDOM } from "react";

class SideVar extends React.Component{
    render(){
        return(
            <div className={this.props.clase}>
                {/**Hago que le pase*/}
                <ul>
                    {
                        this.props.pagList.map(pag => 
                        <li className={pag.clase}> 
                            <i className={pag.icon}></i>{pag.nombre}
                        </li>
                        )
                    }
                </ul>
            </div>
        )
    }
} 

export default SideVar;