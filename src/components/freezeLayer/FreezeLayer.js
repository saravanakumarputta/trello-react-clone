import React from 'react';
import './FreezeLayer.css';

export default class FreezeLayer extends React.Component {

  render() {
    return (
      <div className="dflex flexrow alignVertical alignHorizontal freezeLayer">
        {this.props.children}
      </div>
    )
  }
}