import React, { Component } from 'react';
import Player from "./Player"
import Buttons from "./Buttons"

class Vidmain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos:null,
            selected:this.props.selected,
            autoplay:0,
        }
        this.choose = this.choose.bind(this)
      }

      choose(yt){
          const chosen = this.state.videos.filter(video => video.youtube_link === yt)
          this.setState({selected : chosen[0],autoplay:1})
      }
      componentDidMount(){
              this.setState({videos:this.props.videos,selected:this.state.selected})
        }
      vidsLoaded(){
          const {styleObj} =  this.props
            return(
            <div className = "row">
                <div className = "col-sm-2 btn-group-vertical" 
                style = {styleObj.Vidmain.Buttons}>
                <Buttons 
                className = "btn-group-vertical" 
                videos = {this.state.videos} 
                choose = {this.choose} 
                styleObj = {styleObj} 
                selected = {this.state.selected.youtube_link}
                />
                </div>
                <div className = "col-sm-10" style = {styleObj.Vidmain.Player}>
                <Player video = {this.state.selected} styleObj = {styleObj} autoplay = {this.state.autoplay} />
                </div>
            </div>   
            )}

    render(){
        return(
            this.vidsLoaded()
        )
    }
}

export default Vidmain