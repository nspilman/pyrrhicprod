import React, { Component } from 'react';
import Player from "./Player"
import Buttons from "./Buttons"
import Selectoptions from './Selectoptions'
import Vidcategorymenu from "./categories/Vidcategorymenu"
import {Consumer} from "../../App";
import styled from 'styled-components';

const SelectorAndVidBox = styled.div`
display:flex;
@media (max-width: 768px){
    flex-direction:column;
}
`

const ButtonsWrapper = styled.div`
@media (max-width: 768px){
    display:none;
}
`

const VidWrapper = styled.div`
width:100%;
height:75vh;
min-width:70vw;
`

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

        showSelect = this.props.menuCat === 'reel' ? 'none':'flex';

        MobileSelect = styled.div`
        @media(min-width:769px){
            display:none;
        };
        @media (max-width: 768px){
            display:${this.showSelect};
            flex-direction:column;
        }
`

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

      returnVidByUrl(url){
          return this.returnVidCategory().filter(video => video.youtube_link===url);
      }

      componentDidMount(){
          this.props.updateWindow('video')
          if(this.props.match.path !== "/"){
            this.setState({buttonsClass:"container text-center"})
          }
            const url = this.props.match.params.id
            const videosByUrl = this.returnVidByUrl(url)
            const selectedVid = videosByUrl.length > 0 ? videosByUrl[0] : this.returnVidCategory()[0]
            this.setState({videos:this.returnVidCategory(),selected:selectedVid})
            }
    
    render(){
        console.log(this.MobileSelect)
            return(
                <Consumer>
                    {context => 
                    <React.Fragment>
                        <div className = "container text-center">
                            <Vidcategorymenu selected = {this.props.menuCat} link = {this.props.link} />
                        </div>
                        <SelectorAndVidBox >
                            <ButtonsWrapper className = {this.state.buttonsClass} >
                                <Buttons  
                                    link = {this.props.link}
                                    videos = {this.state.videos} 
                                    choose = {this.choose}
                                    selected = {this.state.selected.youtube_link}
                                    />
                            </ButtonsWrapper>
                            <this.MobileSelect>
                                <h4 className = "text-light pb-2 text-center mt-1"> SELECT A VIDEO</h4>
                                <select className = " vidSelect pb-3 bg-light" onChange ={this.selectChoose}>
                                    <Selectoptions
                                        link = {this.props.link}
                                        videos = {this.state.videos} 
                                        choose = {this.choose} 
                                        selected = {this.state.selected.youtube_link}
                                    />
                                </select>
                            </this.MobileSelect>
                            <VidWrapper>
                                <Player video = {this.state.selected} autoplay = {this.state.autoplay} />
                            </VidWrapper>
                    </SelectorAndVidBox>
        </React.Fragment>
        }
        </Consumer>
        )
    }
}

export default Vidmain
