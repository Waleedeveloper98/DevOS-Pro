import React from 'react'
import "./app.scss"
import Dock from './components/dock/Dock'
import Nav from './components/nav/Nav'
import Github from './components/windows/Github'
import Note from './components/windows/Note'
import Resume from './components/windows/Resume'

const App = () => {
  return (
    <main>
      <Nav />
      <Dock />
      {/* <Github /> */}
      {/* <Note /> */}
      <Resume />
    </main>
  )
}

export default App