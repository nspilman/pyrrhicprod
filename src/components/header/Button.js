import React, { Component } from 'react';

class Button extends Component {
    render(){
        // console.log(this.props.selected)
        const selected = this.props.select === this.props.window ? "button selectedButton": "button"
        return (
            <button className = {selected} style = {this.props.styleObj} onClick = {()=>{this.props.updateWindow(this.props.select)}}>
                {this.props.choice}
            </button>
        )
    }
}

export default Button