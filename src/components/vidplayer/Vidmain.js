import React, { Component } from 'react';
import Player from "./Player"
import Buttons from "./Buttons"
import Selectoptions from './Selectoptions'
import Vidcategorymenu from "./categories/Vidcategorymenu"
import MetaTags from 'react-meta-tags';

class Vidmain extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            videos:null,
            selected:this.props.selected,
            autoplay:0,
            buttonsClass : "container text-center hideButtons",
            }
        this.choose = this.choose.bind(this)
        this.selectChoose = this.selectChoose.bind(this)
        this.returnVidCategory = this.returnVidCategory.bind(this)
      }

      choose(yt){
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
      vidsLoaded(){
        const metaImage = `https://img.youtube.com/vi/${this.state.selected.youtube_link}/sddefault.jpg`
        const pageTitle = `${this.state.selected.name} | Video Production | Pyrrhic Productions`
       
        //   console.log(this.props.videos.filter(video => video.category === this.props.menuCat))
          const {styleObj} =  this.props
          if(this.props.version === "desktop"){
            return(
                <div>
                    <MetaTags>
            <title>{pageTitle}</title>
            <image>{metaImage}</image>
            {/* <meta property="og:image" content={metaImage} /> */}
          </MetaTags>
<div className = "container text-center">
            <Vidcategorymenu selected = {this.props.menuCat} link = {this.props.link} />
            </div>
            <div className = "selectorsAndVidbox" style ={{display:'flex'}}>
                <div className = {this.state.buttonsClass} 
                style = {styleObj.Vidmain.Buttons}>
                <Buttons  
                link = {this.props.link}
                videos = {this.state.videos} 
                choose = {this.choose} 
                styleObj = {styleObj} 
                selected = {this.state.selected.youtube_link}
                />
                </div>
                <div className = "vidBox" style = {{width:"100%",height:"75vh",minWidth:'80vw',background:`url:https://img.youtube.com/vi/${this.state.selected.youtube_link}/hqdefault.jpg`}}>
                <Player video = {this.state.selected} styleObj = {styleObj} autoplay = {this.state.autoplay} />
                </div>
            </div>   
            </div>
            )
        }
        if(this.props.version === "mobile"){
            return(
<div>
            <div className = "container text-center">
            <Vidcategorymenu selected = {this.props.menuCat} link = {this.props.link} />
            </div>
                <div className = "row">
                <div className = "col-sm-2 btn-group-vertical" 
                style = {styleObj.Vidmain.Buttons}>
                <h3 className = "text-light pb-2" style={{marginTop:'1em'}}> SELECT A VIDEO</h3>
                <select className = "vidSelect pb-3" onChange ={this.selectChoose} style={styleObj.Vidmain.Select}>
                <Selectoptions
                link = {this.props.link}
                videos = {this.state.videos} 
                choose = {this.choose} 
                styleObj = {styleObj} 
                selected = {this.state.selected.youtube_link}
                />
                </select>
                </div>
                <div className = "col-sm-10" style = {{width:"100%",height:"45vh", background:`url:https://img.youtube.com/vi/${this.state.selected.youtube_link}/hqdefault.jpg`}}>
                <Player video = {this.state.selected} styleObj = {styleObj} autoplay = {this.state.autoplay} />
                </div>
            </div>  
            </div>
            )
        }
    }

    render(){
        return(
            this.vidsLoaded()
        )
    }
}

export default Vidmain