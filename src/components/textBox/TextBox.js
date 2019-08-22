import React from 'react';

import './TextBox.css';

export default class TextBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnChange(event) {
    this.props.handleOnChange(event.target.value);
  }

  handleOnKeyUp(event) {
    this.props.handleOnKeyUp && this.props.handleOnKeyUp(event.keyCode)
  }

  render() {
    return (
      <div>
        <input type="text" className="input" onKeyUp={this.handleOnKeyUp} onChange={this.handleOnChange} placeholder={this.props.placeholderText} value={this.props.value} />
      </div>
    )
  }
}