import React from 'react';
import { connect } from 'react-redux';

import TextBox from '../../components/textBox/TextBox';
import Button from '../../components/button/Button';

import { addComment } from '../../actions/CommentActions';

import './CommentsContainer.css';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentText: '',
      addDisabled: true
    }
    this.handleCommentContentChange = this.handleCommentContentChange.bind(this);
    this.addComment = this.addComment.bind(this);
    this.handleOnKeyUp = this.handleOnKeyUp.bind(this);
  }

  handleCommentContentChange(content) {
    this.setState({
      commentText: content,
    });
    if (content) {
      this.setState({
        addDisabled: false
      })
    }
    else {
      this.setState({
        addDisabled: true
      })
    }
  }

  addComment() {
    let id = new Date().getTime().toString();
    let commentData = {
      id,
      title: this.state.commentText
    };
    this.props.addComment({
      comment: {
        [id]: commentData,
      },
      cardId: this.props.cardId,
      commentId: id
    });

    this.setState({
      commentText: '',
      addDisabled: true
    })
  }

  idToDateString(id) {
    let dateTime = '';
    dateTime += new Date(parseInt(id)).toDateString();
    dateTime += " ";
    dateTime += new Date(parseInt(id)).toLocaleTimeString();
    return dateTime;
  }

  handleOnKeyUp(keyCode) {
    if (keyCode.toString() === '13') {
      /* eslint-disable no-unused-expressions */
      !this.state.addDisabled ? this.addComment() : null;
    }
  }

  render() {
    let { commentIds, comments } = this.props;
    return (
      <div className="dflex flexcolumn commentContainer">
        <div className="posab closeIcon pointer" onClick={this.props.closeHandler}>X</div>
        <div className="flexgrow overflow-y-auto">
          {commentIds.map(commentId => {
            return (
              <div className="marginTB5" key={commentId}>
                <div className="breakword">{comments[commentId].title}</div>
                <div className="hrLine w20"></div>
                <div>{this.idToDateString(commentId)}</div>
                <div className="hrLine"></div>
              </div>
            )
          })}
        </div>
        <div className="flexshrink">
          <div className="marginTB5">
            <TextBox placeholderText="Comment" handleOnKeyUp={this.handleOnKeyUp}
              handleOnChange={this.handleCommentContentChange} value={this.state.commentText} />
          </div>
          <div className="marginTB5">
            <Button text="Comment" disabled={this.state.addDisabled} handleClick={this.addComment} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    commentIds: state.cards[props.cardId].commentIds || [],
    comments: state.comments || {}
  }
}

export default connect(mapStateToProps, {
  addComment
})(CommentsContainer);