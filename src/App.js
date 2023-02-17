import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Languages from './Components/Languages';
import PersonalInfo from './Components/PersonalInfo';
import Skills from './Components/Skills';
import Social from './Components/Social';

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
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia hic soluta consectetur quam nam ex quisquam sapiente repudiandae at provident aut alias, qui facilis quo. Neque ad perspiciatis enim ullam! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
      </div>
      <div style={{width:'440px',background:'#64BCE7',padding: '40px'}}>
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
