import React from 'react'
import {AiOutlineLine} from "react-icons/ai"
import javascript from "../assets/js.png"
import git from "../assets/Git_icon.svg.png"
import html from "../assets/html-5.png"
import react from "../assets/atom.png"
import css from "../assets/css-3.png"
import postgres from "../assets/postgresql.png"
import MySQL from "../assets/mysql.png"
import ruby from "../assets/ruby.png"
import ror from "../assets/ror.png"
import restapi from "../assets/restapi.png"
import redux from "../assets/redux.png"
function Skills() {
  return (
    <div style={{marginTop: "-150px"}}id="skillsLine">
      <div className="skills-container1">
        <p style={{display:"flex", alignItems:"center", gap:"10px", fontSize:"10px"}}><AiOutlineLine style={{fontSize:"30px", color:"gray"}}/></p>
        <h3> SKILLS</h3>
      </div>
      <div className="skills-container">
        <div className="skills-grid">
          <li>
            <img src={html} style={{width:"40px"}} alt="tech skill"/>
            <p>HTML 5</p>
          </li>
          <li>
            <img src={css} style={{width:"40px"}} alt="tech skill"/>
            <p>CSS 3</p>
          </li>
          <li>
            <img src={javascript} style={{width:"40px"}} alt="tech skill"/>
            <p>JavaScript</p>
          </li>
          <li>
            <img src={react} style={{width:"40px"}} alt="tech skill"/>
            <p>React</p>
          </li>
          <li>
          <img src={redux} style={{width:"40px"}} alt="tech skill"/>
            <p>Redux</p>
          </li>
          <li>
            <img src={ruby} style={{width:"40px"}} alt="tech skill"/>
            <p>Ruby</p>
          </li>
          <li>
            <img src={ror} style={{width:"40px"}} alt="tech skill"/>
            <p>Ruby on Rails</p>
          </li>
          <li>
            <img src={git} style={{width:"40px"}} alt="tech skill"/>
            <p>Git</p>
          </li>
          <li>
            <img src={postgres} style={{width:"40px"}} alt="tech skill"/>
            <p>Postgres</p>
          </li>
          <li>
            <img src={MySQL} style={{width:"40px"}} alt="tech skill"/>
            <p>MySQL</p>
          </li>
          <li>
            <img src={restapi} style={{width:"40px"}} alt="tech skill"/>
            <p>REST API</p>
          </li>
        </div>
      </div>
    </div>
  )
}

export default Skills
