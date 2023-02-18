import React from "react";

const Skills = ({ skills }) => {
  return (
    <div>
      <h1>Skills</h1>
      {skills.map((skill) => (
        <div key={skill._id}>
          <h3 style={{width:'100%',margin: '10px 0',color:'white'}}>{skill.title}</h3>
          <progress style={{width:'100%'}} id="file" value="90" max="100"> 32% </progress>
        </div>
      ))}
    </div>
  );
};

export default Skills;
