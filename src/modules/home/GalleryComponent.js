import React from 'react'
import { FormattedMessage } from 'react-intl'
import placehold from './placehold_318x180.png'

export default function GalleryComponent() {
  return (
    <section className="section-gallery m-t-2">
      <div className="row">
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4">
          <div className="card">
            <img className="card-img-top" src={placehold} alt="info1" />
            <div className="card-block">
              <p className="card-text">
                <FormattedMessage id="gallery.info1" />
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4">
          <div className="card">
            <img className="card-img-top" src={placehold} alt="info2" />
            <div className="card-block">
              <p className="card-text">
                <FormattedMessage id="gallery.info2" />
              </p>
            </div>
          </div>
        </div>
        <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0 col-md-4">
          <div className="card">
            <img className="card-img-top" src={placehold} alt="info3" />
            <div className="card-block">
              <p className="card-text">
                <FormattedMessage id="gallery.info3" />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
