import React from 'react'
import ProfilePic from "../assets/profilepic.png"
import {AiOutlineLine, AiFillLinkedin, AiFillGithub} from "react-icons/ai"
function Aboutme() {
  return (
    <>
    <div className="aboutme-container">
        <img src={ProfilePic} style={{width: "300px", borderRadius:"50px", margin:"0 auto"}} alt="my profile"/>
        <div className="aboutme-information">
          <p>HI THERE!  I'M</p>
          <h3><span>PABLO</span> RUBIO</h3>
          <p>Creative and detail-oriented <span style={{color:"blueviolet"}}>Web Developer</span> passionate about coding, crafting engaging digital experiences, and collaborative problem-solving.</p>
          <div style={{display:"flex", alignItems:"center", gap:"20px"}}>
            <a href="https://www.linkedin.com/in/pablo-rubio-monzo/" style={{fontSize:"30px"}} target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
            <a href="https://github.com/rmPablo1" style={{fontSize:"30px"}} target="_blank" rel="noreferrer"><AiFillGithub/></a>
          </div>
        </div>
    </div>
    <div className="aboutme-container2" id="aboutmeLine">
      <p style={{display:"flex", alignItems:"center", gap:"10px", fontSize:"10px"}}><AiOutlineLine style={{fontSize:"30px", color:"gray"}}/></p>
      <h3>ABOUT ME</h3>
      <div className="aboutme-description">
        <p>I am an adventurous and proactive individual who pursues new opportunities. I have a <span>passion</span> for
          coding and enjoy creating <span>impactful</span> digital experiences. Recently, I graduated from Le Wagon web development bootcamp,
          which demonstrates my <span>dedication</span> to learning and developing new skills.
          As a software developer, I possess <span>analytical</span>, <span>detail-oriented</span>, and <span>logical problem-solving</span> skills.
          Additionally, I am a <span>creative</span> thinker who enjoys developing <span>innovative</span> software solutions.
          I am <span>collaborative</span> and value working with others to achieve common goals. Overall,
          I am a <span>motivated and talented </span>individual who is well-suited for a career in software development.</p>
      </div>
    </div>
    </>
  )
}

export default Aboutme
