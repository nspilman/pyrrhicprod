import React, { Component } from 'react';


class Option extends Component {

    render(){
        // console.log(this.props.selected)
        const {name, artist, youtube_link} = this.props.video
        const selected = this.props.selected === youtube_link ? true : false
        if(selected){
        return (
            <option value = {youtube_link} selected>
                {name} by {artist}
            </option>
        )
    }
    else{
        return (
            <option value = {youtube_link}>
                {name} by {artist}
            </option>
        )
    }
    }
}
export default Option