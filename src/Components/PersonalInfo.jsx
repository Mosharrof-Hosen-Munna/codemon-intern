import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faEnvelope, faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons'

const PersonalInfo = ({profile}) => {
    const {firstName,lastName,email,city,state,phone,profile_pic} = profile
  return (
    <div>
        <div>
            <h1 style={{fontSize:'55px'}}>{`${firstName} ${lastName}`}</h1>
            <div style={{textAlign:'center'}}>
            <img style={{width:'150px',height:'150px',borderRadius:'50%',objectFit:'cover',margin:'auto 0 '}} src={profile_pic} alt="" />
            </div>
        </div>
        <div>
            <h1>Personal Info</h1>
            
            <div style={{color:'white', marginBotton:'5px',display:'flex',}}>
                <div style={{marginRight:'20px'}}>
                <FontAwesomeIcon icon={faLocationDot} />

                </div>
                <div>
                    {`${city}, ${state} `}
                </div>
            </div>
            <div style={{color:'white', marginBotton:'5px',display:'flex',}}>
                <div style={{marginRight:'20px'}}>
                <FontAwesomeIcon icon={faPhone} />

                </div>
                <div>
                    {phone}
                </div>
            </div>
            <div style={{color:'white', marginBotton:'3px',display:'flex',}}>
                <div style={{marginRight:'20px'}}>
                <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div>
                    {email}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo