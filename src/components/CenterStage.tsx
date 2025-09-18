import React from 'react'
import './CenterStage.css';
import Nameplate from './Nameplate';
import About from './About';

export default function CenterStage() {
  return (
    <div className='center-stage-wrapper'>
      <Nameplate />
      <About />
    </div>
  )
}
