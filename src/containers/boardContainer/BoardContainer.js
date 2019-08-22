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
      boardTitle: '',
      addDisabled: true
    }
    this.goToBoardDetailPage = this.goToBoardDetailPage.bind(this);
    this.boardTitleChange = this.boardTitleChange.bind(this);
    this.addBoard = this.addBoard.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  goToBoardDetailPage(boardId) {
    this.props.history.push(`/boards/${boardId}`);
  }

  boardTitleChange(title, keyCode) {
    this.setState({
      boardTitle: title
    });

    if (title) {
      this.setState({
        addDisabled: false
      })
    } else {
      this.setState({
        addDisabled: true
      })
    }
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
      boardTitle: '',
      addDisabled: true
    })
  }

  handleOnKeyUp(keyCode) {
    if (keyCode.toString() === '13') {
      /* eslint-disable no-unused-expressions */
      !this.state.addDisabled ? this.addBoard() : null;
    }
  }

  render() {
    let { boards } = this.props;
    boards = normalize(boards);
    return (
      <div className="dflex flexcolumn h100 margin10 boardContainer">
        <div className="flexshrink margin10 maxwd400">
          <div className="dflex flexrow flexwrap alignVertical">
            <div className="flexgrow">
              <TextBox placeholderText="Board Name" handleOnKeyUp={this.handleOnKeyUp}
                handleOnChange={this.boardTitleChange} value={this.state.boardTitle} />
            </div>
            <div className="flexshrink">
              <Button text="Add" handleClick={this.addBoard} disabled={this.state.addDisabled} />
            </div>
          </div>
        </div>
        <div className="flexgrow overflow-y-auto margin10">
          <div className="dflex flexrow flexwrap">
            {boards.map(board => {
              return <Board title={board.title} key={board.id} boardId={board.id} handleClick={this.goToBoardDetailPage} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    boards: state.boards
  }
}

export default connect(mapStateToProps, {
  addBoard
})(BoardContainer);