import React from 'react'
import { FormattedMessage } from 'react-intl'
import Carousel from './CarouselComponent'
import './home.scss'

export default function HomeComponent() {
  return (
    <div className="container-home">
      <Carousel />
      <div className="container">
        <FormattedMessage id="home" />
      </div>
    </div>
  )
}
