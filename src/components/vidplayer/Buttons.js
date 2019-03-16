import React, { Component } from 'react';
import Button from "./Button"

class Buttons extends Component {
    render(){
        const videos = this.props.videos ? this.props.videos : []
        const Link = this.props.link
        return(
            videos.map(vid =>{
                return (
                <Button video = {vid} key = {vid.youtube_link} choose = {this.props.choose} styleObj = {this.props.styleObj} selected = {this.props.selected} link = {Link}/>
                )
            })
        )
    }
}

export default Buttons