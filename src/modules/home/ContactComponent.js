import React from 'react'
import GoogleMap from 'google-map-react'
import { FormattedMessage } from 'react-intl'
import imgPlace from './img/place.png'

const API_KEY = 'AIzaSyCJbcOMVfXDmi3H5cl6_Du3x6Tt0h3GylE'
const Coordinates = { lat: 45.486038, lng: 9.204336 }

// https://snazzymaps.com/style/122/flat-map-with-labels
const mapOptions = {
  scrollwheel: false,
  styles: [{
    featureType: 'water',
    elementType: 'all',
    stylers: [
      { hue: '#7fc8ed' }, { saturation: 55 }, { lightness: -6 }, { visibility: 'on' }
    ]
  }, {
    featureType: 'water',
    elementType: 'labels',
    stylers: [
      { hue: '#7fc8ed' }, { saturation: 55 }, { lightness: -6 }, { visibility: 'off' }
    ]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      { hue: '#83cead' }, { saturation: 1 }, { lightness: -15 }, { visibility: 'on' }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'geometry',
    stylers: [
      { hue: '#f3f4f4' }, { saturation: -84 }, { lightness: 59 }, { visibility: 'on' }
    ]
  }, {
    featureType: 'landscape',
    elementType: 'labels',
    stylers: [
      { hue: '#ffffff' }, { saturation: -100 }, { lightness: 100 }, { visibility: 'off' }
    ]
  }, {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffffff' }, { saturation: -100 }, { lightness: 100 }, { visibility: 'on' }
    ]
  }, {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      { hue: '#bbbbbb' }, { saturation: -100 }, { lightness: 26 }, { visibility: 'on' }
    ]
  }, {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffcc00' }, { saturation: 100 }, { lightness: -35 }, { visibility: 'simplified' }
    ]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      { hue: '#ffcc00' }, { saturation: 100 }, { lightness: -22 }, { visibility: 'on' }
    ]
  }, {
    featureType: 'poi.school',
    elementType: 'all',
    stylers: [
      { hue: '#d7e4e4' }, { saturation: -60 }, { lightness: 23 }, { visibility: 'on' }
    ]
  }]
}

const Place = () => (
  <div className="place">
    <img src={imgPlace} alt="place" />
  </div>
)

export default function ContactComponent() {
  return (
    <section className="contact">
      <div className="container m-b-2">
        <div className="row">
          <div className="col-xs-12">
            <FormattedMessage id="contact.address" />
          </div>
          <div className="col-xs-12">
            <FormattedMessage id="contact.phone" />
          </div>
          <div className="col-xs-12">
            <FormattedMessage id="contact.email" />
          </div>
        </div>
      </div>
      <GoogleMap
        bootstrapURLKeys={{ key: API_KEY }}
        center={[Coordinates.lat, Coordinates.lng]}
        zoom={14}
        options={mapOptions}>
        <Place lat={Coordinates.lat} lng={Coordinates.lng} />
      </GoogleMap>
    </section>
  )
}
