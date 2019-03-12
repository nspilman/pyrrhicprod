import React, { Component } from 'react';

class Button extends Component {
    render(){
        // console.log(this.props.selected)
        const {category, id, selected} = this.props
        const buttonClass = selected === id ? "selectedButton button stencilLight": "button stencilLight"
        return (
            <button className = {buttonClass}>
             {/* style = {this.props.styleObj.Vidmain.Button}> */}
               {category.toUpperCase()}
            </button>
        )
    }
}

export default Button