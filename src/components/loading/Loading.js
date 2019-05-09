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
        <video width="80%" height="auto" autoPlay>
            <source src={loadingscreenVideo} type="video/mp4"/>
        </video>
            </StyledLoading>
        )
}
