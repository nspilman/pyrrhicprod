import React, { Component } from 'react';

function Select(props) {
        const videos = props.videos ? props.videos : []
        return(
            videos.map(vid =>{
                const { youtube_link, name, artist } = vid;
                return youtube_link === props.selected ? (
                    <option selected value = {youtube_link} key = {youtube_link} className = "text-center">
                    {name} by {artist}
                    </option>
                ):(
                    <option value = {youtube_link} key = {youtube_link} className = "text-center">
                    {name} by {artist}
                    </option>
                )
            }
        )
        )
    }

export default Select