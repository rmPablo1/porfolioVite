import React from 'react'
import {GoMail} from "react-icons/go"
import {AiOutlineLine} from "react-icons/ai"

function Contact() {
  const handleSubmit = (event) =>{
    document.getElementById("myForm").reset();
  }
  return (
    <div className="contact-container" id="contactLine">
      <p style={{display:"flex", alignItems:"center", gap:"10px", fontSize:"10px"}}><AiOutlineLine style={{fontSize:"30px", color:"gray"}}/></p>
      <h3>CONTACT</h3>
      <div className="contact-inner">
        <p>Get in Touch</p>
        <div className="contact-cards">
          <div className="mail-card">
            <p style={{fontSize:"35px", color:"blueviolet", marginBottom:"5px"}}><GoMail/></p>
            <a href="mailto:pablorubiiimonzo@gmail.com">pablorubiiimonzo@gmail.com</a>
            <p>Email Me</p>
          </div>
        </div>
        <div className="contact-form">
          <h3>Contact Form</h3>
          <form onSubmit={handleSubmit} id="myForm" target="_blank" action="https://formsubmit.co/pablorubiiimonzo@gmail.com" method="POST">
            <div style={{display: "flex", gap:"15px"}}>
              <input type="text" name="name" placeholder="Your Name*" required/>
              <input type="email" name="email" placeholder="john@mail.com" required />
            </div>
            <input type="text" name="subject" placeholder="Subject*" required />
            <input type="textarea" name="message" placeholder="Your Message*" required />
            <button type="submit" className="aboutme-button">SEND</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
