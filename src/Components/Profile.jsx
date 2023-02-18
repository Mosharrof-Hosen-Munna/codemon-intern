import React from 'react'

const Profile = ({info}) => {
  return (
    <div>
        <h1 style={{color:'#64BCE7'}}>Profile</h1>
        <p style={{color:'#999'}}>{info}</p>
    </div>
  )
}

export default Profile