import React, { Component } from 'react';
import Button from "./Button"

class Vidmain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos:null,
            autoplay:0,
        }
       }
   
    render(){
        const Link = this.props.link
        return(
            <div className = "pb-2">
                <span className = "stencilLight text-white">VIDEO CATEGORY  </span>
                <Link to="/">
                <Button category ="Pyrrhic Reel" id = "reel" selected = {this.props.selected}/>
                </Link>
                <Link to="/musicvideos">
                <Button category ="Music Videos" id = "music" selected = {this.props.selected}/>
                </Link>
                <Link to="/commercial">
                <Button category ="Commercials" id = "commercial" selected = {this.props.selected}/>
                </Link>
                <Link to="/ig">
             <Button category ="Instagram Videos" id = "ig" selected = {this.props.selected}/>
           </Link>
            </div>
        )
    }
}

export default Vidmain