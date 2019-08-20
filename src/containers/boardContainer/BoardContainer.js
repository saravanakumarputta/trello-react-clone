import React from 'react';
import Board from '../../components/board/Board';
import './BoardContainer.css';

export default class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.goToBoardDetailPage = this.goToBoardDetailPage.bind(this);
  }

  goToBoardDetailPage() {
    console.log(this.props)
    this.props.history.push('/boards/123');
  }
  render() {
    return (
      <div className="dflex flexrow flexwrap boardContainer">
        <Board title="asdasd" handleClick={this.goToBoardDetailPage} />

      </div>
    )
  }

}