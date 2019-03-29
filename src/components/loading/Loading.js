import React, { Component } from 'react';
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"
import MetaTags from 'react-meta-tags';
import {pyrrhicContext} from '../../App';

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
        <pyrrhicContext.Consumer>
            {state => 
        <React.Fragment>
            <MetaTags>
            <meta property="og:image:type" content="image/jpeg" /> 
            <meta property="og:image:secure_url" content={metaImageUrl}/>
            </MetaTags>
        <div style = {state.style.loading}>
        <div className = "pulse p-3">
        <img src ={pyrrhicLogo} style ={state.style.loading.logo} />
        <br/>
        <h4 className = 'text-light text-center'>  Loading...</h4>
        </div>
        </div>
        </React.Fragment>
        }
        </pyrrhicContext.Consumer>
        )
}
