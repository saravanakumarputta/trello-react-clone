import React from 'react';

import './ListContainer.css';

import Card from '../../components/card/Card'

export default class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleDelClick = this.handleDelClick.bind(this);
  }

  svgStyle = {
    width: '24px',
    height: '24px'
  }
  handleDelClick() {
    this.props.deleteHandler(this.props.listId)
  }
  render() {
    return (
      <div className="dflex flexcolumn h100 listContainer marginR20">
        <div className="flexshrink">
          <div className="dflex flexrow alignVertical listHeader">
            <div className="flexgrow">{this.props.title}</div>
            <div className="flexshrink pointer" onClick={this.handleDelClick}>
              <svg style={this.svgStyle} viewBox="0 0 24 24">
                <path fill="#000000" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flexgrow overflow-y-auto">
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
          <Card title="asd" />
        </div>
      </div>
    )
  }
}
