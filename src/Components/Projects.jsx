import React from 'react'

const Projects = ({projects}) => {
  return (
    <div>
        <h1 style={{color:'#64BCE7'}}>Projects</h1>
        {projects.map((project)=>{
            return <div key={project._id} style={{marginBottom:'30px'}}>
                <h2 style={{color:'white' ,margin: '0px'}}>{project.project}, {project.organisation}</h2>
                <p style={{color:'#999',margin: '0px'}}>{project.project_detail}</p>
                <div role="progressbar"
     aria-valuenow="65"
     aria-valuemin="0"
     aria-valuemax="100"
     style={{}}>
</div>
            </div>
        })}
    </div>
  )
}

export default Projects