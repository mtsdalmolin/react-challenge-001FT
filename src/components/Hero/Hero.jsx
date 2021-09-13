import React, { useMemo } from 'react'

import useLocalStorage from '../../hooks/useLocalStorage'

import ImageHeader from '../../assets/images/image-header.png'

import './Hero.scss'

const RANDOM_CHECKER = Math.floor(Math.random() * 100)

export default function Hero() {
  const [heroSectionData] = useLocalStorage(
    RANDOM_CHECKER % 2 === 0
      ? {
        title: 'Easily create or join a local nanny share with Hapu',
        description: 'Hapu is Airbnb for nanny share. Share your home, nanny and costs and create new flexible, affordable solutions in childcare.'
      }
      : {
        title: 'Create the childcare you need at a price you can afford',
        description: 'Connect with other local families to share a nanny from as low as $10.00/hr each. Create your family profile today to get started.'
      }
  , '@hapu:hero-section-data')
  
  return (
    <section role="hero">
      <div className="background-filter">
        <h5>Family having a good time while cooking</h5>
      </div>
      <div className="hero-content">
        <div className="hero-info">
          <h1>{heroSectionData.title}</h1>
          <p>{heroSectionData.description}</p>
          <div className="hero-play-button">
            <a href="#">See hapu in action (27 seconds)</a>
          </div>
        </div>
        <img src={ImageHeader} alt="Card with congratulations message" />
      </div>
    </section>
  )
}