import React from 'react';

export default class BoardDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>{this.props.match.params.id}</div>
    )
  }
}