import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Vidmain from './components/vidplayer/Vidmain'
import Header from './components/header/Header'
import Menu from './components/header/Menu'
import Aboutmain from './components/about/Aboutmain'
import Loading from './components/loading/Loading'

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
  },
  Vidmain:{
    Player:{
      width:"100%",
      height:"75vh"
    },
    Buttons:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
    },
    Button:{
      color:'white',
      backgroundColor:'black',
      width:'100%',
    }
  },
  Header:{
    images:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    image:{
      height:"20vh"
    },
  },
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      window:'video',
      videos:null,
    }
    this.updateWindow = this.updateWindow.bind(this)
    this.pages = this.pages.bind(this)
  }

componentDidMount(){
    fetch("http://localhost:8000/pyrrhic")
    .then(blob => blob.json())
    .then(data => 
        this.setState({videos:data}));
  }

  updateWindow(update){
    this.setState({window:update})
    console.log(update)
  }
  pages(){
    if(this.state.videos){    
    if(this.state.window==="video"){
      return(
        <div id="App">
        <Header styleObj = {styles}/>
        <Menu updateWindow = {this.updateWindow} styleObj = {styles} window = {this.state.window}/>
        <Vidmain styleObj = {styles} videos = {this.state.videos} selected = {this.state.videos[0]}/>
        </div>)
    }else{
      return(
    <div id="App">
    <Header styleObj = {styles}/>
    <Menu updateWindow = {this.updateWindow} styleObj = {styles} window = {this.state.window}/>
     <Aboutmain styleObj = {styles}/>
    </div>
      )
    }}
    else{
      return(
<Loading styleObj = {styles}/>
      )
      }
    }
  

  render() {
    return (
      this.pages()
    );
  }
}

export default App;
