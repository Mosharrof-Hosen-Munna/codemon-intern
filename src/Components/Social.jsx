import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'


const Social = ({socials}) => {
    const {github,skype,website,linkedin } = socials
  return (
    <div>
        <h1>Social</h1>
        <div style={{color:'white'}}>
            <div style={{display:'flex',alignItems:'center'}}>
                <FontAwesomeIcon icon={faEnvelope} />
                 
                <h3 style={{marginLeft:'10px'}}>{linkedin}</h3>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <FontAwesomeIcon icon={faEnvelope} />
           
                <h3 style={{marginLeft:'10px'}}>{github}</h3>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
                <FontAwesomeIcon icon={faEnvelope} />
                <h3 style={{marginLeft:'10px'}}>{skype}</h3>
            </div>
            <div style={{display:'flex',alignItems:'center'}}>
            <FontAwesomeIcon icon={faEnvelope} />

                <h3 style={{marginLeft:'10px'}}>{website}</h3>
            </div>
        </div>
    </div>
  )
}

export default Social