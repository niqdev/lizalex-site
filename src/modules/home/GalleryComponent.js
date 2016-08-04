import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import placehold from './img/placehold_318x180.png'

function CardInfo({ imgSrc, imgAlt, msgId }) {
  return (
    <div className="col-sm-6 col-sm-offset-0 col-md-4">
      <div className="card">
        <img className="card-img-top" src={imgSrc} alt={imgAlt} />
        <div className="card-block">
          <p className="card-text">
            <FormattedMessage id={msgId} />
          </p>
        </div>
      </div>
    </div>
  )
}

CardInfo.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
  msgId: PropTypes.string.isRequired
}

export default function GalleryComponent() {
  return (
    <section className="gallery">
      <div className="container">
        <div className="row m-t-2">
          <CardInfo imgSrc={placehold} imgAlt="house" msgId="gallery.info1" />
          <CardInfo imgSrc={placehold} imgAlt="view" msgId="gallery.info2" />
          <CardInfo imgSrc={placehold} imgAlt="room" msgId="gallery.info3" />
          <CardInfo imgSrc={placehold} imgAlt="bath" msgId="gallery.info4" />
          <CardInfo imgSrc={placehold} imgAlt="kitchen" msgId="gallery.info5" />
          <CardInfo imgSrc={placehold} imgAlt="badminton" msgId="gallery.info6" />
        </div>
        <div className="row m-t-2">
          <div className="col-sm-10 col-sm-offset-1">
            <p><FormattedMessage id="gallery.description1" /></p>
            <p><FormattedMessage id="gallery.description2" /></p>
            <p><FormattedMessage id="gallery.description3" /></p>
            <p><FormattedMessage id="gallery.description4" /></p>
            <p><FormattedMessage id="gallery.description5" /></p>
            <p><FormattedMessage id="gallery.description6" /></p>
            <p><FormattedMessage id="gallery.description7" /></p>
          </div>
        </div>
      </div>
      <hr className="m-y-3" />
    </section>
  )
}
