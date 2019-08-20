import React from 'react';
import { connect } from 'react-redux';

import Board from '../../components/board/Board';
import Button from '../../components/button/Button';
import TextBox from '../../components/textBox/TextBox';
import './BoardContainer.css';

import { addBoard } from '../../actions/BoardActions';
import { normalize } from '../../helpers/utils';

class BoardContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      boardTitle: ''
    }
    this.goToBoardDetailPage = this.goToBoardDetailPage.bind(this);
    this.boardTitleChange = this.boardTitleChange.bind(this);
    this.addBoard = this.addBoard.bind(this);
  }

  goToBoardDetailPage(boardId) {
    this.props.history.push(`/boards/${boardId}`);
  }

  boardTitleChange(title) {
    this.setState({
      boardTitle: title
    })
  }

  addBoard() {
    let id = new Date().getTime().toString();
    let boardData = {
      id: id,
      title: this.state.boardTitle,
      desc: this.state.boardDescription,
      listIds: [],
    };
    this.props.addBoard({
      board: {
        [id]: boardData,
      },
      boardId: id,
    });

    this.setState({
      boardTitle: ''
    })
  }

  render() {
    let { boards } = this.props;
    boards = normalize(boards);
    return (
      <div className="dflex flexcolumn h100 margin10 boardContainer">
        <div className="flexshrink margin10 maxwd400">
          <div className="dflex flexrow flexwrap alignVertical">
            <div className="flexgrow">
              <TextBox placeholderText="Board Name" handleOnKeyUp={this.boardTitleChange} value={this.state.boardTitle} />
            </div>
            <div className="flexshrink">
              <Button text="Add" handleClick={this.addBoard} />
            </div>
          </div>
        </div>
        <div className="flexgrow overflow-y-auto margin10">
          <div className="dflex flexrow flexwrap">
            {boards.map(board => {
              return <Board title={board.title} boardId={board.id} handleClick={this.goToBoardDetailPage} />
            })}

          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    boards: state.boardReducer
  }
}

export default connect(mapStateToProps, {
  addBoard
})(BoardContainer);