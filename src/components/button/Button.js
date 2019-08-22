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
      <div>
        <button onClick={this.handleClick}
          className={`btn btn-primary ${this.props.disabled ? 'notAllowed' : 'pointer'}`}
          disabled={this.props.disabled}>
          {this.props.text}
        </button>
      </div>
    )
  }
}