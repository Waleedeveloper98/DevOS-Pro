import React from 'react'
import "./app.scss"
import Dock from './components/dock/Dock'
import Nav from './components/nav/Nav'
import Github from './components/windows/Github'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      <Github />
    </main>
  )
}

export default App