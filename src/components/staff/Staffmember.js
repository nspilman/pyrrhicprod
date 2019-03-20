import React, { Component } from 'react';
// import defaultPhoto from "../../../src/img/staff/davidStaffLogo.png"
import defaultPhoto from "../../../src/img/staff/davidStaffLogo.jpg"

function Staffmember(props){
    const {name, title, bio} = props.staff
    const photo = props.staff.photo ? props.staff.photo : defaultPhoto

        return (
            <div className = "row py-3">
            <div className = "col-sm-3">
                <img className = "img-fluid" src = {photo} style = {{borderRadius:"50%", height:"30vh"}}/>
            </div>
                <div className = "text-center col-sm-9 text-white">
                    <h3 className= "stencilLight">{name}</h3>
                    <h5 className = "stencilLight">{title}</h5>
                    <p className = "stencilLight">{bio}</p>
                </div>
            </div>
        )
    }

export default Staffmember