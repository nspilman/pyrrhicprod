import React, { Component } from 'react';
import visionOnScreen from "../../../src/img/header/yourvisiononscreen.png"
import AOTHlogo from "../../../src/img/header/logo_gmail.png"
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"
import urbanLogo from "../../../src/img/header/pyrrhicurban.png"
import {pyrrhicContext} from "../../App";


export default function Header(props){
    // const socialMediaImageStyle = this.props.version === "desktop" ? this.props.styleObj.SocialMediaIcons : this.props.styleObj.SocialMediaIcons.mobile
    const Link = props.link
    return( 
        <pyrrhicContext.Consumer>
        {state =>
            <div id="header" className='row'>
                <div className = 'logo col-sm-3'style = {state.style.Header.images}>
                    <Link to="/">
                        <img src={urbanLogo} style={props.version === "desktop"? state.style.Header.image : state.style.Header.image.mobile} alt="site identity" />
                    </Link>
                </div>
                <div className = 'vidProdJC col-sm-7'style = {state.style.Header.images}>
                    <div className = "headerImgWrapper">
                        <div style = {{position:"absolute",height:"100%",width:"100%",display:"block"}}>
                            <div style = {{paddingTop:"14vh",width:"100%", height:"100%",display:"flex"}}>
                                <Link to="/commercial" style={{height:"100%",width:"33%", marginRight:"3%"}}>
                                </Link>
                                <Link to="/ig" style={{height:"100%",width:"33%",marginRight:"3%"}}>
                                </Link>
                                <Link to="/musicvideos" style={{height:"100%",width:"33%",marginRight:"3%"}}>
                                </Link>
                            </div>
                        </div>
                        <img className="p-1 img-fluid" src={visionOnScreen} style = {props.version === "desktop"? state.style.Header.image : state.style.Header.image.mobile}/>     
                    </div>
                </div>
                <div className = 'links col-sm text-center mt-2' style = {props.version === "desktop" ? state.style.images : state.style.SocialMediaIcons.images.mobile}>
                    <a href="https://www.instagram.com/pyrrhicproductions/" target="_blank">
                        <i className="fa fa-instagram fa-4x favicon-link" 
                        style = {props.version === "desktop" ? state.style.SocialMediaIcons : state.style.SocialMediaIcons.mobile} 
                        ></i>
                    </a>
                    <a href="https://www.facebook.com/pyrrhicproductions" target="_blank">
                        <i className = "fa fa-facebook fa-4x favicon-link" style = {props.version === "desktop" ? state.style.SocialMediaIcons : state.style.SocialMediaIcons.mobile}></i>
                    </a>
                </div>
            </div>
            }
      </pyrrhicContext.Consumer>
      
        )

        
}
