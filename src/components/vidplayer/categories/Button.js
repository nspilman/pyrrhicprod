import React, { Component } from 'react';


class Button extends Component {
    render(){
        // console.log(this.props.selected)
        const {category, id, selected} = this.props
        const buttonClass = selected === id ? "stencilThin headerButton px-3 selectedHeaderButton": "headerButton stencilThin px-3"
        return (
            <button className = {buttonClass}>
             {/* style = {this.props.styleObj.Vidmain.Button}> */}
               {category}
            </button>
        )
    }
}

export default Button