import React from 'react';

export default function Player(props){
    const full_url =`https://www.youtube.com/embed/${
        props.video.youtube_link
        }?autoplay=${props.autoplay}`
        return(
        <iframe 
        width="100%" 
        height="100%" 
        src={full_url} yú
        frameBorder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        title={props.video.name} 
        allowFullScreen></iframe>
        )
    }
