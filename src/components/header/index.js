import React, { Component } from 'react';
import visionOnScreen from "../../../src/img/header/yourvisiononscreen.png"
import AOTHlogo from "../../../src/img/header/logo_gmail.png"
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"
import urbanLogo from "../../../src/img/header/pyrrhicurban.png"
import {Consumer} from "../../App";


export default function Header(props){
    // const socialMediaImageStyle = this.context.version === "desktop" ? this.props.styleObj.SocialMediaIcons : this.props.styleObj.SocialMediaIcons.mobile
    const Link = props.link
    return( 
        <Consumer>
        {context =>
            <div id="header" className='row'>
                <div className = 'logo col-sm-3'style = {context.style.Header.images}>
                    <Link to="/">
                        <img src={urbanLogo} style={context.version === "desktop"? context.style.Header.image : context.style.Header.image.mobile} alt="site identity" />
                    </Link>
                </div>
                <div className = 'vidProdJC col-sm-7'style = {context.style.Header.images}>
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
                        <img className="p-1 img-fluid" src={visionOnScreen} style = {context.style.Header.image}/>     
                    </div>
                </div>
                <div className = 'links col-sm text-center mt-2' style = {context.version === "desktop" ? context.style.images : context.style.images}>
                    <a href="https://www.instagram.com/pyrrhicproductions/" target="_blank">
                        <i className="fa fa-instagram fa-4x favicon-link" 
                        style = {context.version === "desktop" ? context.style.SocialMediaIcons : context.style.SocialMediaIcons.mobile} 
                        ></i>
                    </a>
                    <a href="https://www.facebook.com/pyrrhicproductions" target="_blank">
                        <i className = "fa fa-facebook fa-4x favicon-link" style = {context.version === "desktop" ? context.style.SocialMediaIcons : context.style.SocialMediaIcons.mobile}></i>
                    </a>
                </div>
            </div>
            }
      </Consumer>
      
        )

        
}
