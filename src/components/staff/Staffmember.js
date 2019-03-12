import React, { Component } from 'react';
// import defaultPhoto from "../../../src/img/staff/davidStaffLogo.png"
import defaultPhoto from "../../../src/img/staff/davidStaffLogo.jpg"

function Staffmember(props){
    const {name, title} = props.staff
    const photo = props.staff.photo ? props.staff.photo : defaultPhoto

        return (
            <div className = "col-md-4">
                <img className = "img-fluid" src = {photo} style = {{borderRadius:"50%", height:"40vh"}}/>
                <div className = "text-center py-3">
                    <h3 className= "stencilLight">{name}</h3>
                    <h5 className = "stencilLight">{title}</h5>
                </div>
            </div>
        )
    }

export default Staffmember