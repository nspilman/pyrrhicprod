import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import './App.css';
import Vidmain from './components/vidplayer/Vidmain'
import Header from './components/header/Header'
import Menu from './components/header/Menu'
import Aboutmain from './components/about/Aboutmain'
import Loading from './components/loading/Loading'
import Staffpage from "./components/staff/Staffpage"
import pyrrhicContext from "./components/context/Context"
import Provider from "./components/context/Provider"
import archiveFont from "./fonts/Archive/Archive-Regular.ttf"

const styles = {
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
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      window:'video',
      videos:null,
      loaded:false,
      version:'desktop'
    }
    this.updateWindow = this.updateWindow.bind(this)
    this.pages = this.pages.bind(this)
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  updateDimensions(){
    const {version} = this.state
    const width = window.innerWidth
    if(width < 600 && version === 'desktop'){
      this.setState({version:'mobile'})
    }
    if(width > 600 && version === 'mobile'){
      this.setState({version:'desktop'})
    }
    console.log(this.state.version)
  }
  
componentDidMount(){
    fetch("https://natespilman.tech/pyrrhic")
    .then(blob => blob.json())
    .then(data => 
        this.setState({videos:data}));
      
   
    const thisConst = this
    setTimeout(function(){thisConst.setState({loaded:true})},3000)
    
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions);
  }

  updateWindow(update){
    this.setState({window:update})
  }
  pages(){
  
    }
  

  render() {
    console.log(pyrrhicContext)
      if(this.state.videos && this.state.loaded){    
      return(
        <Provider>
        <Router>
        <div id="App">
        <pyrrhicContext.Consumer>
          {context=>(
          console.log(context)
          )}
        </pyrrhicContext.Consumer>
        <Header styleObj = {styles} version = {this.state.version} link = {Link}/>
        <Menu updateWindow = {this.updateWindow} styleObj = {styles} window = {this.state.window} version = {this.state.version} link={Link}/>
        <Route path="/" exact render={(props) => <Vidmain {...props}styleObj = {styles} version = {this.state.version} videos = {this.state.videos} menuCat = "reel" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/musicvideos" exact render={(props) => <Vidmain {...props}styleObj = {styles} version = {this.state.version} videos = {this.state.videos} menuCat = "music" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/commercial" exact render={(props) => <Vidmain {...props}styleObj = {styles} version = {this.state.version} videos = {this.state.videos} menuCat = "commercial" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path="/ig" exact render={(props) => <Vidmain {...props}styleObj = {styles} version = {this.state.version} videos = {this.state.videos} menuCat = "ig" selected = {this.state.videos[0]} link={Link}/>}/>
        <Route path = "/contact" render={(props) => <Aboutmain {...props} styleObj = {styles} version = {this.state.version}/>}/>
        <Route path = "/staff" component ={Staffpage}/>
        </div>
        </Router>
        </Provider>)
    }
    else{
      return(
<Loading styleObj = {styles}/>
      )
      }
  }
}

export default App;
