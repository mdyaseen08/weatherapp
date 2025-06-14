import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WeatherApi from './weatherapi'
import './index.css';


function App() {

  return (
    <>
     <div className="background"></div> {/* Animated Background */}
      <div className='overall'>
        <WeatherApi />
      </div>
    </>
  )
}

export default App
