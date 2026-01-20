import React from 'react'
import "./dock.scss"

const Dock = () => {
  return (
    <footer id='dock'>
        <div className="icon github"><img src="./dock-icons/github.png" alt="" /></div>
        <div className="icon notes"><img src="./dock-icons/notes.png" alt="" /></div>
        <div className="icon pdf"><img src="./dock-icons/pdf.png" alt="" /></div>
        <div className="icon calendar"><img src="./dock-icons/calendar.png" alt="" /></div>
        <div className="icon spotify"><img src="./dock-icons/spotify.png" alt="" /></div>
        <div className="icon mail"><img src="./dock-icons/mail.png" alt="" /></div>
        <div className="icon link"><img src="./dock-icons/link.png" alt="" /></div>
        <div className="icon cli"><img src="./dock-icons/cli.png" alt="" /></div>
    </footer>
  )
}

export default Dock