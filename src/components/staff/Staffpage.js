import React, { Component } from 'react';
import Staffmember from "./Staffmember"
import defaultPhoto from "../../../src/img/staff/davidStaffLogo.jpg"
import alexGurLogo from "../../../src/img/staff/alexStaffLogo.jpg"
import jimLogo from "../../../src/img/staff/jimStaffLogo.png"
import nateLogo from "../../../src/img/staff/nateStaffLogo.jpg"
import gooldLogo from "../../../src/img/staff/gooldStaffLogo.jpg"
import chrisLogo from "../../../src/img/staff/chrisStaffLogo.jpg"
import ajLogo from "../../../src/img/staff/ajStaffLogo.jpg"
import jlLogo from "../../../src/img/staff/jlStaffLogo.png"

const staff = [
    {name:'Alex Gurevich',
    title:'Director, Director of Photography, Operations Manager',
    photo: alexGurLogo,
    bio:"Artist, Creative Director, and General Manager of Pyrrhic, Alex has been involved in the arts since early childhood. With a diverse background in performance, visual art, scenic carpentry, event production and labor management, Alex has been equipped with a unique skill set which enables him to take full advantage of available resources and make the best of any situation. Efficiency and organization haven’t hampered his creative side. The work Alex does tends to be marked by whimsy.",
    id:'1',
    },
    {name:'Nate Spilman',
    title:'Web Magician',
    bio:"",
    photo: nateLogo,
    id:'2',
    },
    {name:'Alex Goold',
    title:'VFX and Assembly Editor',
    bio:"",
    photo: gooldLogo,
    id:'3',
    },
    {name:'James Mehrkens',
    title:'Sound Englineer, Mixer and Composer',
    photo: jimLogo,
    bio:"With a background in audio engineering and music production, I have been creating and and manipulating sounds since a very young age. In college I started a band called Cook Thugless and have since found myself increasingly involved in the creation of music videos and film, always diving deeper into the production and post-production of increasingly ambitious projects.",
    id:'4',
    },
    {name:'AJ "Tito" Seferlis',
    title:'Director of Photography, Editor, Colorist',
    bio:"",
    photo: ajLogo,
    id:'5',
    },
    {name:'Jean Louis Droulers',
    title:'Director, Fine Editor',
    bio:"An accomplished artist with background in acting and video editing. Has been working in video production for 8 years for a range of music videos and short films. He is also the front an for the band Cook Thugless and is responsible for the production of their videos. He was born in Caracas Venezuela and grew up in Miami Florida.",
    photo: jlLogo,
    id:'6',
    },
    {name:'Chris Colonnese',
    title:'Assistant Director. Set Photographer and Scenic Designer',
    bio:"",
    photo: chrisLogo,
    id:'6',
    },   
]

class Staffpage extends Component {

    componentDidMount(){
        this.props.updateWindow('team')
    }
    render(){
        return (
            <div className = "container">
            <span className = "text-center text-white mb-5"><h1>OUR STAFF</h1></span>
            {staff.map(person =>{
                console.log(person)
                return <Staffmember staff ={person} key={person.id}/>
            })}
            </div>
        )
    }
}

export default Staffpage