import React from 'react';
import {pyrrhicContext} from "../../App";

export default function Buttons(props) {
     return (
     <pyrrhicContext.Consumer>
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
            <button
            className={isSelected ? 'selectedButton button' : 'button'}
            style={context.style.Vidmain.Button}
            onClick={() => props.choose(youtube_link)}
          >
        {name.toUpperCase()}
                <br/>
                <span className = "stencilLight">by {artist}</span>
          </button>
          </Link>
        )
     })):(
    <div/>
    )
    }
     </pyrrhicContext.Consumer>
     )
}
