import React from 'react';

import './Button.css';

export default class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleClick();
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <button className="btn btn-primary">{this.props.text}</button>
      </div>
    )
  }
}