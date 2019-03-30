import React from 'react';
import Button from "./Button"
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Consumer} from "../../App"

export default function Menu(props){
    const {updateWindow, Link} = props
        return(
        <Consumer>
            {context =>
        <div className = "container py-4">
            <div className = "row">
                <div className = "col-sm-6 text-center text-light">
                <Link to= "/">
                    <Button choice = {'OUR VIDEOS'}  updateWindow = {updateWindow} window = {context.window} select={'video'}/>
                </Link>
                </div>
                <div className = "col-sm-6 text-center text-light">
                <Link to="/contact">
                    <Button choice = {'GET IN CONTACT'}  updateWindow = {updateWindow} window = {context.window} select = {'about'}/>
                </Link>
                </div>
                {/* <div className = "col-sm-4 text-center text-light"> 
                 <Link to="/staff">
                     <Button choice = {'THE TEAM'} styleObj = {buttonStyle} updateWindow = {updateWindow} window = {window} select = {'team'}/>
                 </Link>
                 </div> */}
            </div>
        </div>
        }
        </Consumer>
       
        )}
