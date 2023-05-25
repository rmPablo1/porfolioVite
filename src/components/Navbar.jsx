import React from 'react'
import {BsFillPersonFill} from "react-icons/bs"
import {MdComputer, MdWork, MdContactMail} from "react-icons/md"

function Navbar() {
  return (
    <div className="navbar-container">
      <ul className="navbar-list">
        <a href="#aboutmeLine"><BsFillPersonFill/><span className="hide">ABOUT</span></a>
        <a href="#skillsLine"><MdComputer/><span  className="hide">SKILLS</span></a>
        <a href="#projectsLine"><MdWork/><span  className="hide">PROJECTS</span></a>
        <a href="#contactLine"><MdContactMail/><span  className="hide">CONTACT</span></a>
      </ul>
    </div>
  )
}

export default Navbar
