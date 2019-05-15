import React from 'react';
import styled from 'styled-components';

const OfflineStyled = styled.div`
height:100vh;
display:flex;
align-items:center;
justify-content:center;
`

const Overlay = styled.a`
position:absolute;
width:100vh;
height:100vh;
z-index:1;
display:flex;
align-items:center;
justify-content:center;
font-size:5em;
color:white;
:hover{
    color:white;
}
`

export default function Offline(props){
        return(
        <OfflineStyled>
                <Overlay href = "https://www.youtube.com/channel/UCqH2KGNE_4priKwqljxDiYA" target="_blank">
                {/* <a  style={{width:'100%'}}> */}
                    <p className="fa fa-play"></p>
                {/* </a> */}
                </Overlay>
                     <img src="https://img.youtube.com/vi/LTJ8zMo-mus/sddefault.jpg"></img>
          
        </OfflineStyled>
        )
    }
