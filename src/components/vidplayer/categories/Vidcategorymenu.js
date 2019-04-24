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
            <React.Fragment>
                <div className = "container cocoMoose text-white p-3">
                <h1 style={{letterSpacing:".4em",fontSize:'3vw'}}>YOUR VISION ON SCREEN</h1>
                </div>
            <div className = "pb-2">
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
            </React.Fragment>
        )
    }
}

export default Vidmain