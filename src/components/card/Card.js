import React from 'react';

import './Card.css';

export default class Card extends React.Component {
  constructor(props) {
    super(props);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.editHandler = this.editHandler.bind(this);
    this.commentHandler = this.commentHandler.bind(this);
  }
  svgStyle = {
    width: '24px',
    height: '24px'
  }

  deleteHandler() {
    this.props.deleteHandler(this.props.cardId)
  }
  editHandler() {
    this.props.editHandler(this.props.cardId);
  }

  commentHandler() {
    this.props.commentHandler(this.props.cardId)
  }

  render() {
    return (
      <div>
        <div className="card dflex flexcolumn">
          <div className='cardTitle'>
            {this.props.title}
          </div>
          <div className="hrLine"></div>
          <div className="dflex flexrow alignVertical alignAround">
            <div onClick={this.props.deleteHandler}>
              <svg style={this.svgStyle} viewBox="0 0 24 24">
                <path fill="#000000" d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" />
              </svg>
            </div>
            <div onClick={this.editHandler}>
              <svg style={this.svgStyle} viewBox="0 0 24 24">
                <path fill="#000000" d="M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z" />
              </svg>
            </div>
            <div onClick={this.commentHandler}>
              <svg style={this.svgStyle} viewBox="0 0 24 24">
                <path fill="#000000" d="M9,22A1,1 0 0,1 8,21V18H4A2,2 0 0,1 2,16V4C2,2.89 2.9,2 4,2H20A2,2 0 0,1 22,4V16A2,2 0 0,1 20,18H13.9L10.2,21.71C10,21.9 9.75,22 9.5,22V22H9M10,16V19.08L13.08,16H20V4H4V16H10Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}