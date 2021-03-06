import React, { Component } from 'react';
import WGTT from "../../../src/img/about/WGTT.jpg"
import Alex from "../../../src/img/about/alexWithCamera.jpg"
import {Consumer} from "../../App"

class Aboutmain extends Component{

    componentDidMount(){
        this.props.updateWindow('about')
    }

    render(){
       return (
        <Consumer>
        {context => 
        <div>
       {context.version ==="desktop" ? (<div className = "container">
      <div className = "row">
      <div className = "col-sm-6 text-center text-light">
      <h1 className = "py-3">
      Your Creative Vision is Our Priority
      </h1>
      </div>
      <div className = "col-sm-6 text-center text-light">
      <h1 className = "py-3">
      Get a Quote
      </h1>
      </div>
      </div>
      <div className = "row">
      <div className = "col-sm-6 text-center text-light">
      <img className = "img-fluid pb-3" src = {Alex}></img>
      <p className = "pt-2 stencilLight">
      At Pyrrhic Productions we are dedicated to making eye-catching video content to spread awareness of your brand. Commercials. Instagram. Music videos. With our network of creative directors, editors, videographers and sound technicians, we are ready to bring your idea to the screen. You name it, we’ll make it.
      </p>
      </div>
      <div className = "col-sm-6 text-center text-light">
      <img className = "img-fluid pb-3" src = {WGTT}></img>
      <p className = "pt-2 stencilLight">
Are you a startup? A non-profit? Or a big brand? We’ve got you covered. Whether your idea is big or small, our team is ready to work to try to accommodate your budget. 
      </p>

      <p>Reach out at <i style={{color:"#FC7A3D"}}>Pyrrhicfilmproductions@gmail.com</i></p>
      </div>
      </div>
      </div>):(<div className = "container">
                  <div className = "row">
                  <div className = "col-sm-6 text-center text-light">
                  <h1 className = "py-3">
                  Your Creative Vision is Our Priority
                  </h1>
                  </div>
                  <div className = "col-sm-6 text-center text-light">
                  <img className = "img-fluid pb-3" src = {Alex}></img>
                  <p className = "pt-2 stencilLight">
                  At Pyrrhic Productions we are dedicated to making eye-catching video content that spreads awareness of your brand. Commercials. Instagram. Music videos. With our network of creative directors, editors, videographers and sound technicians, we are ready to bring your idea to the screen. You name it, we’ll make it.
                  </p>
                  </div>
                  </div>
                  <div className = "row">
                  <div className = "col-sm-6 text-center text-light">
                  <h1 className = "py-3">
                  Get a Quote
                  </h1>
                  </div>
                  <div className = "col-sm-6 text-center text-light">
                  <img className = "img-fluid pb-3" src = {WGTT}></img>
                  <p className = "pt-2 stencilLight">
      Are you a startup? A non-profit? Or a big brand? We’ve got you covered. Whether your idea is big or small, our team is ready to work to try to accommodate your budget. 
                  </p>
      
                  <p className ="stencilLight">Reach out at <i style={{color:"#FC7A3D"}}> <a href="mailto:Pyrrhicfilmproductions@gmail.com"> Pyrrhicfilmproductions@gmail.com </a></i></p>
                  </div>
                  </div>
                  </div>)}
              </div>} 
      </Consumer>
       )
    }

}

export default Aboutmain