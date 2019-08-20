import React from 'react';

import './Board.css';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props)
    this.props.handleClick();
  }

  render() {
    return (
      <div className="board" onClick={this.handleClick}>
        <div className='boardTitle'>
          {this.props.title}
        </div>
      </div>
    )
  }
}