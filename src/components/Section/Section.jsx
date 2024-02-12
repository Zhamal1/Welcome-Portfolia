import React from 'react'
import Busines from '../img/2.png'
import Simple from '../img/3.png'
import Musix from '../img/4.png'
import './Section.scss'

import {NavLink} from 'react-router-dom'

function Section() {
  return (
    <div className='section'>
      <div className='section-two'>
    <div className='busines'>
      <img src={Busines} alt="" />
        <h1>Businesswise</h1>
        <p>Businesswise freelance was a <br/> 
        project where I worked as a <br/> 
        designer. The main goal of <br/>
         businesswise is to gather <br/>
          podcasts in various categories for <br/>
           professional people.</p> 
           <nav>
            <NavLink to='/busines'>See All</NavLink>
           </nav>
    </div>
    
  
    <div className='simple '>
        <img src={Simple} alt="" /> 
        <h1>Simple Scanner</h1>
        <p>Simple Scanner is an application <br/>
         that we developed when I was <br/>
          working at Enrich mobile. With <br/>
          Simple scanner, you can scan <br/>
           your documents and convert <br/> them to PDF</p>
           <nav>
            <NavLink to='/simple'>Coming soon</NavLink>
           </nav>
    </div>
    <div className='musix'>
        <img src={Musix} alt="" />
        <h1>Musix</h1>
        <p>Musix is a side project I prepared <br/>
         in my spare time. Spotify and <br/>
          Apple Music competitors. The <br/>
           biggest advantage compared to <br/>
            its competitors is that it provides <br/>
             higher sound quality.</p>
           <nav>
            <NavLink to='/muzic'>See All</NavLink>
           </nav>
      
    </div>
    </div>
    </div>
  )
}

export default Section