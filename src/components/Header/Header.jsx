import React from 'react'
import Man from '../img/1.png'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
        <img src= {Man} alt="" />
        <h1>Welcome to my Portfolio 👋</h1>
        <p>I’m Mete. I’m 24-year-old. I’m a Digital Product Designer who prioritizes simplicity and usability. Currently, <br/>
             I'm Digital Product Designer on Norma. Formerly Enrich Mobile, ASDC, TalentMondo, and MobileUpp. <br/>
              I love working on side projects, trying to improve myself on SwiftUI and Webflow.</p>
        <h4><a href="https://wa.me/message/4OUZ2WX5G4IPM1">Contact Me</a></h4>
    </div>
  )
}

export default Header