import React, { Component } from 'react';
import Player from "./Player"
import Buttons from "./Buttons"
import Selectoptions from './Selectoptions'
import Vidcategorymenu from "./categories/Vidcategorymenu"
import {Consumer} from "../../App";

class Vidmain extends Component {
    static contextType = Consumer;
    constructor(props) {
        super(props);
        this.state = { 
            selected:this.props.videos[0],
            autoplay:0,
            buttonsClass : "container text-center hideButtons",
            }
        this.selectChoose = this.selectChoose.bind(this)
        this.returnVidCategory = this.returnVidCategory.bind(this)
        }

      choose = yt => {
          const chosen = this.state.videos.filter(video => video.youtube_link === yt)
          this.setState({selected : chosen[0],autoplay:1})
      }

      selectChoose(){
        const selectVal = document.querySelector('.vidSelect').value
        const chosen = this.state.videos.filter(video => video.youtube_link === selectVal)
        this.setState({selected : chosen[0],autoplay:1})
      }

      returnVidCategory(){
          return this.props.videos.filter(video => video.category === this.props.menuCat)
      }

      componentDidMount(){
          this.props.updateWindow('video')
          const urlParam = this.props.match.params.id
          if(this.props.match.path !== "/"){
            this.setState({buttonsClass:"container text-center"})
          }
          if(urlParam){
             const filterSelect = this.returnVidCategory().filter(video => video.youtube_link===urlParam)
            if(filterSelect.length > 0){
                var selectedVid = filterSelect[0]
               }
            else{
                var selectedVid = this.returnVidCategory()[0]
            }
          }else{
            var selectedVid = this.returnVidCategory()[0]
          }
              this.setState({videos:this.returnVidCategory(),selected:selectedVid})
            }
    
    render(){
        const mobileDisplay = this.props.menuCat == "reel" ? 'none':'flex'
            return(
                <Consumer>
                    {context => 
                <React.Fragment>
            <div className = "container text-center">
                <Vidcategorymenu selected = {this.props.menuCat} link = {this.props.link} />
            </div>
            
                {context.version === 'desktop' ? (
                    <div className = "selectorsAndVidbox" style ={{display:'flex'}}>
                        <div className = {this.state.buttonsClass} >
                            <Buttons  
                                link = {this.props.link}
                                videos = {this.state.videos} 
                                choose = {this.choose}
                                selected = {this.state.selected.youtube_link}
                            />
                        </div>
                        <div className = "vidBox" style = {{width:"100%",height:"75vh",minWidth:'70vw'}}>
                            <Player video = {this.state.selected} autoplay = {this.state.autoplay} />
                        </div>
                    </div>
                ):(
                    <div className = "selectorsAndVidbox" style ={{display:'flex',flexDirection:'column'}}>
                        <div style = {{display:mobileDisplay, flexDirection:'column'}}>
                        <h4 className = "text-light pb-2 text-center" style={{marginTop:'1em'}}> SELECT A VIDEO</h4>
                        <select className = "vidSelect pb-3" onChange ={this.selectChoose}>
                            <Selectoptions
                            link = {this.props.link}
                            videos = {this.state.videos} 
                            choose = {this.choose} 
                            selected = {this.state.selected.youtube_link}
                            />
                        </select>
                        </div>
                        <div className = "vidBox" style = {{width:"100%",height:"75vh",minWidth:'80vw',background:`url:https://img.youtube.com/vi/${this.state.selected.youtube_link}/hqdefault.jpg`}}>
                            <Player video = {this.state.selected} autoplay = {this.state.autoplay} />
                        </div>
                    </div>
               )}
        </React.Fragment>
        }
        </Consumer>
        )
    }
}

export default Vidmain
