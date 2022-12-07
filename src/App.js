import Header from './Header.js'
import React from 'react'
import SideNav from './SideNav.js'
import './App.css'
import Body from './Body.js'

function App() {
  return (
    <div className="main">
      <Header/>
      <div className="body">
      <SideNav />
      <Body/>
      </div>
    </div>
  )
}

export default App
