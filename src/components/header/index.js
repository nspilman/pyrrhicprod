import React, { Component } from 'react';
import visionOnScreen from "../../../src/img/header/yourvisiononscreen.png"
import AOTHlogo from "../../../src/img/header/logo_gmail.png"
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"
import urbanLogo from "../../../src/img/header/pyrrhicurban.png"
import {Consumer} from "../../App";
import styled from 'styled-components';

const Socialmedia = styled.p`
    color:white;
    font-size:3em;
    margin-right:.2em;
    @media (max-width: 768px){
        color:white;
        font-size:1.5em;
        margin-right:.2em;
    }
`

export default function Header(props){
    // const socialMediaImageStyle = this.context.version === "desktop" ? this.props.styleObj.SocialMediaIcons : this.props.styleObj.SocialMediaIcons.mobile
    const Link = props.link
    return( 
        <Consumer>
        {context =>
            <div id="header" className='row'>
                <div className = 'logo col-sm-3'style = {context.style.Header.images}>
                    </div>
                <div className = 'vidProdJC col-sm-7'style = {context.style.Header.images}>
                    <div className = "headerImgWrapper">
                    <Link to="/">
                        <img src={urbanLogo} style={context.version === "desktop"? context.style.Header.image : context.style.Header.image.mobile} alt="site identity" />
                    </Link>
                
                    </div>
                        {/* <img className="p-1 img-fluid" src={visionOnScreen} style = {context.style.Header.image}/>      */}
                </div>
                <div className = 'links col-sm text-center mt-2' style = {context.version === "desktop" ? context.style.images : context.style.images}>
                    <a href="https://www.instagram.com/pyrrhicproductions/" target="_blank" className = "text-white">
                        <Socialmedia className = "fa fa-instagram fa-4x favicon-link"></Socialmedia>
                    </a>
                    <a href="https://www.facebook.com/pyrrhicproductions" target="_blank" className = "text-white">
                        <Socialmedia className = "fa fa-facebook fa-4x favicon-link"></Socialmedia>
                      </a>
                </div>
            </div>
            }
      </Consumer>
      
        )

        
}
