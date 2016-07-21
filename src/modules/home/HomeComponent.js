import React from 'react'
import { FormattedMessage } from 'react-intl'
import Carousel from './CarouselComponent'
import Gallery from './GalleryComponent'
import Map from './MapComponent'
import './home.scss'

export default function HomeComponent() {
  return (
    <div className="container-home">
      <Carousel />
      <div className="container">
        <div className="text-xs-center m-t-2">
          <h1><FormattedMessage id="home.title" /></h1>
          <p><FormattedMessage id="home.description" /></p>
        </div>
        <hr className="m-y-3" />
        <Gallery />
        <hr className="m-y-3" />
      </div>
      <Map />
    </div>
  )
}
