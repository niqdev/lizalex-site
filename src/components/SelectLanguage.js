import React, {Component, PropTypes} from 'react'
import {FormattedMessage} from 'react-intl';

export default class SelectLanguage extends Component {
  render() {
    const {value, onChange, options} = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <select
          onChange={e => onChange(e.target.value)}
          value={value}>
          {options.map(option =>
            <option value={option.key} key={option.key}>
              {option.value}
            </option>
          )}
        </select>
        <FormattedMessage id="home.myId" defaultMessage="myDefaultMessage"/>
      </div>
    );
  }
}

SelectLanguage.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: React.PropTypes.array.isRequired,
  value: React.PropTypes.string
};
