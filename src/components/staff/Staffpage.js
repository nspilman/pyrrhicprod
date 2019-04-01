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
    bio:"Nate is fascinated by the Web, and loves building things on it. Nate also enjoys music, listening and playing, and sees web development as simply another creative outlet. Nate's from Jersey City, NJ, but currently lives in Seattle.",
    photo: nateLogo,
    id:'2',
    },
    {name:'Alex Goold',
    title:'VFX and Assembly Editor',
    bio:"Alex Goold was born and, somehow, continues to exist to this day. He comes equipped with a wide variety of media creation skills from photo editing to video effects and animation. He spends much of his time compiling footage or writing music with someone else also named Alex. When he isn’t working on creative projects he can usually be found re-reading the works of Terry Pratchett. ",
    photo: gooldLogo,
    id:'3',
    },
    {name:'James Mehrkens',
    title:'Sound Englineer, Mixer and Composer',
    photo: jimLogo,
    bio:"With a background in audio engineering and music production, Jim has been creating and and manipulating sounds since a very young age. In college, Jim started a band called Cook Thugless and has since found himself increasingly involved in the creation of music videos and film, always diving deeper into the production and post-production of increasingly ambitious projects.",
    id:'4',
    },
    {name:'AJ "Tito" Seferlis',
    title:'Director of Photography, Editor, Colorist',
    bio:"AJ Seferlis is an all around filmmaker and photographer specializing in writing and directing. Inspired by the work of Stanley Kubrick and Wes Anderson, AJ strives to make every frame as detailed and well composed as a painting. With a vast amount of international experience creating all kinds of works large and small he can be trusted to deliver a product that fulfills the desired vision and intention of a project.",
    photo: ajLogo,
    id:'5',
    },
    {name:'Jean Louis Droulers',
    title:'Director, Fine Editor',
    bio:"Jean Louis is an accomplished artist with background in acting and video editing. He has been working in video production for 8 years for a range of music videos and short films. He is also the front an for the band Cook Thugless and is responsible for the production of their videos. He was born in Caracas Venezuela and grew up in Miami Florida.",
    photo: jlLogo,
    id:'6',
    },
    {name:'Chris Colonnese',
    title:'Assistant Director. Set Photographer and Scenic Designer',
    bio:"Chris brings a DIY approach to projects.  With a background in writing, research, music, and theater production, Chris approaches projects with an eye for detail, organization, and thoughtful logistics planning.  Collaborating with artists to turn ambitiously abstract ideas into fully realized productions is their speciality.",
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