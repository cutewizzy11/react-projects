import React from 'react'
import Navbar from './components/Navbar/Navbar'

const App = () => {
  return (
    <div>
      <Navbar isLoggedIn={false} username="Wizzy Brass"/>
    </div>
  )
}

export default App