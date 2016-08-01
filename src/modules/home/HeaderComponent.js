import React from 'react'
import Slider from 'react-slick'
import { FormattedMessage } from 'react-intl'
// import placehold from './img/placehold_1900x700.png'

export default function HeaderComponent() {
  const settings = {
    arrows: false,
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    touchMove: true
  }
  // TODO iterate array
  return (
    <section className="header">
      <Slider {...settings}>
        <div><img src="http://res.cloudinary.com/niqdev/image/upload/v1470068480/demo2/DSC_0138_HDR.jpg" alt="carousel-1" className="img-carousel" /></div>
        <div><img src="http://res.cloudinary.com/niqdev/image/upload/v1470068486/demo2/DSC_0172-Modifica-3-Modifica.jpg" alt="carousel-2" className="img-carousel" /></div>
        <div><img src="http://res.cloudinary.com/niqdev/image/upload/v1470068487/demo2/DSC_0312.jpg" alt="carousel-3" className="img-carousel" /></div>
        <div><img src="http://res.cloudinary.com/niqdev/image/upload/v1470068484/demo2/DSC_0329_HDR_3.jpg" alt="carousel-4" className="img-carousel" /></div>
      </Slider>
      <div className="container">
        <div className="text-xs-center m-t-2">
          <h1><FormattedMessage id="home.title" /></h1>
          <p><FormattedMessage id="home.description" /></p>
        </div>
      </div>
      <hr className="m-y-3" />
    </section>
  )
}
