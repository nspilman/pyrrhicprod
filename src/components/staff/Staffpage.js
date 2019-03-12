import React, { Component } from 'react';
import Staffmember from "./Staffmember"
import defaultPhoto from "../../../src/img/staff/davidStaffLogo.jpg"
import alexGurLogo from "../../../src/img/staff/alexStaffLogo.jpg"
import nateLogo from "../../../src/img/staff/nateStaffLogo.jpg"
import gooldLogo from "../../../src/img/staff/gooldStaffLogo.jpg"

const staff = [
    {name:'Alex Gurevich',
    title:'Papacito Del Arte',
    photo: alexGurLogo,
    id:'1',
    },
    {name:'Nate Spilman',
    title:'Web Magician',
    photo: nateLogo,
    id:'2',
    },
    {name:'Alex Goold',
    title:'VFX and Assembly Editor',
    photo: gooldLogo,
    id:'3',
    },
    {name:'James Mehrkens',
    title:'Sound Englineer, Mixer and Composer',
    photo: gooldLogo,
    id:'4',
    },
    {name:'AJ "Tito" Seferlis',
    title:'?',
    photo: gooldLogo,
    id:'5',
    },
    {name:'Jean Louis Droulers',
    title:'Director, Fine Editor',
    photo: gooldLogo,
    id:'6',
    },
    {name:'Chris Colonnese',
    title:'Assistant Director. Set Photographer and Scenic Designer',
    photo: gooldLogo,
    id:'6',
    },   
]

class Staffpage extends Component {
    render(){
        return (
            <div className = "container">
            <span className = "text-center text-white mb-5"><h1>OUR STAFF</h1></span>
            <div className = "row text-white container">
            {staff.map(person =>{
                console.log(person)
                return <Staffmember staff ={person} key={person.id}/>
            })}
            </div>
            </div>
        )
    }
}

export default Staffpage