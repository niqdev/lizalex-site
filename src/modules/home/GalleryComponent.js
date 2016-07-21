import React, { PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import placehold from './img/placehold_318x180.png'

function CardInfo({ imgSrc, imgAlt, msgId }) {
  return (
    <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4">
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
          <CardInfo imgSrc={placehold} imgAlt="info1" msgId="gallery.info1" />
          <CardInfo imgSrc={placehold} imgAlt="info2" msgId="gallery.info2" />
          <CardInfo imgSrc={placehold} imgAlt="info3" msgId="gallery.info3" />
        </div>
      </div>
      <hr className="m-y-3" />
    </section>
  )
}
