import React, { Component } from 'react';

class Button extends Component {
    render(){
        // console.log(this.props.selected)
        const {name, artist, youtube_link} = this.props.video
        const selected = this.props.selected === youtube_link ? "selectedButton button": "button"
        return (
            <button className = {selected} style = {this.props.styleObj.Vidmain.Button} onClick={() => {this.props.choose(youtube_link)}}>
               <b> {name}</b> 
                <br/>by {artist}
            </button>
        )
    }
}

export default Button