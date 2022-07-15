import React from "react";

class Header extends React.Component { 
    render(){
        return(
            <div>
                <img src={this.props.rutaImg} className={this.props.clase}/>
            </div>
        )
    }
}

export default Header;