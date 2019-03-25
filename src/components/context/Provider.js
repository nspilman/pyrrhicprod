import React, {Component} from "react";
import pyrrhicContext from "./Context"
import archiveFont from "../../fonts/Archive/Archive-Regular.ttf"

class pyrrhicProvider extends Component{
    state = {
        style: {
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
          },
          update:(prop) => this.prop = prop
    }
    render(){
        const state = this.state
        return(
        <pyrrhicContext.Provider value = {{state}}>
            {this.props.children}
        </pyrrhicContext.Provider>
        )
    }
}

export default pyrrhicProvider;