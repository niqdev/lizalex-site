import React from 'react'
import { FormattedMessage } from 'react-intl'
import Carousel from './CarouselComponent'
import Gallery from './GalleryComponent'
import './home.scss'

export default function HomeComponent() {
  return (
    <div className="container-home">
      <Carousel />
      <div className="container">
        <section className="section-home text-xs-center m-t-2">
          <h1><FormattedMessage id="home.title" /></h1>
          <p><FormattedMessage id="home.description" /></p>
        </section>
        <hr className="m-y-3" />
        <Gallery />
        <hr className="m-y-3" />
        <section className="section-info m-t-2">
          <div className="row">
            <div className="col-sm-1">bbb</div>
          </div>
        </section>
      </div>
    </div>
  )
}
