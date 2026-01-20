import React from 'react'
import "./dock.scss"

const Dock = () => {
  return (
    <footer id='dock'>
        <div className="icon github"><img src="./github.png" alt="" /></div>
        <div className="icon notes"><img src="./notes.png" alt="" /></div>
        <div className="icon pdf"><img src="./pdf.png" alt="" /></div>
        <div className="icon calendar"><img src="./calendar.png" alt="" /></div>
        <div className="icon spotify"><img src="./spotify.png" alt="" /></div>
        <div className="icon mail"><img src="./mail.png" alt="" /></div>
        <div className="icon link"><img src="./link.png" alt="" /></div>
        <div className="icon cli"><img src="./cli.png" alt="" /></div>
    </footer>
  )
}

export default Dock