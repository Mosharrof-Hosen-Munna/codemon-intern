import React from 'react'

const WorkExperience = ({experiences}) => {
//   const date = 
//   console.log(date)
  return (
    <div style={{marginTop:'50px'}}>
        <h1 style={{color:'#64BCE7'}}>Professional Experience</h1>
        {experiences.map((experience)=><div key={experience._id} style={{marginBottom:'30px'}}>
            <div style={{color:'#999'}}>
                { new Date(experience.start_date).toDateString()} - {experience.currently_working ? 'present' : new Date(experience.end_date).toDateString()}, {experience.designation}
            </div>
            <h2 style={{color:'white',margin:'0'}}> {experience.organisation}  </h2>
            <ul style={{margin:'0',color:'#999'}}>
                <li>Fuga iusto, earum veniam consequatur modi, esse labore repellendus dolore consequuntur praesentium eligendi officiis, blanditiis assumenda dolores! Nobis blanditiis ut non commodi.</li>
                <li>Tempora quis id fugit nesciunt repellat explicabo veniam quam rem est? Deleniti, illo? Assumenda in velit ipsam non cumque laudantium sunt aut.</li>
                <li>Nobis fugit commodi officiis, exercitationem magni dicta omnis atque ex dignissimos! Labore qui saepe voluptate ut minus sint ullam delectus reprehenderit quaerat.</li>
            </ul>
        </div>)}
    </div>
  )
}

export default WorkExperience