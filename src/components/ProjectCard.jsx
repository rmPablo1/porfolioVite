import React from 'react'

function ProjectCard({title,image, stack, description, live, repo}) {
  return (
    <div className="card">
      <img src={image} alt="project"/>
      <div className="card-information">
        <span style={{fontSize:"20px", fontWeight:"bold"}}>{title}</span>
        <p>Technologies used: <span style={{color:"blueviolet"}}>{stack}</span> </p>
        <span style={{display:"flex", flexDirection:"column", gap:"10px"}}>{description}</span>
        <div style={{display:"flex", marginTop:"15px", gap:"15px"}}>
          {live && <a style={{color:"blueviolet"}} href={live} rel="noreferrer" target="_blank">Live</a>}
          <a style={{color:"blueviolet"}} href={repo} rel="noreferrer" target="_blank">Repo</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
