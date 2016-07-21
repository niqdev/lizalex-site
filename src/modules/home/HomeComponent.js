import React from 'react'
import Header from './HeaderComponent'
import Gallery from './GalleryComponent'
import Contact from './ContactComponent'
import Footer from './FooterComponent'
import './home.scss'

export default function HomeComponent() {
  return (
    <div className="container-home">
      <Header />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  )
}
