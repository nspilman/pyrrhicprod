import React, { Component } from 'react';
import Button from "./Button"
import { BrowserRouter as Router, Route } from "react-router-dom";
import pyrrhicContext from "../context/Context"

class Menu extends Component{
    render(){
        const buttonStyle = this.props.styleObj.Vidmain.Button
        const {updateWindow, window} = this.props
        const styleObj = <pyrrhicContext>{context=>(context.state.style)} </pyrrhicContext>
        const menuStyle = this.props.version === "desktop" ? this.props.styleObj.Header.Menu : this.props.styleObj.Header.Menu.mobile 
        const Link = this.props.link
    return(
        <div className = "container py-4" style={menuStyle}>
            <div className = "row">
                <div className = "col-sm-6 text-center text-light">
                <Link to= "/">
                    <Button choice = {'OUR VIDEOS'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select={'video'}/>
                </Link>
                </div>
                <div className = "col-sm-6 text-center text-light">
                <Link to="/contact">
                    <Button choice = {'GET IN CONTACT'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select = {'about'}/>
                </Link>
                </div>
                // <div className = "col-sm-4 text-center text-light">
                // <Link to="/staff">
                //     <Button choice = {'THE TEAM'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select = {'team'}/>
                // </Link>
                // </div>
            </div>
        </div>
        )}
}

export default Menu