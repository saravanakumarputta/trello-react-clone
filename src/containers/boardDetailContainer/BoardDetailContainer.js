import React from 'react';
import { connect } from 'react-redux';

import TextBox from '../../components/textBox/TextBox';
import Button from '../../components/button/Button';

import ListContainer from '../listContainer/ListContainer';

import { addList, deleteList } from '../../actions/ListActions';

class BoardDetailContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listTitle: '',
      addDisabled: true
    }
    this.addList = this.addList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.listTitleChange = this.listTitleChange.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  listTitleChange(title) {
    this.setState({
      listTitle: title
    })
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

  addList() {
    let id = new Date().getTime().toString();
    let listData = {
      id,
      title: this.state.listTitle,
      cardIds: [],
    };
    this.props.addList({
      list: {
        [id]: listData,
      },
      listId: id,
      boardId: this.props.match.params.id,
    });

    this.setState({
      listTitle: '',
      addDisabled: true
    })
  }

  removeList(listId) {
    this.props.deleteList({
      listId,
      boardId: this.props.match.params.id,
    });
  }

  componentDidMount() {
    let routeTo = '/boards';
    /* eslint-disable no-unused-expressions */
    this.props.boards[this.props.match.params.id] ? null : this.props.history.push(routeTo);
  }

  handleOnKeyUp(keyCode) {
    if (keyCode.toString() === '13') {
      /* eslint-disable no-unused-expressions */
      !this.state.addDisabled ? this.addList() : null;
    }
  }

  render() {
    let { listIds, lists } = this.props;
    return (
      <div className="dflex flexcolumn h100 margin10">
        <div className="flexshrink margin10 maxwd400">
          <div className="dflex flexrow flexwrap alignVertical">
            <div className="flexgrow">
              <TextBox placeholderText="List Name" handleOnKeyUp={this.handleOnKeyUp}
                handleOnChange={this.listTitleChange} value={this.state.listTitle} />
            </div>
            <div className="flexshrink">
              <Button text="Add" handleClick={this.addList} disabled={this.state.addDisabled} />
            </div>
          </div>
        </div>
        <div className="flexgrow margin10">
          <div className="dflex flexrow h100 overflow-x-auto">
            {listIds.map(listId => {
              return <ListContainer title={lists[listId].title} key={listId} listId={listId} deleteHandler={this.removeList} />
            })}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    lists: state.lists,
    listIds: (state.boards[props.match.params.id] ? state.boards[props.match.params.id].listIds : []),
    boards: state.boards
  }
}

export default connect(mapStateToProps, {
  addList,
  deleteList
})(BoardDetailContainer);