import React from 'react'

import ProfileImage from '../../assets/images/profile-image.png'

import './Rectangle.scss'

export default function Rectangle() {
  return (
    <section role="rectangle">
      <img src={ProfileImage} alt="Old woman profile picture displayed in a rounded frame" />
      <a href="#">Sara's day care available now in North Sydney</a>
      <p>Wednesday, Thursday, Friday - 7:30 - 5:30</p>
    </section>
  )
}