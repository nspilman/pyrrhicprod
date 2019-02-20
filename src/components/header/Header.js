import React, { Component } from 'react';
import vidProdJC from "../../../src/img/header/vidProdJcNj2.png"
import AOTHlogo from "../../../src/img/header/logo_gmail.jpg"
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"

class Header extends Component{
    render(){
    const imageStyle = this.props.styleObj.Header.image
    const imagesDivStyle = this.props.styleObj.Header.images
    const socialMediaImageStyle = this.props.styleObj.SocialMediaIcons
    const socialMediaDivStyles = Object.create(imagesDivStyle)
    // socialMediaDivStyles.display = "flex";
    // socialMediaDivStyles.flexDirection = "column";
    // socialMediaDivStyles.alignItems = "flex-end";
    
    return(
        <div>
        <div id="header" className='row'>
        <div className = 'logo col-sm-3'style = {imagesDivStyle}>
                <a href="index.html">
                    <img src={pyrrhicLogo} style={imageStyle} alt="site identity" />
                </a>
        </div>
        <div className = 'vidProdJC col-sm-7'style = {imagesDivStyle}>
                <img src={vidProdJC} style = {imageStyle}/>     
        </div>
        <div className = 'links col-sm-2 text-center' style = {socialMediaDivStyles}>
            <a href="https://www.instagram.com/pyrrhicproductions/" target="_blank">
                            <i className="fa fa-instagram fa-4x favicon-link" style = {socialMediaImageStyle} ></i>
                        </a>
                        <a href="https://www.facebook.com/pyrrhicproductions" target="_blank">
                         <i className = "fa fa-facebook fa-4x favicon-link" style = {socialMediaImageStyle}></i>
                             </a>
                        <a href="https://artsonthehudson.com" target="_blank">
                            <img src={AOTHlogo} style = {socialMediaImageStyle}/>
                        </a>
        </div>
        </div>
        </div>
        )
}
}

export default Header