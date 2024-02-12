import React from 'react'
import five from '../pages/img/5.png'
import six from '../pages/img/6.png'
import seven from '../pages/img/7.png'
import eigt from '../pages/img/8.png'
import nine from '../pages/img/9.png'
import ten from '../pages/img/10.png'
import './Work.scss'

function Work() {
  return (
    <div className='work'>
    <h1>Some concept works</h1>
    <div className='work-puc'>
    <img src={five} alt="" />
    <img src={six} alt="" />
    <img src={seven} alt="" />
    </div>
    <div className='work-puc'><img src={eigt} alt="" />
    <img src={nine} alt="" />
    <img src={ten} alt="" /></div>
    
</div>
  )
}

export default Work