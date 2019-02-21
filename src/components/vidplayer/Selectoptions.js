import React, { Component } from 'react';
import Selectoption from "./Selectoption"


class Select extends Component {

    render(){
        const videos = this.props.videos ? this.props.videos : []
        return(
            videos.map(vid =>{
                return <Selectoption video = {vid} key = {vid.youtube_link} choose = {this.props.choose} styleObj = {this.props.styleObj} selected = {this.props.selected}/>
            })
        )
    }
}

export default Select