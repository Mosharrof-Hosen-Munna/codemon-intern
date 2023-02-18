import React from 'react'

const Education = ({educations}) => {
  return (
    <div>
        <h1 style={{color:'#64BCE7'}}>Education</h1>
        {educations.map((education)=><div style={{marginBottom:'30px'}}>
            <div style={{color:'#999'}}>
            { new Date(education.start_date).toDateString()} - {new Date(education.end_date).toDateString()},  
            { education.college}
        </div>
            <h2 style={{color:'white',margin:'0'}}> {education.class}  </h2>
            <p style={{color:'#999',margin:'0'}}>{education.about_college}</p>
        </div>)}
    </div>
  )
}

export default Education