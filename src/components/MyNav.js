import React, {Component} from 'react';
import {Link, IndexLink} from 'react-router';

export default class MyNav extends Component {
  render() {
    const ACTIVE = {color: 'red'};
    return (
      <div>
        <ul>
          <li><Link to="/" activeStyle={ACTIVE}>/</Link></li>
          <li><IndexLink to="/" activeStyle={ACTIVE}>IndexLink</IndexLink></li>
          <li><Link to="/gallery" activeStyle={ACTIVE}>Gallery</Link></li>
        </ul>
      </div>
    );
  }
}
