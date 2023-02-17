import React from 'react'

const PersonalInfo = ({profile}) => {
    const {firstName,lastName,email,city,state,phone,profile_pic} = profile
  return (
    <div>
        <div>
            <h1>{`${firstName} ${lastName}`}</h1>
            <div style={{textAlign:'center'}}>
            <img style={{width:'130px',height:'130px',borderRadius:'50%',objectFit:'cover',margin:'auto 0 '}} src={profile_pic} alt="" />
            </div>
        </div>
        <div>
            <h3>Personal Info</h3>
            
            <div style={{color:'white', marginBotton:'3px'}}>
                <div>

                </div>
                <div>
                    {`${city}, ${state} `}
                </div>
            </div>
            <div style={{color:'white', marginBotton:'3px'}}>
                <div>

                </div>
                <div>
                    {phone}
                </div>
            </div>
            <div style={{color:'white', marginBotton:'3px'}}>
                <div>

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