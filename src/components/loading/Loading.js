import React, { Component } from 'react';
import pyrrhicLogo from "../../../src/img/loading/pyrrhicLoading.jpg"
import MetaTags from 'react-meta-tags';
import {Consumer} from '../../App';

export default function Loading(props){
    const urlPath = window.location.pathname.split('/')
    console.log(urlPath)
    var metaImage
    if(urlPath[1] ===""){
        metaImage = "LTJ8zMo-mus"
    }
    if (urlPath.length > 2){
        metaImage = urlPath[2]
    }
    const metaImageUrl = `https://img.youtube.com/vi/${metaImage}/sddefault.jpg`
    return(
        <Consumer>
            {state => 
        <React.Fragment>
            <MetaTags>
            <meta property="og:image:type" content="image/jpeg" /> 
            <meta property="og:image:secure_url" content={metaImageUrl}/>
            </MetaTags>
        <div style = {state.style.loading}>
        <div className = "pulse p-3">
        <img src ={pyrrhicLogo} style = {{width:'100%'}}/> 
        {/* style ={state.style.loading.logo} /> */}
        {/* <br/> */}
        {/* <h4 className = 'text-light text-center'>  Loading...</h4> */}
        </div>
        </div>
        </React.Fragment>
        }
        </Consumer>
        )
}
