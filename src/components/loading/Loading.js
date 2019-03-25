import React, { Component } from 'react';
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"
import MetaTags from 'react-meta-tags';

class Loading extends Component{
    render(){
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
        <React.Fragment>
            <MetaTags>
            <meta property="og:image" content={metaImageUrl}/>
            </MetaTags>
        <div style = {this.props.styleObj.loading}>
        <div className = "pulse p-3">
        <img src ={pyrrhicLogo} style ={this.props.styleObj.loading.logo} />
        <br/>
        <h4 className = 'text-light text-center'>  Loading...</h4>
        </div>
        </div>
        </React.Fragment>
        )
}
}

export default Loading