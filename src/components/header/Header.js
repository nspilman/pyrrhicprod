import React, { Component } from 'react';
import visionOnScreen from "../../../src/img/header/yourvisiononscreen.png"
import AOTHlogo from "../../../src/img/header/logo_gmail.png"
import pyrrhicLogo from "../../../src/img/header/pyrrhic_logo_white.png"


class Header extends Component{
    render(){
    const imageStyle = this.props.version === "desktop" ? this.props.styleObj.Header.image : this.props.styleObj.Header.image.mobile
    const imagesDivStyle = this.props.styleObj.Header.images
    const socialMediaImageStyle = this.props.version === "desktop" ? this.props.styleObj.SocialMediaIcons : this.props.styleObj.SocialMediaIcons.mobile
    const socialMediaDivStyles = Object.create(imagesDivStyle)
    const Link = this.props.link
    
    return(
        <div>
        <div id="header" className='row'>
        <div className = 'logo col-sm-3'style = {imagesDivStyle}>
                <a href="index.html">
                    <img src={pyrrhicLogo} style={imageStyle} alt="site identity" />
                </a>
        </div>
        <div className = 'vidProdJC col-sm-7'style = {imagesDivStyle}>
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
                    <img className="p-1 img-fluid" src={visionOnScreen} style = {imageStyle}/>     
            </div>
        </div>
        <div className = 'links col-sm-2 text-center mt-2' style = {socialMediaDivStyles}>
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