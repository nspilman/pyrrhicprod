import React, { Component } from 'react';
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"

class Loading extends Component{
    render(){
    
    return(
        <div style = {this.props.styleObj.loading}>
        <div className = "pulse p-3">
        <img src ={pyrrhicLogo} style ={this.props.styleObj.loading.logo} />
        <br/>
        <h4 className = 'text-light text-center'>  Loading...</h4>
        </div>
        </div>
        )
}
}

export default Loading