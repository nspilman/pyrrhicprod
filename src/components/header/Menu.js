import React, { Component } from 'react';
import Button from "./Button"

class Menu extends Component{
    render(){
        const buttonStyle = this.props.styleObj.Vidmain.Button
        const {updateWindow, window} = this.props
    return(
        <div className = "container py-4">
        <div className = "row">
        <div className = "col-sm-6 text-center text-light">
        <Button choice = {'Watch our Videos'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select={'video'}/>
        </div>
        <div className = "col-sm-6 text-center text-light">
        <Button choice = {'About and Contact'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select = {'about'}/>
        </div>
        </div>
        </div>
        )}
}

export default Menu