import React from "react";

class Header extends React.Component { 
    render(){
        return(
            <div className="mb-5">
                <img src={this.props.rutaImg} className={this.props.clase}/>
            </div>
        )
    }
}

export default Header;