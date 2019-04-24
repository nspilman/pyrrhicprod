import React from 'react';
import { Consumer } from '../../App';
// import {pyrrhicContext} from '../../App';

export default function Button(props){
        // console.log(this.props.selected)
        const selected = props.select === props.window ? "button cocoGoose selectedMenuButton": "button cocoGoose"
        return (
            <Consumer>
                {context =>
            <button className = {selected}
             style = {context.style.Vidmain.Button} 
             onClick = {()=>{props.updateWindow(props.select)}}>
                {props.choice} 
            </button>
                }
            </Consumer>
        )
    }

