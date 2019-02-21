import React, { Component } from 'react';
import Clock from "../../../src/img/about/alexCLock.jpg"
import Alex from "../../../src/img/about/alexStaffLogo.jpg"

class Aboutmain extends Component{

    render(){
        return(
            <div className = "container">
            <div className = "row">
            <div className = "col-sm-6 text-center text-light">
            <h1 className = "py-3">
                What We Do
            </h1>
            <img className = "img-fluid pb-3" src = {Clock}></img>
            <p className = "pt-2">
            Pyrrhic Productions is Jersey City, NJ's premier video production company, a part of Arts on the Hudson, Arts Nonprofit. Aside from providing quality commercial video content, we are dedicated to the cause of preserving Jersey City's art scene and creating content for budding artists to blossom. We are all artists ourselves, and are passionate about our art. Let's work together and make something great.
            </p>
            </div>
            <div className = "col-sm-6 text-center text-light">
            <h1 className = "py-3">
                Hit Us Up
            </h1>
            <img className = "img-fluid pb-3" src = {Alex}></img>
            <p className = "pt-2">
            Alex Gurevich is the Papacito Del Arte and head of Pyrrhic Productions. 
            </p>

            <p>Reach out at <i style={{color:"#FC7A3D"}}>Pyrrhicfilmproductions@gmail.com</i></p>
            </div>
            </div>
            </div>
        )
    }

}

export default Aboutmain