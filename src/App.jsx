import React from 'react'
import "./app.scss"
import Dock from './components/dock/Dock'
import Nav from './components/nav/Nav'
import MacWindow from './components/windows/MacWindow'

const App = () => {
  return (
    <main>
      <MacWindow />
      <Nav />
      <Dock />
    </main>
  )
}

export default App