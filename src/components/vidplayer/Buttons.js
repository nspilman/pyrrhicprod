import React from 'react';
import {Consumer} from "../../App";
import styled from 'styled-components';


const StyledButton = styled.button`
  color:white;
background-color:black;
width:100%;
// maxWidth:20vw;
border-radius:.7em;
`

export default function Buttons(props) {
     return (
     <Consumer>
         {context =>
     props.videos ? (props.videos.map(video => {
        const { name, artist, youtube_link, category } = video;
        const isSelected = youtube_link === props.selected;
        const Link = props.link

        var routerLink
        switch (category) {
            case 'music':
              routerLink = `/musicvideos/${youtube_link}`;
              break;
            case 'commercial':
            routerLink = `/commercial/${youtube_link}`;
              break;
            case 'ig':
            routerLink = `/ig/${youtube_link}`;
              break;
            default :
            routerLink = "/"
          }


        return(
            <Link to = {routerLink}>
            <StyledButton
            className={isSelected ? 'selectedButton button' : 'button'}
            onClick={() => props.choose(youtube_link)} key = {video.youtube_link}
          >
        {name.toUpperCase()}
                <br/>
                <span className = "stencilLight">by {artist}</span>
          </StyledButton>
          </Link>
        )
     })):(
    <div/>
    )
    }
     </Consumer>
     )
}
