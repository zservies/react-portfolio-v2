import { useState } from 'react'
import './App.css'
import CenterStage from './components/CenterStage'
import Header from './components/Header'

function App() {

  return (
    <div className='app-wrapper'>
      <Header />
      <CenterStage />
    </div>
  )
}

export default App
