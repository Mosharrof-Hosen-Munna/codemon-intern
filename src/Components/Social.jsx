import React from 'react'

const Social = ({socials}) => {
    const {github,skype,website,linkedin } = socials
  return (
    <div>
        <h1>Social</h1>
        <div>
            <div>
                <h3>{linkedin}</h3>
            </div>
            <div>
                <h3>{github}</h3>
            </div>
            <div>
                <h3>{skype}</h3>
            </div>
            <div>
                <h3>{website}</h3>
            </div>
        </div>
    </div>
  )
}

export default Social