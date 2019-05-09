import React, { Component } from 'react';
import pyrrhicLogo from "../../../src/img/loading/pyrrhicLoading.jpg"
import MetaTags from 'react-meta-tags';
import {Consumer} from '../../App';
import styled from 'styled-components';
import loadingscreenVideo from "../../video/loading/loading_screen_video.mp4"

const StyledLoading = styled.div`
backgroundColor:black;
height:100vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
`

export default function Loading(props){
    return(
        <StyledLoading>
            <img src = {pyrrhicLogo} style ={{width:"100%"}}></img>
        {/* <video width="80%" height="auto" autoPlay>
            <source src="https://github.com/nspilman/pyrrhicprod/blob/master/src/video/loading/loading_screen_video.mp4?raw=true" type="video/mp4"/>
        </video> */}
            </StyledLoading>
        )
}
