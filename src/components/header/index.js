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
const StyledImageWrapper = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
`

export default function Header(props){
    // const socialMediaImageStyle = this.context.version === "desktop" ? this.props.styleObj.SocialMediaIcons : this.props.styleObj.SocialMediaIcons.mobile
    const Link = props.link
    return( 
        <Consumer>
        {context =>
            <div id="header" className='row'>
                <StyledImageWrapper className = 'logo col-sm-2'>
                    </StyledImageWrapper>
                <StyledImageWrapper className = 'vidProdJC col-sm-8'>
                    <div className = "headerImgWrapper" style={{width:"100%"}}>
                    <Link to="/">
                        <img src={urbanLogo} style={{width:"100%"}} alt="site identity" />
                    </Link>
                
                    </div>
                        {/* <img className="p-1 img-fluid" src={visionOnScreen} style = {context.style.Header.image}/>      */}
                </StyledImageWrapper>
                <StyledImageWrapper className = 'links col-sm text-center mt-2'>
                    <a href="https://www.instagram.com/pyrrhicproductions/" target="_blank" className = "text-white">
                        <Socialmedia className = "fa fa-instagram fa-4x favicon-link"></Socialmedia>
                    </a>
                    <a href="https://www.facebook.com/pyrrhicproductions" target="_blank" className = "text-white">
                        <Socialmedia className = "fa fa-facebook fa-4x favicon-link"></Socialmedia>
                      </a>
                </StyledImageWrapper>
            </div>
            }
      </Consumer>
      
        )

        
}
