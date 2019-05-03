import React from 'react';
// import {pyrrhicContext} from '../../App';
import styled from 'styled-components';

const StyledButton = styled.button`
color:white;
background-color:black;
width:100%;
border-radius:.7em;
font-family: cocogoose;
min-height: "min-content";
`
export default function Button(props){
        // console.log(this.props.selected)
        const selected = props.select === props.window ? "button selectedMenuButton": "button"
        return (
            <StyledButton className = {selected}
            //  style = {context.style.Vidmain.Button} 
             onClick = {()=>{props.updateWindow(props.select)}}>
                {props.choice} 
            </StyledButton>
        )
    }

