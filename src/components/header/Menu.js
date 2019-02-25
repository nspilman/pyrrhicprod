import React, { Component } from 'react';
import Button from "./Button"

class Menu extends Component{
    render(){
        const buttonStyle = this.props.styleObj.Vidmain.Button
        const {updateWindow, window} = this.props
        const menuStyle = this.props.version === "desktop" ? this.props.styleObj.Header.Menu : this.props.styleObj.Header.Menu.mobile 
    return(
        <div className = "container py-4" style={menuStyle}>
            <div className = "row">
                <div className = "col-sm-6 text-center text-light">
                    <Button choice = {'OUR VIDEOS'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select={'video'}/>
                </div>
                <div className = "col-sm-6 text-center text-light">
                    <Button choice = {'GET IN CONTACT'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select = {'about'}/>
                </div>
            </div>
        </div>
        )}
}

export default Menu