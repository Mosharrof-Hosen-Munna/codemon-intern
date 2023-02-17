import React from 'react'

const Skills = ({skills}) => {
  return (
    <div>
        <h1>
            Skills
        </h1>
        {skills.map((skill)=><div key={skill._id}>

            
<h3>{skill.title}</h3>

</div>)}
    </div>
  )
}

export default Skills