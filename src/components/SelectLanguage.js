import React, {Component, PropTypes} from 'react'

export default class SelectLanguage extends Component {
  render() {
    const {value, onChange, options} = this.props;
    /*
     {options.map(option =>
     <option value={option.value} key={option.key}>
     {option}
     </option>)
     }
     */

    return (
      <div>
        <h1>{value}</h1>
        <select
          onChange={e => onChange(e.target.value)}
          value={value}>
          <option value="it">IT</option>
          <option value="en">EN</option>
        </select>
      </div>
    );
  }
}

SelectLanguage.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: React.PropTypes.array.isRequired,
  value: React.PropTypes.string
};
