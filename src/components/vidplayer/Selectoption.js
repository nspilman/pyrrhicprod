import React, { Component } from 'react';


class Option extends Component {

    render(){
        // console.log(this.props.selected)
        const {name, artist, youtube_link} = this.props.video
        const selected = this.props.selected === youtube_link
        if(selected){
        return (
            <option value = {youtube_link} selected className = "text-center text-white">
                 {name} by {artist}
            </option>
        )
    }
    else{
        return (
            <option value = {youtube_link} className = "text-center text-white">
                {name} by {artist}
            </option>
        )
    }
    }
}
export default Option