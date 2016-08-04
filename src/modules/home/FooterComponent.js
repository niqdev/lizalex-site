import React from 'react'
import imgGithub from './img/github-circle.png'
import imgInstagram from './img/instagram.png'

export default function FooterComponent() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <a href="https://github.com/niqdev/lizalex-site" target="_blank">
              <img src={imgGithub} alt="github" />
            </a>
            <a href="https://www.instagram.com/rivermanadventures" target="_blank">
              <img src={imgInstagram} alt="instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
