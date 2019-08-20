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
      listTitle: ''
    }
    this.addList = this.addList.bind(this);
    this.removeList = this.removeList.bind(this);
    this.listTitleChange = this.listTitleChange.bind(this);
  }

  listTitleChange(title) {
    this.setState({
      listTitle: title
    })
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
      listTitle: ''
    })
  }

  removeList(listId) {
    this.props.deleteList({
      listId,
      boardId: this.props.match.params.id,
    });
  }

  render() {
    let { listIds, lists } = this.props;
    return (
      <div className="dflex flexcolumn h100 margin10">
        <div className="flexshrink margin10 maxwd400">
          <div className="dflex flexrow flexwrap alignVertical">
            <div className="flexgrow">
              <TextBox placeholderText="List Name" handleOnKeyUp={this.listTitleChange} value={this.state.listTitle} />
            </div>
            <div className="flexshrink">
              <Button text="Add" handleClick={this.addList} />
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
    lists: state.listReducer,
    listIds: (state.boardReducer[props.match.params.id] ? state.boardReducer[props.match.params.id].listIds : [])
  }
}

export default connect(mapStateToProps, {
  addList,
  deleteList
})(BoardDetailContainer);