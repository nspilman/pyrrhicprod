import React from 'react';
import { pyrrhicContext } from '../../App';
// import {pyrrhicContext} from '../../App';

export default function Button(props){
        // console.log(this.props.selected)
        const selected = props.select === props.window ? "button selectedButton": "button"
        return (
            <pyrrhicContext.Consumer>
                {context =>
            <button className = {selected}
             style = {context.style.Vidmain.Button} 
             onClick = {()=>{props.updateWindow(props.select)}}>
                {props.choice}
            </button>
                }
            </pyrrhicContext.Consumer>
        )
    }

