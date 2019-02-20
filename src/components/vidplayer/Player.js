import React, { Component } from 'react';

class Player extends Component {
    render(){
    const vid =`https://www.youtube.com/embed/${this.props.video.youtube_link}?autoplay=${this.props.autoplay}`
        return(
        <iframe width="100%" height="100%" src={vid} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        )
    }
}

export default Player