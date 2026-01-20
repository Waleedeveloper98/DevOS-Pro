import React from 'react'
import "./app.scss"
import Dock from './components/dock/Dock'
import Nav from './components/nav/Nav'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
    </main>
  )
}

export default App