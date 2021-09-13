import React from 'react'

import Button from '../Button'
import HapuLogo from '../../assets/icons/hapu-logo.svg'
import './AppBar.scss'

export default function Appbar() {
  return (
    <header className="topbar">
      <div className="hapu-logo-badge">
        <img src={HapuLogo} alt="Hapu logo in white" />
      </div>
      <nav>
        <a href="#">Create Your Nanny Share</a>
        <a href="#">Browse Shares</a>
        <a href="#">Our Story</a>
        <Button>Become a Nanny Share Host</Button>
        <a href="#">Sign In</a>
      </nav>
    </header>
  )
}