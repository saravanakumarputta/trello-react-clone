import React from 'react';
import { connect } from 'react-redux';

import TextBox from '../../components/textBox/TextBox';
import Button from '../../components/button/Button';

import './CommentsContainer.css';

class CommentsContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      commentText: ''
    }
    this.handleCommentContentChange = this.handleCommentContentChange.bind(this);
  }

  handleCommentContentChange(content) {
    this.setState({
      commentText: content
    });
  }

  render() {
    let { commentIds, comments } = this.props;
    return (
      <div class="dflex flexcolumn commentContainer">
        <div className="posab closeIcon pointer" onClick={this.props.closeHandler}>X</div>
        <div className="flexgrow overflow-y-auto">
          {/* {commentIds.map(commentId => {
            return <div>{comments[commentId]}</div>
          })} */}
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>

          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>
          <div className="marginTB5">comments-commentId</div>

        </div>
        <div className="flexshrink">
          <div className="marginTB5">
            <TextBox placeholderText="Comment" handleOnKeyUp={this.handleCommentContentChange} value={this.state.commentText} />
          </div>
          <div className="marginTB5">
            <Button text="Comment" />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    commentIds: state.cardReducer[props.cardId].commentsIds || [],
    comments: state.commentReducer || {}
  }
}

export default connect(mapStateToProps, {})(CommentsContainer);