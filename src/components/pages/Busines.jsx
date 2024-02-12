import React from 'react'
import bw from './pages-img/Bw.png'
import { FaArrowLeftLong } from "react-icons/fa6";
import One from './pages-img/21.png'
import Two from './pages-img/22.png'
import Three from './pages-img/23.png'
import '../pages/Busines.scss'
import Se from '../img/2.png'
import Ra from '../img/3.png'
import De from '../img/4.png'
import {NavLink} from 'react-router-dom'

function Busines() {
  return (
    <div className='Busines'>
      <div className='home'>
        <div className='what'>
          <nav>
          <h3 className='what-title'><NavLink to='/'><FaArrowLeftLong className='wicon'/>Back to home</NavLink></h3>
          </nav>        
          <img src={bw} alt="bw" />
          <h1>What is Businesswise</h1>
          <p>Businesswise freelance was a project where I worked as a designer. <br/>
           The main goal of businesswise is to gather podcasts in various <br/>
            categories for professional people.</p>
        </div>
      </div>     
      <div className='lider'>
        <div className='my'>
          <h2>Team</h2>
          <p>Vadi Efe  - Founder <br/>Metehan Kaya - Product <br/> Designer</p>
        </div>
        <div className='my'>
          <h2>My Role</h2>
          <p>I worked as a freelance Product <br/> Designer in the Businesswise <br/> project. </p>
        </div>
        <div className='my'>
          <h2>Goals</h2>
          <p>Bringing professional people <br/> together with various categories <br/> of podcasts.</p>
        </div>
      </div>
      <div className='search'>
        <div className='rame'>
          <img src={Se} alt="" />
          <h2>Research</h2>
          <p>Businesswise freelance was a <br/> 
          project where I worked as a <br/> designer. The main goal of <br />
           businesswise is to gather <br /> podcasts in various categories for <br />
            professional people.</p>
        </div>
        <div className='rame'>
            <img src={Ra} alt="" />
            <h2>Wireframe</h2>
            <p>Simple Scanner is an application <br />
             that we developed when I was <br />
             working at Enrich mobile. With <br />
              Simple scanner, you can scan <br />
               your documents and convert <br /> them to PDF</p>
        </div>
        <div className='rame'>
            <img src={De} alt="" />
            <h2>Design</h2>
            <p>Musix is a side project I prepared <br />
             in my spare time. Spotify and <br />
              Apple Music competitors. The <br />
               biggest advantage compared to <br />
                its competitors is that it provides <br /> higher sound quality.</p>
        </div>
      </div>
      <div className='busi '>
        <img src={One} alt="busines" />
        <img src={Two} alt="simple" />
         <img src={Three} alt="Muzic" />
      </div>
    </div>
  )
}

export default Busines