import React from 'react';

import './TextBox.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleOnKeyUp(event) {
    this.props.handleOnKeyUp(event.target.value);
  }

  render() {
    return (
      <div>
        <input type="text" className="input" onChange={this.handleOnKeyUp} placeholder={this.props.placeholderText} value={this.props.value} />
      </div>
    )
  }
}