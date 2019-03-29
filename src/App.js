import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Vidmain from './components/vidplayer/Vidmain'
import Header from './components/header/index'
import Menu from './components/header/Menu'
import Aboutmain from './components/about/Aboutmain'
import Loading from './components/loading/Loading'
import Staffpage from "./components/staff/Staffpage"
import archiveFont from "./fonts/Archive/Archive-Regular.ttf"

export const pyrrhicContext = React.createContext({
  style:{
  loading:{
    backgroundColor:'black',
    height:"100vh",
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    flexDirection:'column',
    logo:{
      width:"70vw",
    }
  },
  SocialMediaIcons:{
    width:"7vh",
    height:"7vh",
    color:'white',
    fontSize:'3em',
    marginRight:".2em",
    mobile:{
      width:"4vh",
      height:"4vh",
      color:'white',
      fontSize:'1.5em',
      marginRight:".2em",
    },
  },
  Vidmain:{
    Player:{
      minHeight:"50vh"
    },
    Select:{
      backgroundColor:"rgb(253,254,232)",
      width:"100%"
    },
    Buttons:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      overflowY:"scroll",
      justifyContent:"start",
      maxHeight:"75vh",
    },
    Button:{
      color:'white',
      backgroundColor:'black',
      width:'100%',
      // maxWidth:'20vw',
      borderRadius:".7em",
      fontFamily:archiveFont,
      minHeight: "min-content",
    }
  },
  Header:{
    Menu:{
      mobile:{
      }
    },
    images:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    image:{
      height:"20vh",
      mobile:{
        height:"10vh"
      }
    },
  },
}}
)

export default class App extends Component {
    state = { 
      window:'video',
      videos:null,
      loaded:false,
      version:'desktop'
    }

   updateDimensions = () => {
    const width = window.innerWidth;
    const version = width < 560 ? 'mobile' : 'desktop';
    if (version !== this.state.version) {
      this.setState({ version });
    }
  };

  updateWindow = update => {
    this.setState({ window: update });
  };
  
async componentDidMount(){
    const res = await fetch("https://natespilman.tech/pyrrhic")
    const data = await res.json()
    this.setState({ videos: data, loaded: true });
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  render() {
      return this.state.loaded  ? (
        <Router>
        <div id="App">
        <Header version = {this.state.version} link = {Link}/>
        <Menu updateWindow = {this.updateWindow} window = {this.state.window} version = {this.state.version} Link={Link}/>
        <Route path="/" exact render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "reel" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/musicvideos" exact render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "music" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/musicvideos/:id" render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "music" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/commercial" exact render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "commercial" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/commercial/:id" render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "commercial" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/ig" exact render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "ig" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/ig/:id" render={(props) => <Vidmain {...props} version = {this.state.version} videos = {this.state.videos} menuCat = "ig" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path = "/contact" render={(props) => <Aboutmain {...props}  version = {this.state.version} updateWindow = {this.updateWindow} />}/>
        <Route path = "/staff" render={(props) => <Staffpage {...props} updateWindow = {this.updateWindow}/>}/>
        </div>
        </Router>
      ):(
        <Loading/>
      )
}
}

