import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <div className='footer'>
        <div className='made'>
            <h4>Made ❤️ with Webflow</h4>
        </div>
        <div className='link'>
          <ul className='list'>
            <li>dribbble</li>
            <li>linkedin</li>
            <li>twitter</li>
            <li>instagram</li> 
          </ul>
        </div>
    </div>
  )
}

export default Footer