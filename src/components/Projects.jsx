import React from 'react'
import ProjectCard from './ProjectCard'
import rentalCar from "../assets/rentalcar.png"
import blog from "../assets/blog.png"
import movies from "../assets/movies.png"
import weekend from "../assets/weekend.png"
import {AiOutlineLine} from "react-icons/ai"
import noimage from "../assets/noimage.png"
function Projects() {
  const projects = [
    {
      image: rentalCar,
      title: "Rental Car Landing Page",
      stack: "HTML, CSS, Tailwind CSS, Javascript, React, Redux",
      description: <><li>Built using React Hooks and custom components</li>
        <li>Good looking website with responsive design that fits every device</li>
        <li>Used a mix of Tailwind CSS to speed up the process and CSS to style the responsiveness</li></>,
      live: "https://rmpablo1.github.io/rental/",
      repo: "https://github.com/rmPablo1/rental"
    },
    {
      image: blog,
      title: "Blog website project",
      stack: "HTML, CSS, JavaScript, React, NodeJS, ExpressJS, JWT, SendGrid, MongoDB, Mongoose",
      description: <><li>Built using the MERN stack</li>
      <li>Minimalist website done to showcase my skills with backend development</li>
      <li>Implemented authentication and authorization system using JWTs with MongoDB backend using Mongoose as an ODM and React as a frontend library</li>
      </>,
      live: "https://frontendblogapps.onrender.com/",
      repo: "https://github.com/rmPablo1/fullstack-projects"
    }
    ,
    {
      image: movies,
      title: "Movie API",
      stack: "HTML, CSS, JavaScript, React, Redux, Axios, AsyncThunks, Rest API",
      description: <><li>Built using React Hooks</li>
        <li>Used the OMDbApi to retrieve the movies depending on the input of the user</li>
        <li>The website does a second request when clicking on a movie image which opens a modal with more info about the movie</li></>,
      live: "https://rmpablo1.github.io/movies/",
      repo: "https://github.com/rmPablo1/movies"
    },
    {
      image: weekend,
      title:"Weekend",
      stack: "HTML, CSS, Bootstrap, JavaScript, Ruby on Rails, ActiveRecord, Google Authentication, PostgreSQL, REST API",
      description: <>
        <li>Users are able to login either with their Google Accounts and also with their normal accounts (disabled until Google verifies our app)</li>
        <li>I used the Google Calendar API to retrieve the events from the users </li>
        <li>By storing the events on the Database the users are able to see when their friends are available and they can schedule an event that will spread on their friends calendar</li>
      </>,
      live: "www.weekend.ink",
      repo: "https://github.com/rmPablo1/weekend"
    },
    {
      image: noimage,
      title: "Watchlist",
      stack: "HTML, CSS, Bootstrap, JavaScript, Ruby on Rails, PostgreSQL, ActiveRecord, Cloudinary",
      description: <>
        <li>First project I did where the users are able to create their favourtie movie lists and fill them with the movies they want giving a review to it</li>
        <li>Other users can look for your lists by introducing your email</li>
        <li>You are able to review other users list</li>
      </>,
      repo: "https://github.com/rmPablo1/rails-watch-list"
    }
  ]

  const renderedProjects = projects.map((project) => {
    return <ProjectCard image={project.image} title={project.title} stack={project.stack} description={project.description} live={project.live} repo={project.repo} />
  })
  return (
    <div className="projects-container" id="projectsLine">
      <p style={{display:"flex", alignItems:"center", gap:"10px", fontSize:"10px"}}> <AiOutlineLine style={{fontSize:"30px", color:"gray"}}/></p>
      <h3>PROJECTS</h3>
      <div className="projectcard-container">
        {renderedProjects}
      </div>
    </div>
  )
}

export default Projects
