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
    touchMove: true,
    lazyLoad: true
  }

  const imageSrc = [
    'https://res.cloudinary.com/niqdev/image/upload/v1470068480/demo2/DSC_0138_HDR.jpg',
    'https://res.cloudinary.com/niqdev/image/upload/v1470068486/demo2/DSC_0172-Modifica-3-Modifica.jpg',
    'https://res.cloudinary.com/niqdev/image/upload/v1470068487/demo2/DSC_0312.jpg',
    'https://res.cloudinary.com/niqdev/image/upload/v1470068484/demo2/DSC_0329_HDR_3.jpg'
  ]

  const images = imageSrc.map((img, index) => {
    return <div><img src={img} alt={`carousel-${index}`} className="img-carousel" /></div>
  });
  return (
    <section className="header">
      <Slider {...settings}>{images}</Slider>
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
