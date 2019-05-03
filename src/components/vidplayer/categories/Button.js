import React, { Component } from 'react';
import styled from 'styled-components';


const StyledButton = styled.button`
border:0px;
font-size: 2vw;
font-family:stencilThin;
cursor: pointer;
background-color: black;
color:white;
transition: 350ms;
padding:.2em;
margin-bottom: 1em;
border-radius: 25px 25px 0 0;
@media (max-width: 768px){
    font-size:4vw;
}
:hover{
    background-color:rgb(219, 219, 219);
    color:black;
}
`

const StyledSelectedButton = styled(StyledButton)`
border-bottom:.2em solid rgb(219, 219, 219); 
`

class Button extends Component {
    render(){
        // console.log(this.props.selected)
        const {category, id, selected} = this.props
        return selected === id ?
             (
                <StyledSelectedButton className = "px-3">
                  {category}
               </StyledSelectedButton>
            ):(
            <StyledButton className = "px-3">
               {category}
            </StyledButton>
        )
    }
}

export default Button