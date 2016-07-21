import React from 'react'
import Slider from 'react-slick'
import placehold from './placehold_1900x700.png'

export default function HomeComponent() {
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
  return (
    <Slider {...settings}>
      <div><img src={placehold} alt="carousel-1" className="img-carousel" /></div>
      <div><img src={placehold} alt="carousel-2" className="img-carousel" /></div>
      <div><img src={placehold} alt="carousel-3" className="img-carousel" /></div>
    </Slider>
  )
}
