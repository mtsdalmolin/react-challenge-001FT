import React, { useMemo } from 'react'

import Button from '../Button'
import CalendarIcon from '../../assets/icons/calendar.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'
import TwitterIcon from '../../assets/icons/twitter.svg'
import HapuLogo from '../../assets/icons/hapu-logo-text.svg'

import './Footer.scss'

export default function Footer() {
  const links = useMemo(() => [
    {
      id: 1,
      url: '#',
      title:'Share Your Nanny'
    },
    {
      id: 2,
      url: '#',
      title:'Our Story'
    },
    {
      id: 3,
      url: '#',
      title:'Blog'
    },
    {
      id: 4,
      url: '#',
      title:'Terms & Privacy'
    },
  ], [])
  
  return (
    <footer>
      <h3>Become a nanny share host</h3>
      <p>Takes less than 5 minutes to get started</p>
      <Button className="create-nanny-share">
        <img src={CalendarIcon} alt="Calendar icon" />
        <div>
          <h5>Create Your Nanny Share</h5>
          <p>Takes less than 5 minutes</p>
        </div>
      </Button>
      <a href="#">Or browse local nanny-shares</a>
      <div className="links">
        <img src={HapuLogo} alt="Hapü logo text" />
        <div className="extra-links">
          {links.map(link => (
            <a key={link.id} href={link.url}>{link.title}</a>
          ))}
        </div>
        <div className="social-media">
          <a href="#"><img src={FacebookIcon} alt="Facebook icon" /></a>
          <a href="#"><img src={InstagramIcon} alt="Instagram icon" /></a>
          <a href="#"><img src={TwitterIcon} alt="Twitter icon" /></a>
        </div>
      </div>
      <div className="divider" />
      <div className="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</div>
    </footer>
  )
}