import React, { Component } from 'react';

class Button extends Component {
    render(){
        // console.log(this.props.selected)
        const {name, artist, youtube_link, category} = this.props.video
        const Link = this.props.link
        const selected = this.props.selected === youtube_link ? "selectedButton button": "button"
        
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

        
        
        return (
            <Link style = {this.props.styleObj.Vidmain.Button}  to = {routerLink}>
            <button className = {selected} style = {this.props.styleObj.Vidmain.Button} onClick={() => {this.props.choose(youtube_link)}}>
             
            </button>
            </Link>
        )
    }
}

export default Button