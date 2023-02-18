import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Education from './Components/Education';
import Languages from './Components/Languages';
import PersonalInfo from './Components/PersonalInfo';
import Profile from './Components/Profile';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
import Social from './Components/Social';
import WorkExperience from './Components/WorkExperience';

function App() {
  const [data,setData] = useState({})

  useEffect(()=>{
    const URL = 'https://api.codemon.in/intern'
    axios.get(URL)
    .then(res=>setData(res.data.data))
    .catch(err=>console.log(err))
  },[])

  console.log(data)

  return (
   <div>
    {data.basicinfo &&  <div style={{display:'flex',justifyContent:'center'}}>
      <div style={{width:'1140px', marginTop:'50px',display:'flex'}}>
      <div style={{width:'700px',background:'#191919',padding: '40px'}}>
        <Profile info={data.basicinfo.intro}/>
        <WorkExperience experiences={data.professionalexperience}/>
        <Education educations={data.education}/>
        <Projects projects={data.projects}/>
      </div>
      <div style={{width:'440px',background:'#64BCE7',padding: '30px 40px'}}>
      <PersonalInfo profile={data.basicinfo}/>
      <Languages/>
      <Skills skills={data.skills.skills}/>
      <Social socials={data.social}/>
      </div>
      </div>
    </div>}
   </div>
  );
}

export default App;
