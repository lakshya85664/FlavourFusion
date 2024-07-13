import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './Home.js'
import About from './About.js'
import Profile from './Profile.js';

const Main = () => {
  return (
    <div className='bg-white flex flex-col min-h-screen'>
      <Routes>
              <Route path="/" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/profile" Component={Profile} />
      </Routes>
    </div>
  )
}

export default Main