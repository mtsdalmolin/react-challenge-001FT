import React, { useMemo } from 'react'

import useFetch from '../../hooks/useFetch'
import Button from '../Button'

import ImageFirstSection from '../../assets/images/image-section-1.png'
import ImageThirdSection from '../../assets/images/image-section-3.png'
import ImageFourthSection from '../../assets/images/image-section-4.png'
import ImageFifthSection from '../../assets/images/image-section-5.png'

import './PageContent.scss'

export default function PageContent() {
  const { response, isLoading, request } = useFetch('/challenge-newsletter', 'POST')

  const formFields = useMemo(() => [
    {
      type: 'text',
      name: 'name',
      placeholder: 'Your name'
    },
    {
      type: 'email',
      name: 'email',
      placeholder: 'Your email'
    },
  ], [])

  const onSubmit = evt => {
    evt.preventDefault()

    request({
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: evt.target.name.value,
        email: evt.target.email.value
      })
    })
  }

  return (
    <main>
      <section role="content">
        <article>
          <h3>Share your home, nanny and costs</h3>
          <p>You have a fantastic home, a fantastic nanny and wouldn’t cutting your costs in half be, well, fantastic?! If only it was easy to connect with other parents to share your costs? Well now it is, with Hapu. <a href="#">Hapu means tribe</a> and it’s our foundational 3 tribal principles that empowers you to create and manage your own tribe. A tribe that together has the power to create new affordable solutions in childcare that work for you and your community.</p>
          <a href="#">Ready to get started?</a>
        </article>
        <img src={ImageFirstSection} alt="A laptop running Hapü app" />
      </section>

      <div className="divider" />
      
      <section role="newsletter">
        <h4>Are you a parent without a nanny and looking to share?</h4>
        <p>Leave us your name and email and we’ll update you as soon as a share becomes available in your area!</p>
        <form onSubmit={onSubmit}>
          {formFields.map(field => (  
            <input
              key={field.name}
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              required
            />
          ))}
          <Button
            type="submit"
            error={response.error}
            loading={isLoading}
          >
            {response.error ? response.data.detail : 'Send'}
          </Button>
        </form>
      </section>
      
      <div className="divider" />
      
      <section role="payments">
        <img src={ImageThirdSection} alt="Hapü shared payment options" />
        <article>
          <h3>Shared payments made simple</h3>
          <p>Sometimes it’s hard enough just sharing a restaurant bill. Try sharing that bill week in, week out and you might encounter more than a few snares. But not with Hapu. Simply set your rates and our automated payment system takes care of the rest. You need never talk money or who owes what.</p>
          <a href="#">Read how Bridget’s share (without Hapu) ended over $15</a>
        </article>
      </section>
      
      <div className="divider" />
      
      <section role="billing-history">
        <article>
          <h3>A framework built for the long term</h3>
          <p>Childcare is for the long term. And you need a framework you can count on that gives your share long term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly defined process, transparency over money and equality of participation.</p>
          <a href="#">Read how Hapu’s tribal background defines our app </a>
        </article>
        <img src={ImageFourthSection} alt="Hapü billing history table screenshot" />
      </section>

      <div className="divider" />
      
      <section role="coming-soon">
        <img src={ImageFifthSection} alt="Notepad and tablet icons with baby faces inside them" />
        <article>
          <h3>Coming soon: Nanny Share Daily Diary!</h3>
          <p>With the Hapu daily diary your nanny will be able to update you and your sharers with photos and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the daily adventures fo your little ones. We can’t wait!</p>
        </article>
      </section>
    </main>
  )
}